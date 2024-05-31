let shapes = [];
let gravity;

function setup() {
  createCanvas(800, 600);
  gravity = createVector(0, 0.2); // Things falling due to gravity


  for (let i = 0; i < 10; i++) {
    if (random(1) < 0.5) {
      shapes.push(new CircleShape(random(width), random(-200, 0), random(20, 40))); //created some random shapes
    } else {
      shapes.push(new RectShape(random(width), random(-200, 0), random(20, 40), random(20, 40)));
    }
  }
}

function draw() {
  background(255); 
  //Update and show every shape.
  for (let shape of shapes) {
    shape.applyForce(gravity);
    shape.update();
    shape.display();
  }
}

// Add a new shape where we click, desided to keep the idea from ""Cube"
function mousePressed() {
  if (random(1) < 0.5) {
    shapes.push(new CircleShape(mouseX, mouseY, random(20, 40)));
  } else {
    shapes.push(new RectShape(mouseX, mouseY, random(20, 40), random(20, 40)));
  }
}


class CircleShape { //new class 
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = r;
    this.restitution = 0.7; // Bouncy factor
  }

  // Apply a force to the circle
  applyForce(force) {
    this.acc.add(force);
  }

  //Relocate and take a bounce off the bottom.
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    if (this.pos.y + this.r > height) {
      this.pos.y = height - this.r;
      this.vel.y *= -this.restitution; // Bounce back up
    }
  }


  display() {
    fill(100, 150, 250);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}

// New class, rectangle shape class
class RectShape {
  constructor(x, y, w, h) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.w = w;
    this.h = h;
    this.restitution = 0.7; // Bouncy factor
  }

  // force to shape 
  applyForce(force) {
    this.acc.add(force);
  }

  
  
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0)
    
    if (this.pos.y + this.h / 2 > height) {
      this.pos.y = height - this.h / 2;
      this.vel.y *= -this.restitution; // Bounce back up
    }
  }

  display() {
    fill(250, 150, 100);
    noStroke();
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.w, this.h);
  }
}
