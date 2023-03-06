let starx = [];
let starY = [];
let starAlpha = [];
let speed = 0;
let x = 200;
let y = 200;
let s = 0.45;
let xSpaceship = 250;
let ySpaceship = 50;
let velocity = 1;
let acceleration = 0.2;
let isGameActive = false;

// star blinking
for (let i = 0; i < 200; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starx.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

// spaceship
function spaceship(xSpaceship, ySpaceship, s) {
  // body
  fill(107, 123, 115);
  stroke(0, 0, 0);
  ellipse(xSpaceship - 70 * s, ySpaceship - 82 * s, 78 * s, 174 * s);

  // window 1
  push();
  fill(177, 196, 199);
  stroke(62, 69, 64);
  strokeWeight(4);
  ellipse(xSpaceship - 70 * s, ySpaceship - 74 * s, 33 * s);
  pop();

  push();
  fill(255, 255, 255);
  noStroke();
  ellipse(xSpaceship - 69 * s, ySpaceship - 74 * s, 20 * s);
  pop();

  push();
  fill(177, 196, 199);
  noStroke();
  ellipse(xSpaceship - 71 * s, ySpaceship - 72 * s, 20 * s);
  pop();

  // window 2
  push();
  fill(177, 196, 199);
  stroke(62, 69, 64);
  strokeWeight(4);
  ellipse(xSpaceship - 70 * s, ySpaceship - 117 * s, 33 * s);
  pop();

  push();
  fill(255, 255, 255);
  noStroke();
  ellipse(xSpaceship - 69 * s, ySpaceship - 117 * s, 20 * s);
  pop();

  push();
  fill(177, 196, 199);
  noStroke();
  ellipse(xSpaceship - 71 * s, ySpaceship - 115 * s, 20 * s);
  pop();

  //left leg
  beginShape();
  fill(255, 255, 255);
  vertex(xSpaceship - 94 * s, ySpaceship - 50 * s);
  bezierVertex(
    xSpaceship - 94 * s,
    ySpaceship - 50 * s,
    xSpaceship - 168 * s,
    ySpaceship + 119 * s,
    xSpaceship - 98 * s,
    ySpaceship - 19 * s
  );
  vertex(xSpaceship - 98 * s, ySpaceship - 19 * s);
  endShape();

  // right leg
  beginShape();
  vertex(xSpaceship - 45 * s, ySpaceship - 50 * s);
  bezierVertex(
    xSpaceship - 45 * s,
    ySpaceship - 50 * s,
    xSpaceship + 25 * s,
    ySpaceship + 114 * s,
    xSpaceship - 42 * s,
    ySpaceship - 19 * s
  );
  vertex(xSpaceship - 42 * s, ySpaceship - 19 * s);
  endShape();

  // middle leg
  rect(xSpaceship - 72 * s, ySpaceship - 46 * s, 4 * s, 86 * s, 9 * s);
}

// landing;
function landing() {
  fill(125, 150, 190);
  noStroke();
  ellipse(300, 670, 455, 400);
}

// // alien
// function alien() {
//   fill(149, 224, 189);
//   noStroke();
//   // head
//   ellipse(x + 170 * s, y + 150 * s, 20 * s);
//   //body
//   ellipse(x + 170 * s, y + 130 * s, 27 * s, 28 * s);
//   //eyes
//   fill(255, 255, 255);
//   ellipse(x + 170 * s, y + 98 * s, 14 * s, 10 * s);
//   fill(0, 0, 0);
//   ellipse(x + 170 * s, y + 102 * s, 7.5 * s);
//   //arms
//   fill(149, 224, 189);
//   rect(x + 123 * s, y + 86 * s, 46 * s, 2 * s);
//   //stick
//   rect(x + 101 * s, y + 78 * s, 2 * s, 12 * s);
//   ellipse(x + 170 * s, 80 * s, 10 * s, 10 * s);
//   fill(0, 0, 0);
//   ellipse(x + 170 * s, y + 120 * s, 8 * s);
// }

function gameScreen() {
  noStroke();
  background(0, 0, 0);

  for (let index in starx) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starx[index], starY[index], 3);
    starAlpha[index] = starAlpha[index] + 0.02;
  }
  spaceship(xSpaceship, ySpaceship + 130, s);
  landing();
  // alien();

  if (isGameActive) {
    ySpaceship = ySpaceship + velocity;
    velocity = velocity + acceleration;
    xSpaceship = xSpaceship + speed;
  }
  if (keyIsDown(38)) {
    isGameActive = true;
  }
  if (keyIsDown(38)) {
    velocity = velocity - 0.5;
  } else if (keyIsDown(39)) {
    speed = 5;
  } else if (keyIsDown(37)) {
    speed = -5;
  } else {
    speed = 0;
  }
}

function startScreen() {
  background(107, 133, 135);
  text("Start", x + 50, y + 50);
  textSize(50);
}

function resultScreen() {
  background(107, 133, 135);
  text("Result", x + 50, y + 50);
  textSize(50);
}

let state = "result";

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "result") {
    resultScreen();
  }
}
