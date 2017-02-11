/*
  Originally created by Rachel Barnecut
  Last edited by Rachel Barnecut
  Last edited on: 2-11-2017
  This applies a random  tint to the image when the user clicks the Random Tint button.
  The user can reset the image to the original coloring by clicking the Original Image button.
*/

var photo; // photo variable
var aspectRatio = 665 / 1000; // original size: 1000 x 665

function preload() {
  photo = loadImage("elephant.jpg"); // loads elephant image
}

function setup() {
  createCanvas(600, 450); // creates 600 x 450 canvas
  background(125); // sets background to grey
  image(photo, 0, 0, 600, 600 * aspectRatio); // resizes image to same width as canvas
  textSize(14); // sets text size to 16
}

function draw() {
  buttonSet(); // calls buttons + functionality
}

// draws buttons + functionality
function buttonSet() {
  buttonOriginal(72, 143, 242); // Original Image button, blue
  buttonTint(72, 143, 242); // Random Tint button, blue
  redTint(); // applies random tint to image
  originalImage(); // removes any applied tint
}

// draws "Original Image" button
function buttonOriginal(x, y, z) {
  fill(x, y, z); // sets fill to passed values ((x, y, z) = (R, G, B))
  rect(25, 402, 120, 40); // draws "Original Image" button
  fill(0); // sets text to black
  text("Original Image", 40, 428); // button label: Original Image
}

//draws "Random Tint" button
function buttonTint(x, y, z) {
  fill(x, y, z); // sets fill to passed values ((x, y, z) = (R, G, B))
  rect(150, 402, 120, 40); // draws "Random Tint" button
  fill(0); // sets text to black
  text("Random Tint", 170, 428); // button label: Random Tint
}

// removes any applied tints, restores to original coloring when "Original Image" is pressed
// controls hover and clicking color of button
function originalImage() {
  if ((mouseIsPressed == true) && mouseX > 25 && mouseX < 145 && mouseY > 402 && mouseY < 442) { // user clicking Original Image button
    buttonOriginal(198, 204, 211); // click color: grey
    image(photo, 0, 0, 600, 600 * aspectRatio); // photo
    noTint(); // no tint to the image
  } else if (mouseX > 25 && mouseX < 145 && mouseY > 402 && mouseY < 442) { // user hovering over  Original Image button
    buttonOriginal(133, 170, 221); // click color: light blue
  }
}

// applies a random  tint when "Random Tint" is pressed
// controls hover and clicking color of button
function redTint() {
  if ((mouseIsPressed == true) && mouseX > 150 && mouseX < 270 && mouseY > 402 && mouseY < 442) { // user clicking Random Tint button
    buttonTint(198, 204, 211); // click color: grey
    image(photo, 0, 0, 600, 600 * aspectRatio); // photo
    tint(255, random(0, 255), random(0, 255), random(0, 255)); // random tint to photo
  } else if (mouseX > 150 && mouseX < 270 && mouseY > 402 && mouseY < 442) { // user hovering over Random Tint button
    buttonTint(133, 170, 221); // hover color: light blue
  }
}