function setup() {
  createCanvas(710, 400, WEBGL);
  noStroke();
}

function draw() {
  background(0);
  
  // it was a new technique and work with ambient light
  ambientLight(0, 255/4, 0);
  
  // light from the left (blue)
  
  directionalLight(0, 0, 255, -1, 0, 0);

  // colour red " red light" is following the mouse
  let lightX = mouseX - width / 2;
  let lightY = mouseY - height / 2;
  spotLight(255, 0, 0, lightX, lightY, 500, 0, 0, -1);

// the circle
  rotateX(-PI/30);
  rotateY(PI/20);


  push();
  translate(0, 0, 0); // Move to the center
  fill(255, 0, 0); // Red
  ellipse(0, 0, 100, 100); // Draw circle
  pop();
}
