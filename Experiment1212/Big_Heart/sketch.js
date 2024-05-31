function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw() {
  background(0);

  let c = map(mouseX, 0, width, 0, 175);

  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  drawHeart(width / 2, height / 2, d);
}

// Function to draw a heart shape
function drawHeart(x, y, size) {
  beginShape();
  vertex(x, y + size / 4);
  bezierVertex(x - size / 1, y - size / 8, x - size / 5, y - size / 2, x, y - size / 4);
  bezierVertex(x + size / 3, y - size / 2, x + size / 1, y - size / 5, x, y + size / 4);
  endShape(CLOSE);
}
