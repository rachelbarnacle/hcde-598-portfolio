/*
  Originally created by Rachel Barnecut
  Last edited by Rachel Barnecut
  Last edited on: 2-3-2017
  This program creates a monster. The monster's eyes move from left to right,
    depending on where the user's mouse is in relation to the verticle center 
    of the monster. When the user clicks on the canvas, the monster starts 
    jumping up and down (eyes do not move side to side). When the user clicks 
    the canvas again, the monster stops jumping, and its eyes resume moving 
    from left to right. This click interaction is repeated for as long as the 
    user interacts with it.
*/

var page = 0; // if zero, eyes move; if 1, monster jumps
var eyeDirection = 0; // moves eyes from left-center-right
var jumpValue = 0; // moves monster up and down canvas
var jumpDir = 1; // determines direction of monster's movements. 1 = down; -1 = up

function setup() {
  createCanvas(800, 750); // canvas of 800x750 drawn
  noStroke(); // no strokes used when drawing shapes
  rectMode(CENTER); // all rectangles are drawn from their center
}

function draw() {
  background(232, 225, 180); // pale yellow background for canvas
  monsterCat(390, 175); // draws monster at 390, 175 (original spot)
  if (page == 0) { // monster's eyes will move
    jumpValue = 0; // sets the monster back to its original position
    moveEyes(390); // moves eyes; parameter must equal first parameter passed in monsterCat
  } else { // monster will jump
    eyeDirection = 0; // stops eyes from moving while jumping
    jumpinJumpin(); // makes monster jump
  }
}

// changes the value of the page variable when the user clicks their mouse
function mousePressed() {
  if (mouseIsPressed) { // When the user clicks
    page = 1 - page; // page will always equal either 1 or 0
  }
}

// moves the monster's eyes left and right, based on the user's mouse position
function moveEyes(x) {
  if (mouseX > 0 && mouseX < x) { // eyes move to the left (x decreasing)
    eyeDirection = -min(60, -.5 * (mouseX - x)); // eyes move to the left
  } else if (mouseX > x) { // eyes move to the right (x increasing)
    eyeDirection = min(60, .5 * (mouseX - x)); // eyes move to the right 
  } else if (mouseX = x) { // mouse is in the horizontal center of the canvas
    eyeDirection = 0; // eyes stay in center
  }
}

// makes the monster jump up and down 
function jumpinJumpin() {
  if (jumpDir == 1 && jumpValue < 285) { // checks that monster is moving down and sets limit for how far the monster can go down as jumpValue increases
    jumpValue = jumpValue + 5; // monster moves down
  } else if (jumpDir == -1 && jumpValue > 10) { // checks that monster is moving up and sets limit for how far the monster can go up as jumpValue decreases
    jumpValue = jumpValue - 5; // monster moves up
  } else if (jumpValue == 285 || jumpValue == 10) { // when at jumpValue limits, the monster changes direction
    jumpDir = -jumpDir; // monster changes direction at top and bottom of canvas
  }
}

// draws a monster at the x, y location passed; includes the change in jumpValue to the y coordinate
// this monster includes a body, ears, eye, whiskers, mouth, legs, and feet
function monsterCat(x, y) {
  body(x, y + jumpValue);
  ears(x, y + jumpValue);
  eye(x, y + jumpValue);
  whiskers(x, y + jumpValue);
  mouth(x, y + jumpValue);
  legs(x, y + jumpValue);
  feet(x, y + jumpValue);
}

// draws body given the x, y coordinates
function body(x, y) {
  fill(234, 126, 232); // fill: pink
  rect(x, y, 500, 200); // draws 500x200 rectangle
}

// draws ears given the x, y coordinates
function ears(x, y) {
  fill(234, 126, 232); // fill: pink (same as rest of body)
  triangle(x - 150, y - 145, x - 200, y - 100, x - 100, y - 100); // left ear
  triangle(x + 150, y - 145, x + 100, y - 100, x + 200, y - 100); // right ear
  fill(229, 227, 229); // fill: grey
  triangle(x - 150, y - 135, x - 190, y - 100, x - 110, y - 100); // left inner-ear
  triangle(x + 150, y - 135, x + 110, y - 100, x + 190, y - 100); // right inner-ear
}

// draws eye given the x, y coordinates
function eye(x, y) {
  fill(255); // fill: white
  ellipse(x, y - 20, 160, 80); // draws white part of eye
  fill(62, 156, 239); // fill: blue
  ellipse(x + eyeDirection, y - 20, 20, 20); // draws dot in eye
}

// draws whiskers between eye and mouth, given the x, y coordinates
function whiskers(x, y) {
  // nose
  fill(0); // fill: black
  ellipse(x, y + 42.5, 10, 10); // dot for nose
  // whiskers
  stroke(0); // stroke color set to black
  strokeWeight(3); // stroke weight set to 3 for whiskers
  line(x - 5, y + 40, x - 75, y + 25); // top left whisker
  line(x - 5, y + 45, x - 75, y + 40); // bottom left whisker
  line(x + 5, y + 40, x + 75, y + 25); // top right whisker
  line(x + 5, y + 45, x + 75, y + 40); // bottom right whisker
  noStroke(); // remaining shapes drawn without stroke
}

// draws mouth given the x, y coordinates
function mouth(x, y) {
  fill(244, 44, 74); // fill: red
  arc(x, y + 65, 50, 50, 0, PI); // draws half circle
}

// draws the legs given the x, y values
function legs(x, y) {
  // legs
  fill(234, 126, 232); // fill: pink (same as body)
  rect(x - 62.5, y + 137.25, 25, 75); // left leg
  rect(x + 62.5, y + 137.25, 25, 75); // right leg
  // stripes on legs
  fill(136, 239, 158); // fill: green
  rect(x - 62.5, y + 125, 25, 15); // left leg stripe top
  rect(x - 62.5, y + 155, 25, 15); // left leg stripe bottom
  rect(x + 62.5, y + 125, 25, 15); // right leg stripe top
  rect(x + 62.5, y + 155, 25, 15); // right leg stripe bottom
}

// draws the feet given the x, y values
function feet(x, y) {
  // feet
  fill(91, 51, 160); // fill: purple
  rect(x - 87.75, y + 190, 75, 30); // left foot
  rect(x + 87.5, y + 190, 75, 30); // right foot
  // feet details: dot on toe and sole
  fill(146, 228, 229); // fill: Light blue
  ellipse(x - 125, y + 175, 10, 10); // left toe detail
  ellipse(x + 125, y + 175, 10, 10); // right toe detail
  rect(x - 87.75, y + 207.5, 75, 5); // left sole
  rect(x + 87.5, y + 207.5, 75, 5); // right sole
}