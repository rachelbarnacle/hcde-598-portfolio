/*
  Originally created by Rachel Barnecut
  Last edited by Rachel Barnecut
  Last edited on 2-24-2017
  This program reads an array of arrays to plot datapoints representing the amount of grams of sugar and 
    fiber in each. When the user hovers over each point, the cereal's name, manufactur, and consumer reports
    score (out of 100) displays.
*/

var canvasHeight = 800; // height of canvas
var canvasWidth = canvasHeight * 1.5; // width of canvas
var offset = 110; // offset value visualization
var xAxisLength = canvasHeight; // length of x-axis
var yAxisLength = canvasHeight * 0.75; // length of y-axis
var xIncrement = 16; // number of markers along x-axis
var yIncrement = 17; // number of markers along y-axis
var xScaleConstant = xAxisLength / xIncrement; // constant space between scale markers, x-axis
var yScaleConstant = yAxisLength / yIncrement; // constant space between scale markers, y-axis
var baseline = offset + yAxisLength; // y = 0, x-axis, baseline of graph

// array of cereal data
// order of information: name, manufacturer, fiber (g), sugar (g), score (as determined by Consumer Reports)
// portion of data from : http://davis.wpi.edu/xmdv/datasets/cereal.html		
var cereals = [
  ["Cheerios", "General Mills", 2, 1, 50.764999],
  ["Cinnamon Toast Crunch", "General Mills", 0, 9, 19.823573],
  ["Clusters", "General Mills", 2, 7, 40.400208],
  ["Cocoa Puffs", "General Mills", 0, 13, 22.736446],
  ["Crispy Wheat & Raisins", "General Mills", 2, 10, 36.176196],
  ["Honey Nut Cheerios", "General Mills", 1.5, 10, 31.072217],
  ["Kix", "General Mills", 0, 3, 39.241114],
  ["Lucky Charms", "General Mills", 0, 12, 26.734515],
  ["Raisin Nut Bran", "General Mills", 2.5, 8, 39.7034],
  ["Total Raisin Bran", "General Mills", 4, 14, 28.592785],
  ["Wheaties Honey Gold", "General Mills", 1, 8, 36.187559],
  ["All-Bran", "Kelloggs", 9, 5, 59.425505],
  ["All-Bran with Extra Fiber", "Kelloggs", 14, 0, 93.704912],
  ["Apple Jacks", "Kelloggs", 1, 14, 33.174094],
  ["Corn Flakes", "Kelloggs", 1, 2, 45.863324],
  ["Corn Pops", "Kelloggs", 1, 12, 35.782791],
  ["Cracklin' Oat Bran", "Kelloggs", 4, 7, 40.448772],
  ["Froot Loops", "Kelloggs", 1, 13, 32.207582],
  ["Frosted Flakes", "Kelloggs", 1, 11, 31.435973],
  ["Frosted Mini-Wheats", "Kelloggs", 3, 7, 58.345141],
  ["Just Right Crunchy  Nuggets", "Kelloggs", 1, 6, 36.523683],
  ["Just Right Fruit & Nut", "Kelloggs", 2, 9, 36.471512],
  ["Mueslix Crispy Blend", "Kelloggs", 3, 13, 30.313351],
  ["Nutri-grain Wheat", "Kelloggs", 3, 2, 59.642837],
  ["Raisin Bran", "Kelloggs", 5, 12, 39.259197],
  ["Smacks", "Kelloggs", 1, 15, 31.230054],
  ["Special K", "Kelloggs", 1, 3, 53.131324],
  ["100% Bran", "Nabisco", 10, 6, 68.402973],
  ["Shredded Wheat", "Nabisco", 3, 0, 68.235885],
  ["Shredded Wheat 'n'Bran", "Nabisco", 4, 0, 74.472949],
  ["Strawberry Fruit Wheats", "Nabisco", 3, 5, 59.363993],
  ["Bran Flakes", "Post", 5, 5, 53.313813],
  ["Fruit & Fibre Dates Walnuts and Oats", "Post", 5, 10, 40.917047],
  ["Golden Crisp", "Post", 0, 15, 35.252444],
  ["Grape-Nuts", "Post", 3, 3, 53.371007],
  ["Great Grains Pecan", "Post", 3, 4, 45.811716],
  ["Honey-comb", "Post", 0, 11, 28.742414],
  ["Post Nat. Raisin Bran", "Post", 6, 14, 37.840594],
  ["100% Natural Bran", "Quaker Oats", 2, 8, 33.983679],
  ["Puffed Rice", "Quaker Oats", 0, 0, 60.756112],
  ["Puffed Wheat", "Quaker Oats", 1, 0, 63.005645],
  ["Quaker Oat Squares", "Quaker Oats", 2, 6, 49.511874],
  ["Bran Chex", "Ralston", 4, 6, 49.120253],
  ["Double Chex", "Ralston", 1, 5, 44.330856],
  ["Muesli Raisins  Dates & Almonds", "Ralston", 3, 11, 37.136863],
  ["Rice Chex", "Ralston", 0, 2, 41.998933]
];

function setup() {
  createCanvas(canvasWidth, canvasHeight); // draws canvas
  background(240); // sets background to light grey
}

function draw() {
  background(255); // sets background to white
  graph(); // draws graph
  legend(); // draws legend
  points(); // plots points
  hoverDetails(); // shows details of each point on hover
}

// creates graph components: title, y-axis, and x-axis
function graph() {
  title(); // draws title
  yAxis(); // draws y-axis components
  xAxis(); // draws x-axis components
}

// draws title of visualization
function title() {
  noStroke(); // removes stroke
  textAlign(CENTER); // text is centered
  textSize(24); // font size: 24
  fill(0); // sets fill to black
  text("Cereals: Sugar to Fiber", width / 2, offset - 30); // text above and centered above visualziation
}

// draws yAxis + scale + label, for SUGAR (g)
function yAxis() {
  stroke(0); // sets stroke to black
  fill(0); // sets fill to black
  line(offset, offset, offset, baseline); // y-axis line
  textSize(12); // font size: 12
  for (i = 0; i < yIncrement; i++) {
    stroke(0); // stroke set to black for scale markers
    line(offset - 5, baseline - yScaleConstant * i, offset, baseline - yScaleConstant * i); // draws scale marker
    noStroke(); // stroke removed
    text(i, offset - 25, 4 + baseline - yScaleConstant * i); // labels for scale numbers
  }
  textAlign(LEFT); // y-axis label text is left-aligned
  text("Sugar (g)", 10, height / 2); // label for y-axis
}

// draws xAxis + scale + label, for FIBER (g)
function xAxis() {
  stroke(0); // stroke set to black
  fill(0); // fill set to black
  line(offset, baseline, offset + xAxisLength, offset + yAxisLength); // x-axis line
  for (i = 0; i < xIncrement; i++) {
    stroke(0); // stroke set to black for scale markers
    line(offset + xScaleConstant * i, baseline, offset + xScaleConstant * i, baseline + 5); // draws scale marker
    noStroke(); // stroke removed
    textAlign(CENTER); // text center-aligned
    text(i, offset + xScaleConstant * i, baseline + 25); // labels for scale numbers
  }
  textAlign(CENTER); // x-axis label text is centered
  textSize(12); // font size: 12
  text("Fiber (g)", offset + (xAxisLength / 2), baseline + 50); // label for x-axis
}

// draws legend for color coding
function legend() {
  var xPosLegend = 0.8 * width; // x-position for legend's box
  var yPosLegend = height / 2; // y-position for legend/s box
  fill(240); // fill of legend set to light grey 
  rect(xPosLegend, yPosLegend, 205, 150); // legend's box
  fill(0); // fill set to black
  textAlign(LEFT); // text left-aligned
  textSize(16); // font size set to 16
  text("Legend", xPosLegend + 10, yPosLegend + 25); // Legend title text + position
  textSize(10); // text size set to 10
  text("Based on scores by Consumer Reports", xPosLegend + 10, yPosLegend + 40); // Legend subtitle text + position
  textSize(12); // text size set to 12
  fill(0, 255, 0); // fill set to green
  rect(xPosLegend + 10, yPosLegend + 50, 20, 20); // green key
  fill(0); // fill set to black
  text("Score above 75", xPosLegend + 40, yPosLegend + 65); // green key text + position
  fill(252, 166, 45); // fill set to orange
  rect(xPosLegend + 10, yPosLegend + 80, 20, 20); // orange key
  fill(0); // fill set to black
  text("Score between 50 and 75", xPosLegend + 40, yPosLegend + 95); // orange key text + position
  fill(255, 0, 0); // fill set to red
  rect(xPosLegend + 10, yPosLegend + 110, 20, 20); // red key
  fill(0); // fill set to black
  text("Score between 50 and below", xPosLegend + 40, yPosLegend + 125); // red key text + position
}

// calls  datapoints function for length of array
function points() {
  for (i = 0; i < cereals.length; i++) {
    datapoints(i); // draws datapoints
  }
}

// plots fiber x sugar datapoint for cereals
// fiber @ index 2 (0 based); sugar @ index 3 (0 based); score @ index 4 (0 based)
function datapoints(x) {
  noStroke(); // no stroke
  fill(0); // fill for data points set to black
  if (cereals[x][4] >= 0 && cereals[x][4] <= 50) { // for scores of 50 and below
    fill(255, 0, 0); // set fill to red
  } else if (cereals[x][4] > 50 && cereals[x][4] <= 75) { // for scores between 50 and equal to 75
    fill(252, 166, 45); // set fill to orange
  } else if (cereals[x][4] > 75 && cereals[x][4] <= 100) { // for scores greater than 75
    fill(0, 255, 0); // set fill to green
  }
  ellipse((offset + xScaleConstant * cereals[x][2]), (baseline - yScaleConstant * cereals[x][3]), 10, 10); // each datapoint plotted as ellipse
}

// shows hover information when a user hovers over a point
function hoverDetails() {
  for (i = 0; i < cereals.length; i++) {
    if (dist((offset + xScaleConstant * cereals[i][2]), (baseline - yScaleConstant * cereals[i][3]), mouseX, mouseY) <= 5) {
      fill(240); // set fill to light grey
      rect(mouseX + 5, mouseY + 5, 300, 70); // draws rectangle
      fill(0); // sets fill to black
      noStroke(); // no stroke
      // new stuff
      stroke(230);
      line((offset + xScaleConstant * cereals[i][2]), (baseline - yScaleConstant * cereals[i][3]), (offset + xScaleConstant * cereals[i][2]), baseline); // to y-axis
      line((offset + xScaleConstant * cereals[i][2]), (baseline - yScaleConstant * cereals[i][3]), offset, (baseline - yScaleConstant * cereals[i][3])); // to y-axis
      noStroke();
      //end of new stuff
      textAlign(LEFT); // left-aligns text
      textSize(16); // sets font size to 16
      text(cereals[i][0], mouseX + 15, mouseY + 30); // cereal name
      textSize(12); // sets font size to 12
      text(cereals[i][1], mouseX + 15, mouseY + 50); // manufacturer name
      text("Consumer Reports score: " + cereals[i][4] + " (out of 100)", mouseX + 15, mouseY + 65); // consumer reports score
    }
  }
}