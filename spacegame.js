let starx = [];
let starY = [];
let starAlpha = [];
let speed = 0.0001;
let x = 200;
let y = 200;
let s = 0.35;
let xSpaceship = 250;
let ySpaceship = 20;
let velocity = 0.000000001;
let acceleration = 0.00002;
let isGameActive = true;

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

// landing
// fill(125, 150, 190);
// noStroke();
// ellipse(500, 240, 105, 90);

// // alien
// function alien(x, y, s) {
//   fill(149, 224, 189);
//   noStroke();
//   // head
//   ellipse(x + 170, y + 150, 20);
//   //body
//   ellipse(x + 170, y + 130, 27, 28);
//   //eyes
//   fill(255, 255, 255);
//   ellipse(x + 170, y + 98, 14, 10);
//   fill(0, 0, 0);
//   ellipse(x + 170, y + 102, 7.5);
//   //arms
//   fill(149, 224, 189);
//   rect(x+ 123, y+ 86, 46, 2);
//   //stick
//   rect(x + 101, y+78, 2, 12);
//   ellipse(x + 170, 80, 10, 10);
//   fill(0, 0, 0);
//   ellipse(x + 170, 80, 8);
// }

function gameScreen() {
  spaceship(xSpaceship, ySpaceship + 130, s);
  if (isGameActive) {
    ySpaceship = ySpaceship + velocity;
    velocity = velocity + acceleration;
    ySpaceship = ySpaceship + speed;
  }
  if (keyIsDown(38)) {
    isGameActive = true;
  }
  if (keyIsDown(38)) {
    velocity = velocity - 0.0001;
  } else if (keyIsDown(39)) {
    speed = 0.00002;
  } else if (keyIsDown(37)) {
    speed = -0.000002;
  } else {
    speed = 0.00001;
  }
}

console.log(isGameActive);

function draw() {
  noStroke();
  background(0, 0, 0);

  for (let index in starx) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starx[index], starY[index], 3);
    starAlpha[index] = starAlpha[index] + 0.02;

    // alien(x, y, s);
    gameScreen();
  }
}
