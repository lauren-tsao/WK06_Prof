let numCircles;
let ypos = [];
let xpos = [];
let diam = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  noFill();

  numCircles = 1000;

  for (let idx = 0; idx < numCircles; idx += 1) {
    xpos.push(random(width));
    ypos.push(random(height));
    diam.push(random(30, 100));
  }
  print(xpos, ypos);
}

function draw() {
  background(220, 20, 220);

  for (let idx = 0; idx < ypos.length; idx += 1) {
    ellipse(xpos[idx], ypos[idx], diam[idx]);
  }
}

function mousePressed() {
  xpos.push(random(width));
  ypos.push(random(height));
  diam.push(random(30, 100));
  print(ypos.length, diam.length);
}
