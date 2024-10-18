let NUM_OBJS = 400;
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let cnt = 0; cnt < NUM_OBJS; cnt++) {
    let aCircle = {
      x: width / 2,
      y: height / 2,
      diam: random(30, 50),
      dx: random(-5, 5),
      dy: random(-5, 5),
    };
    circles.push(aCircle);
  }
  print(circles);
}

function draw() {
  background(20);

  for (let idx = 0; idx < circles.length; idx++) {
    let mCircle = circles[idx];
    let mDist = dist(mCircle.x, mCircle.y, width / 2, height / 2);
    let mAlpha = map(mDist, 0, width / 2, 160, 60);

    fill(255, mAlpha);
    ellipse(mCircle.x, mCircle.y, mCircle.diam);

    mCircle.x += mCircle.dx;
    mCircle.y += mCircle.dy;

    let goneX = mCircle.x < 0 || mCircle.x > width;
    let goneY = mCircle.y < 0 || mCircle.y > height;
    if (goneX || goneY) {
      mCircle.x = width / 2;
      mCircle.y = height / 2;
    }
  }
}
