// Rachel Barnecut
// Lego family: 5 characters from the Avengers start 
//   in different parts of the canvas to meet in the middle

var x = 0;
var y = 0;

function setup() {
  createCanvas(1000, 600); // draws canvas
  background(207); // sets grey background color for canvas
  noStroke(); // no stroke on shapes drawn on canvas
}

function draw() {
  background(207); // redraws canvas after each character redrawn with every increment of x, y
  y = y + 1; // increments y by 1
  x = x + 1; // increments x by 1
  blackWidow(); // draws Black Widow
  ironMan(); // draws Iron Man
  captainAmerica(); // draws Captain America
  spiderMan(); // draws Spider Man
  hulk(); // draws Hulk
}

function blackWidow() {
  // Black Widow's movement
  var xPos = max(20, x); // start in top-left corner
  var yPos = min(400, 3 * y); // start in top-left corner
  xPos = min(xPos + 2, 230); // stop at x = 230
  yPos = min(yPos, 225); // stop at y = 225

  // Black Widow's shape
  var width = 70; // width most details of character
  fill(0); // black
  rect(xPos, yPos, width, 175); // body + basic shape
  fill(211, 75, 38); // orangy/red hair color
  rect(xPos, yPos, width, 20); // hair
  fill(229, 212, 176); // face color
  rect(xPos, yPos + 20, width, 50); // face
  fill(144); // grey belt color
  rect(xPos, yPos + 125, width, 10); // belt
  fill(255, 0, 0); // red belt buckle color
  rect(xPos + 30, yPos + 125, 10, 10); // belt buckle
}

function ironMan() {
  // Iron Man's movement
  var xPos = 800; // start in top-right corner
  var yPos = max(10, x); // start in top-right corner
  xPos = max((800 - (4 * x)), 330); // stop at x = 330
  yPos = min(3 * yPos, 200); // stop at y = 200

  // Iron Man's shape
  var width = 70; // width most details of character
  fill(255, 0, 0); // red
  rect(xPos, yPos, width, 200); // body + basic shape
  fill(234, 223, 11); // eye, circle color - yellow
  rect(xPos, yPos + 20, width, 30); // eyes
  ellipse(xPos + 35, yPos + 85, 30, 30); // circle
}

function captainAmerica() {
  // Captain America's movement
  var xPos = 20; // start in bottom-left corner
  var yPos = 375; // start in bottom-left corner
  xPos = min(2 * x, 430); // stop at x = 430;
  yPos = max(375 - (4 * y), 200); // stop at y = 200

  // Captain America's shape
  var width = 70; // width most details of character
  fill(0, 0, 255); // blue
  rect(xPos, yPos, width, 200); // body + basic shape
  fill(229, 212, 176); // face color
  rect(xPos, yPos + 20, width, 50); // face
  fill(255, 0, 0); // red circle color
  ellipse(xPos + 35, yPos + 100, 45, 45); // red circle
  fill(255); //  white circle color
  ellipse(xPos + 35, yPos + 100, 30, 30); // white circle
  fill(0, 0, 255); // blue circle color
  ellipse(xPos + 35, yPos + 100, 20, 20); // blue circle
  fill(255, 0, 0); // show color (red)
  rect(xPos, yPos + 175, width, 25); // red shoes
}

function spiderMan() {
  // Spider Man's movement
  var xPos = 530; // moves along x = 530
  var yPos = max(-15, y); // drops down from top of canvas
  yPos = min(yPos + 1, 200); // stops at y = 200

  // Spider Man's shape
  var width = 70; // width most details of character
  fill(255, 0, 0); // red
  rect(xPos, yPos, width, 200); // body + basic shape
  fill(255); // eye color
  rect(xPos, yPos + 30, width, 15); // eyes
  fill(0, 0, 255); // pants color
  rect(xPos, yPos + 115, width, 50); // pants
  fill(0); // circle color
  ellipse(xPos + 35, yPos + 90, 25, 25); // circle
}

function hulk() {
  // Hulk's movement
  var xPos = 850; // start in bottom-right corner
  var yPos = 320; // start in bottom-right corner
  xPos = max(850 - (2 * x), 630); // stop at : x = 630
  yPos = max(320 - 2 * y, 125); // stop at : y = 125

  //Hulk's shape
  var width = 140; // width most details of character
  fill(102, 140, 82); // green
  rect(xPos, yPos, width, 275); // body + basic shape
  fill(0); // hair color
  rect(xPos, yPos, width, 20); // hair
  fill(87, 56, 181); // pants color
  rect(xPos, yPos + 180, width, 60); // pants
}