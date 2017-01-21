// Recreating a piece of art by Mai-Thu Perret, Untitled
// Found at: https://www.moma.org/collection/works/201596?locale=en

function setup() {
  createCanvas(400, 650); // creates canvas with a width of 400, a height of 650
  smooth(); // all shapes will be created with a smooth stroke (default)
  strokeWeight(1); // sets thickness of all lines to 1
  background(199, 201, 199); // sets canvas' background color to grey
  
  //top set of figures
  //yellow circles
  fill(234, 242, 19) // sets fill for 3 small circles to yellow
  stroke(121, 121, 122) // sets stroke color for small circles to dark grey
  ellipse(200, 125, 50, 50); // draws top yellow circle
  ellipse(125, 290, 50, 50); // draws bottom left yellow circle
  ellipse(275, 290, 50, 50); // draws bottom right yellow circle
  
  //black circle
  noStroke(); //removes grey stroke on black circle
  fill(0); // sets fill to black for big circle
  ellipse(200, 225, 200, 200); // draws black circle
  
  //circle with white outline
  stroke(239, 242, 239); // sets stroke color for white-grey circle outline
  strokeWeight(4); // sets thickness of white circle's outline to 4
  ellipse(200, 225, 130, 130) // draws circle with white outline
  
  //series of arcs in black circle
  noFill();
  strokeWeight(5);
  arc(200, 225, 150, 150, HALF_PI, PI); //smaller arc
  arc(200, 225, 180, 180, 1.3*PI, .23*PI); // bigger arc
  
  //green circle
  noStroke();
  fill(208, 234, 208); // sets fill to greenish color
  ellipse(200, 225, 50, 50); // draws greenish circle in middle of black circle
  
  //bottom half of image: triangle
  strokeWeight(1); // reduces stroke weight of triangle to 1
  stroke(121, 121, 122); // sets stroke color to black
  fill(244, 180, 83); // sets fill to orange
  triangle(100, 400, 200, 575, 300, 400); // draws triangle
}
