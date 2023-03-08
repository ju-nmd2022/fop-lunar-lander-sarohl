let starx = [];
let starY = [];
let starAlpha = [];
let speed = 0;
let x = 200;
let y = 200;
let s = 0.45;
let sAlien = 1.4;
let xAlien = 110;
let yAlien = 290;
let xSpaceship = 250;
let ySpaceship = 50;
let velocity = 1;
let acceleration = 0.2;
let isGameActive = false;

// star blinking
for (let i = 0; i < 250; i++) {
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
function alien() {
  fill(149, 224, 189);
  noStroke(0, 0, 0);
  //arms
  fill(149, 224, 189);
  rect(xAlien + 148 * sAlien, yAlien + 124 * sAlien, 42 * sAlien, 2 * sAlien);
  //body
  ellipse(
    xAlien + 170 * sAlien,
    yAlien + 130 * sAlien,
    27 * sAlien,
    28 * sAlien
  );
  // head
  noStroke();
  ellipse(xAlien + 170 * sAlien, yAlien + 110 * sAlien, 20 * sAlien);
  //eyes
  push();
  fill(255, 255, 255);
  stroke(0, 0, 0);
  ellipse(
    xAlien + 170 * sAlien,
    yAlien + 108 * sAlien,
    14 * sAlien,
    10 * sAlien
  );
  pop();
  fill(0, 0, 0);
  ellipse(xAlien + 170 * sAlien, yAlien + 108 * sAlien, 7.5 * sAlien);

  // mouth
  fill(0, 0, 0);
  ellipse(349, 453, 7, 6);

  //stick
  fill(149, 224, 189);
  rect(xAlien + 169 * sAlien, yAlien + 89 * sAlien, 2 * sAlien, 12 * sAlien);
  ellipse(
    xAlien + 170 * sAlien,
    yAlien + 89 * sAlien,
    10 * sAlien,
    10 * sAlien
  );
  fill(0, 0, 0);
  ellipse(xAlien + 170 * sAlien, yAlien + 89 * sAlien, 7 * sAlien);
}

function gameScreen() {
  noStroke();
  background(0, 0, 0);

  for (let index in starx) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starx[index], starY[index], 2);
    starAlpha[index] = starAlpha[index] + 0.04;
  }
  landing();
  alien();
  spaceship(xSpaceship, ySpaceship + 130, s);

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

  if (keyIsDown(38)) {
    isGameActive = true;
  }
  if (
    (ySpaceship > 355 && xSpaceship < 180) ||
    (ySpaceship > 355 && xSpaceship > 430)
  ) {
    isGameActive = false;
    state = "lose";
  } else if (ySpaceship > 355) {
    state = "win";
  }

  if (velocity > 5 && ySpaceship > 310) {
    isGameActive = false;
    state = "lose";
  }
}

function startScreen() {
  background(107, 133, 135);
  textSize(35);
  text("Oh no, the alien is stuck in space!", x - 155, y + 50);
  textSize(25);
  text("Press space to save him", x - 34, y + 102);
  if (keyIsDown(32)) {
    xSpaceship = 100;
    ySpaceship = 30;
    velocity = 1;
    state = "game";
  }
}

function loseScreen() {
  background(107, 133, 135);
  textSize(40);
  text("To bad you lost", x - 30, y + 50);
  textSize(25);
  text("Press enter to start again", x - 34, y + 102);

  if (keyIsDown(13)) {
    state = "start";
  }
}

function winScreen() {
  background(149, 224, 189);
  noStroke();
  textSize(40);
  text("Wow you saved the alien!", x - 120, y + 50);
  textSize(25);
  text("Play again? Press enter.", x - 32, y + 102);
  if (keyIsDown(13)) {
    state = "start";
  }
}

let state = "start";

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "lose") {
    loseScreen();
  } else if (state === "win") {
    winScreen();
  }
}
