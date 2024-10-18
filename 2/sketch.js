let aList = [];

let aCircle = {};

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  aList = [0, 3, 4, 6];

  aCircle = {
    x: width / 2,
    y: height / 2,
    d: 60,
    a: 255,
  };
}

function draw() {
  background(220, 20, 220);

  fill(255, aCircle["a"]); // same as aCircle.a
  ellipse(aCircle.x, aCircle.y, aCircle.d);

  // wrap around after 255
  aCircle.a = (aCircle.a + 4) % 255;
}
