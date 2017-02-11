/*
  Originally created by Rachel Barnecut
  Last edited by Rachel Barnecut
  Last edited on: 2-11-2017
  This program allows the user to move their mouse from left to right.
  As the user's mouse moves, a dog follows their mouse (a bone).
*/

var dogDirection = 0; // tracks dog's direction
var dogCenter = 400; // keeps track of dog's center position

function setup() {
  createCanvas(800, 400); // canvas of 800 x 400
  background(150); // grey background
  rectMode(CENTER); // rectangles are drawn from their center point
  noStroke(); // no stroke on shapes
}

function draw() {
  background(150); // redraws grey background
  moveBone(); // moves bone based on user's mouse position
  dog(400 + dogDirection); // draw's dog
  moveDog(400);// moves dog based on where
}

// draws dog; depends on user's mouse position in relation to dog's center
function dog(x) {
  fill(181, 116, 19); // brown fill
  if (mouseX < dogCenter) { // dog facing left
    rect(x, 250, 80, 30); // body
    rect(x - 45 , 230, 40, 25); // head
    triangle(x - 35, 205, x - 30, 217.5, x - 40, 217.5); // ear
    rect(x + 35, 230, 4, 10); // tail
    rect(x - 30 , 270, 7, 20); // leg
    rect(x + 30 , 270, 7, 20); // leg
  } else if (mouseX > dogCenter) { // dog facing right
    rect(x, 250, 80, 30); // body
    rect(x + 45, 230, 40, 25); // head
    triangle(x + 45, 205, x + 50, 217.5, x + 40, 217.5); // ear
    rect(x - 35, 230, 4, 10); // tail
    rect(x - 30, 270, 7, 20); // leg
    rect(x + 30, 270, 7, 20); // leg
  } else { // dog facing user, when dog above dog's center
    rect(x, 250, 30, 30); // body
    rect(x, 230, 25, 25); // head
    triangle(x  - 7, 205, x - 3, 217.5, x - 10 , 217.5); // left ear
    triangle(x + 7, 205, x + 3 , 217.5, x + 10 , 217.5); // right ear
    rect(x  - 10, 270, 7, 20); // left leg
    rect(x  + 10, 270, 7, 20); // right leg
  }
}

// moves dog based on mouse position compared to dog's center
function moveDog(x) {
  if (mouseX > dogCenter || mouseX > 730) { // moves dog to 
    dogDirection = min(dogDirection + 1, 250);
    dogCenter = min(dogCenter + 1, 650);
  } else if (mouseX < dogCenter || mouseX < 70) {
    dogDirection = max(dogDirection - 1, -250);
    dogCenter = max(dogCenter - 1, 150);
  }
}

// bone shape
function bone(x) {
  fill(255); // white fill
  rect(x, 100, 50, 20); // bone body
  ellipse(x - 25, 90, 20, 20); // top left circle
  ellipse(x - 25, 110, 20, 20); // bottom left circle
  ellipse(x + 25, 90, 20, 20); // top right circle
  ellipse(x + 25, 110, 20, 20); // bottom right circle
}

// moves bone based on user's mouse position
function moveBone() {
  if (mouseX < 70) {
    bone(70); // bone will stop at x = 70 as to not go off the left side of the screen
  } else if (mouseX > 730) {
    bone(730); // bone will stop at x = 730 as to not go off the right side of the screen
  } else { // bone will have the same x-position as the user's mouse when on the canvas
    bone(mouseX);
  }
}