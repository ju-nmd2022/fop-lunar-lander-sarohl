let x = 200;
let y = 200;

function startScreen() {
  background(0, 0, 200);
  text("Start", x, y);
}

function gameScreen() {
  noStroke();
  background(0, 0, 0);
}

function resultScreen() {
  background(155, 129, 103);
  text("Result", x, y);
}

let state = "start";

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "result") {
    resultScreen();
  }
  // startScreen();
  // gameScreen();
}
