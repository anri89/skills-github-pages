let heartWidth;

function setup() {
  createCanvas(720, 400);
  noStroke();
  background(230);
  heartWidth = width / 4;
}

function draw() {
  // draw() will remain in this loop as you wait for keys

}

function keyPressed() {
  let keyIndex = -1;
  if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }
  if (keyIndex === -1) {
    // Clear the screen if there isn't a letter key there
    background(230);
  } else {
    // This is a heart-shaped letter key
    let randFill_r = Math.floor(Math.random() * 255 + 1);
    let randFill_g = Math.floor(Math.random() * 255 + 1);
    let randFill_b = Math.floor(Math.random() * 255 + 1);
    fill(randFill_r, randFill_g, randFill_b);
    let x = map(keyIndex, 0, 25, 0, width - heartWidth);
    drawHeart(x + heartWidth / 2, height / 2, heartWidth);
  }
}

// Perform this function to draw a heart
function drawHeart(x, y, size) {
  beginShape();
  vertex(x, y + size / 4);
  
  bezierVertex(x - size / 2, y - size / 4, x - size / 2, y - size / 2, x, y - size / 4);
  
  bezierVertex(x + size / 2, y - size / 2, x + size / 2, y - size / 4, x, y + size / 4);
  
  
  endShape(CLOSE);
  

}
