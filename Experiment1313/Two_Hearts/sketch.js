let heart1X, heart1Y; // Where the first heart button is located
let heart2X, heart2Y; // Where the second heart button is located
let heartSize = 100; // size of the hearts

let heart1Color;
let heart2Color;
let baseColor;

let heart1Over = false;
let heart2Over = false;

function setup() {
  createCanvas(710, 400);
  heart1Color = color(0, 0, 260); // Blue 
  heart2Color = color(270, 110, 180); // Pink 
  baseColor = color(102);
  heart2X = width / 2 + heartSize / 2 + 40;
  heart2Y = height / 2;
  heart1X = width / 2 - heartSize - 40;
  heart1Y = height / 2 - heartSize / 2;
}

function draw() {
  update(mouseX, mouseY);

  noStroke();
  if (heart1Over) {
    background(heart1Color);
  } else if (heart2Over) {
    background(heart2Color);
  } else {
    background(baseColor);
  }

  stroke(255);
  fill(heart1Color);
  drawHeart(heart1X + heartSize / 2, heart1Y + heartSize / 2, heartSize);
  stroke(0);
  fill(heart2Color);
  drawHeart(heart2X, heart2Y, heartSize);
}

function update(x, y) {
  if (overHeart(heart2X, heart2Y, heartSize)) {
    heart2Over = true;
    heart1Over = false;
  } else if (overHeart(heart1X + heartSize / 2, heart1Y + heartSize / 2, heartSize)) {
    heart1Over = true;
    heart2Over = false;
  } else {
    heart2Over = heart1Over = false;
  }
}

function overHeart(x, y, size) {
  const disX = x - mouseX;
  const disY = y - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < size / 2) {
    return true;
  } else {
    return false;
  }
}

function drawHeart(x, y, size) {
  beginShape();
  vertex(x, y + size / 4);
  bezierVertex(x - size / 1, y - size / 8, x - size / 5, y - size / 2, x, y - size / 5);
  bezierVertex(x + size /4, y - size / 2, x + size / 1, y - size / 6, x, y + size / 4);
  endShape(CLOSE);
}
