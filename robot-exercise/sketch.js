function setup() {
  createCanvas(720, 480); // creates canvas with a height of 720, a width of 480
  smooth(); // all shapes will be created with a smooth stroke (default)
  strokeWeight(2); // sets thickness of all lines to 2
}  
 
function draw() { 
  background(205); // sets background color to grey between each frame (each time there is a change in robot's position)
  translate(mouseX, mouseY);
  
  //Neck
  stroke(152, 66, 244); // sets color for line (bright purple)
  line(266, 257, 266, 162); // draws the first line of the neck
  line(276, 257, 276, 162); // draws the second line of the neck
  line(286, 257, 286, 162); // draws the third line of the neck
  
  //Antennae
  line(276, 155, 246, 112); // draws the first antenna (line)
  line(276, 155, 306, 56);  // draws the second antenna (line)
  line(276, 155, 342, 170); // draws the third antenna (line)
  
  //Body
  noStroke(); // draws shapes without an outline
  fill(188, 185, 83); // sets color for half circle at bottom (gold)
  ellipse(264, 377, 66, 66); // draws half circle at bottom
  fill(127, 107, 147); // sets color for main rectangle for body (purple)
  rect(219, 257, 90, 120); // draws main rectangle for body
  fill(188, 185, 83); // sets color for line/rectangle on body (gold)
  rect(219, 274, 90, 6); // draws line/rectangle on body
  
  //Head
  fill(127, 107, 147); // sets color for main circle (head) (purple)
  ellipse(276, 155, 90, 90); // draws main circle (head)
  fill(255); // sets color for eye (second biggest circle) (white)
  ellipse(288, 150, 28, 28); // draws eye (second biggest circle)
  fill(52, 15, 102); // sets color for dot in eye (dark purple)
  ellipse(288, 150, 6, 6); // draws dot in eye
  fill(188, 185, 83); // sets color for other circles on head (gold)
  ellipse(263, 148, 10, 10); // draws circle at 9 oclock
  ellipse(296, 130, 8, 8); // draws circle at 1 oclock
  ellipse(305, 162, 6, 6); // draws circle at 4 oclock
}


