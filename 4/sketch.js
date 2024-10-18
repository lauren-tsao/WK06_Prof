let data = [];

function preload() {
  data = loadJSON("wine.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  stroke(220, 20, 20);
  strokeWeight(2);

  data = Object.values(data);

  for (let idx = 0; idx < data.length; idx++) {
    let aWine = data[idx];
    let x = map(idx, 0, data.length - 1, 0, width);
    let d = map(aWine.price, 0, 300, 0, height);
    ellipse(x, height / 2, d);
  }
}

function draw() {}
