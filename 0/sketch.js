let numCircles;
let ypos = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  numCircles = int(width / 75);

  for (let idx = 0; idx < numCircles; idx += 1) {
    ypos.push(0);
  }
  print(ypos);
}

function draw() {
  background(220, 20, 220);

  for (let idx = 0; idx < ypos.length; idx += 1) {
    let xpos = map(idx, 0, ypos.length - 1, 30, width - 30);
    ellipse(xpos, ypos[idx], 50);

    ypos[idx] += 4;
    if (ypos[idx] > height + 50) {
      ypos[idx] = random(-150, 0);
    }
  }
}

function mousePressed() {
  ypos.push(random(-100, -50));
  print(ypos.length);
}
