// Created by: Rachel Barnecut & Layne Soike
// Last edited: 3/12/17
// Description: The COLOR ME app is a coloring application that allows users to select the
//    color and pen (stroke) weight they want to color with. Users can also erase, 
//    reset, and save their image.

var weights = []; // array of numbers used for stroke weights
var colors = []; // array of colors
var selectedColor; // current color selected by user
var selectedStrokeWeight; // current stroke weight selected by user
var squareButtonSize = 32; // size of square buttons
var firstRowButtonTop = 444; // where the first row of buttons aligns (top)
var firstRowButtonBottom = firstRowButtonTop + squareButtonSize; // where the first row of buttons aligns (bottom)
var secondRowButtonTop = 514; // where the second row of buttons aligns (top)
var secondRowButtonBottom = secondRowButtonTop + squareButtonSize; // where the second row of buttons aligns (bottom)
var dashboardColumnLeft = 125; // where x-position of left column starts
var dashboardColumnRight = 485; // where x-position of right column starts
var drawOrErase = 0; // 0 == coloring, 1 == erasing
var previousColor; // stores last color selected
var previousStrokeWeight; // stores last stroke weight selected (color)


// preloads an image for coloring
function preload() {
  owl = loadImage("images/owl.png");
}

function setup() {
  createCanvas(800, 600); // canvas size 800x600
  background(255); // background set to white
  colors = [ // creates array of colors
    (color(255, 0, 0)), // red
    (color(255, 119, 0)), // orange
    (color(255, 221, 0)), // yellow
    (color(8, 175, 8)), // green
    (color(0, 0, 255)), // blue
    (color(163, 10, 252)), // purple
    (color(122, 70, 2)), // brown
    (color(0)), // black
    (color(255)) // white
  ];
  selectedColor = colors[0]; // default selected color is red
  previousColor = selectedColor; // initially set to same as selectedColor
  fillWeightsArray(); // calls function to fill weights[]
  selectedStrokeWeight = weights[2]; // default selected color is middle-sized stroke
  previousStrokeWeight = selectedStrokeWeight; // initially set to selectedStrokeWeight
}

function draw() {
  image(owl, 180, 0); // draws the coloring image
  drawDashboard(); // draws the dashboard
  selectColor(); // provides functionality for selecting color
  selectWeight(); // provides functionality for selecting pen weight
  highlightSelected(); // highlights selected color/pen weight or eraser weight
  erase(); // provides erasing functionality
}

// draws dashboard with buttons
function drawDashboard() {
  noStroke(); // removes stroke
  fill(245); // background color to light grey
  rect(0, 400, 800, 200); // bounding box for dashboard
  drawColorButtons(); // calls function to draw color buttons
  drawResetButton(); // calls function to draw reset button
  drawSaveButton(); // calls function for save button
  // drawHomeButton();
  drawWeightButtons(); // calls function to draw pen weights buttons
  drawEraserButtons(); // calls function to draw eraser buttons
}

// when mouse is dragged, user is able to color or erase in the coloring area based on selected color and stroke weight
function mouseDragged() {
  stroke(selectedColor); // stroke color based on user's current selection
  strokeWeight(selectedStrokeWeight); // stroke weight based on user's current selection
  line(pmouseX, pmouseY, mouseX, mouseY); // draws line between mouse's current x-y position and previous x-y position
}

// when mouse is pressed within the coloring area (above 500), a single click (no movement) paints a dot
function mousePressed() {
  if (mouseY < 500) { // above the dashboard
    noStroke(); // no stroke around the ellipse
    fill(selectedColor); // fill color of ellipse based on user's current selection
    ellipse(mouseX, mouseY, selectedStrokeWeight, selectedStrokeWeight); // size of ellipse based on user's current selection
  }
}

// when mouse has been released by the user, certain action performed based on 
// where the mouse was released (whether or not user's mouse was over a button) 
function mouseReleased() {
  if (mouseX > dashboardColumnLeft && mouseX < 195 && mouseY > secondRowButtonTop && mouseY < 546) { // if user release mouse when within the range of the reset button
    resetVariables(); // call function to reset the variables
  } else	if (mouseX > dashboardColumnLeft + 90 && mouseX < 285 && mouseY > secondRowButtonTop && mouseY < 546) { // if user releases mouse when within the range of the save button
    save("myColoring.png"); // save the canvas - original save
  // } else if (mouseX > dashboardColumnLeft + 240 && mouseX < 435 && mouseY > secondRowButtonTop && mouseY < 546) { // if user releases mouse when within the range of home button
  // 	openURL("welcome.html");
  }
}		

// fills weights array with values that increase by a multiple of 2; creates five different weights
function fillWeightsArray() {
  for (i = 1; i <= 5; i++) {
    append(weights, i * 2); // add to the array
  }
}

// draws a label for Color buttons and a square button for each index 
// of the colors array (except the last item, white)
function drawColorButtons() {
  fill(0); // label fill set to black
  noStroke(); // no stroke for label
  text("COLORS", dashboardColumnLeft, 435); // label for color buttons
  for (i = 0; i < colors.length - 1; i++) { // create and fill color buttons
    fill(colors[i]); // fill set to value in colors at index i
    rect(dashboardColumnLeft + 40 * i, firstRowButtonTop, squareButtonSize, squareButtonSize); // draw button
  }
}

// highlights the currently selected color/pen weight if coloring, or eraser weight if erasing
function highlightSelected() {
  if (drawOrErase === 0) { // user is drawing
    for (i = 0; i < colors.length - 1; i++) { // iterate through colors[] until match is found
      if (colors[i] == selectedColor) { // when value of colors[] that matches the selected color
        outline(dashboardColumnLeft + 40 * i, firstRowButtonTop, squareButtonSize, squareButtonSize); // calls outline function to outline this square
      }
    }
    for (i = 0; i < weights.length; i++) { // iterate through weights[] until match is found
      if (weights[i] == selectedStrokeWeight) { // when value of weights[] that matches the selected pen weight
        outline(dashboardColumnRight + 40 * i, firstRowButtonTop, squareButtonSize, squareButtonSize); // calls outline function to outline this square
      }
    }
  } else { // user is erasing
    for (i = 0; i < weights.length; i++) { // iterate through weights[] until match is found
      if (weights[i] * 2 == selectedStrokeWeight) { // when value of weights[] * 2 that matches the selected eraser weight
        outline(dashboardColumnRight + 40 * i, secondRowButtonTop, squareButtonSize, squareButtonSize); // calls outline function to outline this square
      }
    }
  }
}

// draws a black outline around the rectangle passed
function outline(x, y, w, h) {
  noFill(); // does not fill rectangle
  strokeWeight(3); // stroke weight set to three
  stroke(0); // stroke color set to black
  rect(x, y, w, h); // draws rectangle of size and position passed
  noStroke(); // removes stroke 
}

// draws a label for Pen Weight buttons and a square button with an
// ellipse in the middle to indicate stroke weight, for each index 
// of the weights array
function drawWeightButtons() {
  fill(0); // fill set to black (for text)
  text("PEN WEIGHT", dashboardColumnRight, 435); // label for pen weight buttons
  noStroke(); // stroke removed
  for (i = 0; i < weights.length; i++) { // draws a button for each value in weights[]
    fill(180); // button fill set to light grey
    rect(dashboardColumnRight + 40 * i, firstRowButtonTop, squareButtonSize, squareButtonSize); // draws square button
    if (drawOrErase === 0) { // user drawing
      fill(selectedColor); // fill of ellipses set to currently selected color
    } else { // user erasing
      fill(previousColor); // fill of ellipses set to previously selected color prior to erasing
    }
    ellipse(501 + 40 * i, 460, weights[i], weights[i]); // draws an ellipse in the middle of the buttons, size based on value in weights
  }
}

// draws a label for Eraser buttons and a square button with an 
// ellipse in the middle to indicate stroke weight, for each index
// of the weights array (stroke weights doubled for erasing)
function drawEraserButtons() {
  fill(0); // fill set to black (for text)
  text("ERASER", dashboardColumnRight, 505); // label for eraser buttons
  noStroke(); // stroke removed
  for (i = 0; i < weights.length; i++) { // draws a button for each value in weights[]
    fill(180); // button fill set to light grey
    rect(dashboardColumnRight + 40 * i, secondRowButtonTop, squareButtonSize, squareButtonSize); // draws square button
    fill(colors[8]); // fill of ellipses set to white
    ellipse(501 + 40 * i, 530, weights[i] * 2, weights[i] * 2); // draws an ellipse in the middle of the buttons, size doubled based on value in weights
  }
}

// draws the reset button
function drawResetButton() {
  if (mouseX > dashboardColumnLeft && mouseX < 195 && mouseY > secondRowButtonTop && mouseY < 546 && mouseIsPressed) { // clicked state
    fill(181, 218, 252); // light blue
  } else if (mouseX > dashboardColumnLeft && mouseX < 195 && mouseY > secondRowButtonTop && mouseY < 546) { // hover state
    fill(150); // grey
  } else { // not interacting with
    fill(180); // light grey
  }
  noStroke(); // stroke removed
  rect(dashboardColumnLeft, secondRowButtonTop, 72, 32); // draws reset button rectangle
  fill(0); // fill set to black for label
  text("RESET", 140, 535); // Reset label drawn on button
}

// draws a white rectangle over what the user has colored
// but under the image to simulate a reset
function resetVariables() {
  noStroke(); // stroke removed
  fill(255); // white
  rect(0, 0, 800, 400); // white rectangle drawn over coloring area
}

// draws the save button
function drawSaveButton() {
  if (mouseX > dashboardColumnLeft + 80 && mouseX < 275 && mouseY > secondRowButtonTop && mouseY < 546 && mouseIsPressed) { // clicked state
    fill(181, 218, 252); // light blue
  } else if (mouseX > dashboardColumnLeft + 80 && mouseX < 275 && mouseY > secondRowButtonTop && mouseY < 546) { // hover state
    fill(150); // grey
  } else { // not interacting with
    fill(180); // light grey
  }
  noStroke(); // stroke removed
  rect(dashboardColumnLeft + 80, secondRowButtonTop, 72, 32); // draws save button rectangle
  fill(0); // fill set to black for label
  text("SAVE", 223, 535); // Save label drawn on button
}

// draws the home button
function drawHomeButton() {
  if (mouseX > dashboardColumnLeft + 240 && mouseX < 435 && mouseY > secondRowButtonTop && mouseY < 546 && mouseIsPressed) { // clicked state
    fill(181, 218, 252); // light blue
  } else if (mouseX > dashboardColumnLeft + 240 && mouseX <435 && mouseY > secondRowButtonTop && mouseY < 546) { // hover state
    fill(150); // grey
  } else { // not interacting with
    fill(180); // light grey
  }
  noStroke(); // stroke removed
  rect(dashboardColumnLeft + 240, secondRowButtonTop, 72, 32); // draws save button rectangle
  fill(0); // fill set to black for label
  text("HOME", 383, 535); // Save label drawn on button
}

// changes the color user draws with based on button pressed
function selectColor() {
  for (i = 0; i < colors.length - 1; i++) { // for all of the colors in colors[] except for white
    if (mouseX >= dashboardColumnLeft + 40 * i && mouseX <= dashboardColumnLeft + squareButtonSize + 40 * i && mouseY >= firstRowButtonTop && mouseY <= firstRowButtonBottom && mouseIsPressed) { // user clicks one of the color buttons
      previousColor = selectedColor; // store the previously selected color
      selectedColor = colors[i]; // set the selected color to the color clicked on by the user
      selectedStrokeWeight = previousStrokeWeight; // saves previous stroke weight
      drawOrErase = 0; // user is coloring
    }
  }
}

// changes the pen weight the user draws with based on button pressed
function selectWeight() {
  for (i = 0; i < weights.length; i++) { // for all of the values in weights[]
    if (mouseX >= dashboardColumnRight + 40 * i && mouseX <= dashboardColumnRight + squareButtonSize + 40 * i && mouseY >= firstRowButtonTop && mouseY <= firstRowButtonBottom && mouseIsPressed) { // user clicks one of the pen weight buttons
      if (drawOrErase == 1) { // user previously erasing, just clicked a pen weight button
        selectedColor = previousColor; // store the pre-erasing color 
        drawOrErase = 0; // user is now coloring
      }
      selectedStrokeWeight = weights[i]; // set the stroke weight to the weight clicked on by the user
    }
  }
}

// user is erasing (drawing with white) with a selected weight
function erase() {
  if (drawOrErase === 0) { // coloring before erasing
    previousStrokeWeight = selectedStrokeWeight; // store selected stroke weight as the previous stroke weight
  }
  for (i = 0; i < weights.length; i++) { // for all of the values in weights[]
    if (mouseX >= dashboardColumnRight + 40 * i && mouseX <= dashboardColumnRight + squareButtonSize + 40 * i && mouseY >= secondRowButtonTop && mouseY <= secondRowButtonBottom && mouseIsPressed) { // if the user clicks on one of the eraser buttons
      selectedStrokeWeight = weights[i] * 2; // sets stroke to weight selected by user, double the value in weights[] 
      selectedColor = colors[8]; // sets stroke color to white
      drawOrErase = 1; // user is erasing
    }
  }
}
