let x = [], y = [], segNum = 20, segLength = 18, baseSize = 10;

// Thus, this just initialises arrays with their initial values.
for (let i = 0; i < segNum; i++) {
  
  x[i] = 0; y[i] = 0;
  
  
}

function setup() {
  
  createCanvas(710, 400); // canvas size
  
  noStroke(); // it is for shapes without an outline.
  
}




function draw() {
  background(0); //
  dragSegment(0, mouseX, mouseY); // mouse follows the first segment.
  
  
  for (let i = 0; i < x.length - 1; i++) { // That is a looping part from a tutorial.
    dragSegment(i + 1, x[i], y[i]); // keeping up with this to ensure that every section comes after the previous one.
  }
}

function dragSegment(i, xin, yin) {
  const dx = xin - x[i], dy = yin - y[i]; // calculate deltas
  const angle = atan2(dy, dx); // calculate angle
  x[i] = xin - cos(angle) * segLength; 
  y[i] = yin - sin(angle) * segLength; 
  
  segment(x[i], y[i], i); // this section of the draw
}

function segment(x, y, index) {
  const size = baseSize + sin(frameCount * 0.1 + index * 0.5) * 5; // Size oscillation
  
  fill(255 - index * 12, 100 + index * 5, 150); 
  ellipse(x, y, size, size); 
}

