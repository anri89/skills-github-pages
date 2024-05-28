let pendulum;
let square;

function setup() {
  
  
  
  createCanvas (windowWidth, windowHeight);
  pendulum = new Pendulum(createVector(width / 2, 0), 200);
  
  
  square = new Square(100, 100, 50); // you can change the size of the scuare
}

function draw() {
  background(255);
  
  pendulum.update();
  
  
  pendulum.display();
  
  
  square.update();
  
  square.display();
}

function mousePressed() {
  pendulum.handleClick(mouseX, mouseY);
  square.handleClick(mouseX, mouseY);
}

function mouseDragged() {
  
  
  pendulum.handleDrag(mouseX, mouseY);
  square.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  pendulum.handleRelease();
  square.handleRelease();
}

class Pendulum {
  constructor(origin, r) {
    
    this.origin = origin;
    this.position = createVector();
    this.r = r;
    this.angle = PI / 4;
    this.aVelocity = 0.0;
    this.aAcceleration = 0.0;
    this.damping = 0.99; // Random damping to mimic the feel of friction
    this.ballr = 48.0; // so thats create the radius of the ball, which is important 
    this.dragging = false;
  }

  
  update() {
    if (!this.dragging) {
      // thats a gravity  force
      let gravity = 0.4; // Arbitrary constant
      this.aAcceleration = (-1 * gravity / this.r) * sin(this.angle);
      this.aVelocity += this.aAcceleration; 
      this.aVelocity *= this.damping; // applyinf damping
      this.angle += this.aVelocity; 
    }
  }

  display() {
    this.position.set(
      this.r * sin(this.angle),
      
      this.r * cos(this.angle),
      0
    );
    this.position.add(this.origin);
    stroke(0);
    strokeWeight(2);
    fill(127);
    // its drawing the arm
    line(this.origin.x, this.origin.y, this.position.x, this.position.y);
    if (this.dragging) {
      fill(50);
    } else {
      fill(127);
      
    }
    // draw the ball
    ellipse(this.position.x, this.position.y, this.ballr, this.ballr);
  }

  handleClick(mx, my) {
    let d = dist(mx, my, this.position.x, this.position.y);
    if (d < this.ballr) {
      this.dragging = true;
    }
  }

  handleDrag(mx, my) {
    if (this.dragging) {
      let diff = p5.Vector.sub(this.origin, createVector(mx, my));
      this.angle = atan2(-1 * diff.y, diff.x) - PI / 2;
    }
  }

  handleRelease() {
    
    this.aVelocity = 0; // so when you let go, thsi part telling the program "no velocity"
    this.dragging = false;
  }
}

class Square {
  
  constructor(x, y, size) {
    this.position = createVector(x, y);
    this.size = size;
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0.2); // THIS IS GRAVITY
    this.dragging = false;
  }

  update() {
    if (!this.dragging) {
      this.velocity.add(this.acceleration); // This part if from second tutorial thats apply gravity
      this.position.add(this.velocity); // as usual its updating position
      
      
      
      // detection of collisions using the canvas's bottom
      if (this.position.y + this.size / 2 > height) {
        this.position.y = height - this.size / 2;
        this.velocity.y *= -0.5; // just add little bounce with damping
      }
    }
  }

  display() {
    fill(150);
    if (this.dragging) {
      fill(100);
    }
    stroke(0);
    strokeWeight(2);
    
    
    rectMode(CENTER);
    rect(this.position.x, this.position.y, this.size, this.size);
  }

  handleClick(mx, my) {
    if (
      mx > this.position.x - this.size / 2 &&
      mx < this.position.x + this.size / 2 &&
      
      my > this.position.y - this.size / 2 &&
      my < this.position.y + this.size / 2
    ) {
      this.dragging = true;
      
      
      this.velocity.set(0, 0); // This part basicaly saying that to a square to stop motion when grabbed 
    }
  }

  handleDrag(mx, my) {
    if (this.dragging) {
      
      
      this.position.set(mx, my);
    }
  }

  handleRelease() {
    this.dragging = false;
  }
}
