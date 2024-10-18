let data = [];

function preload() {
  data = loadTable("wine.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  stroke(220, 20, 20);
  strokeWeight(2);

  for (let idx = 0; idx < data.getRowCount(); idx++) {
    let winePrice = data.getNum(idx, "price");
    let x = map(idx, 0, data.getRowCount() - 1, 0, width);
    let d = map(winePrice, 0, 300, 0, height);
    ellipse(x, height / 2, d);
  }
}

function draw() {}
