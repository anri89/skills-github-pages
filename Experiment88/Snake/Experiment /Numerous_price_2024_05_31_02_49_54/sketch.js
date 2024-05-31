let ball;
let draggableRect;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball(50, 50, 30); // Form a ball with the starting size and position.

  draggableRect = new DraggableRect(200, 200, 100, 50); // Initiate a movable rectangle

}

function draw() {
  
  background(255);
  
  ball.update();
  
  ball.display();
  
  draggableRect.display();
}

function mousePressed() {
  draggableRect.handleClick(mouseX, mouseY);
}

function mouseDragged() {
  draggableRect.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  draggableRect.handleRelease();
}

class Ball {
  constructor(x, y, size) {
    this.position = createVector(x, y);
    this.size = size;
    this.velocity = createVector(2, 3); // starting speed

    this.acceleration = createVector(0, 0.4); // gravity
  }

  update() {
    this.velocity.add(this.acceleration); // Applying gravity
    this.position.add(this.velocity); // and upgating position
    
    // This explains the ball's behaviour when it bounces off walls.

    if (this.position.x > width - this.size / 2 || this.position.x < this.size / 2) {
      this.velocity.x *= -1;
    }
    
    if (this.position.y > height - this.size / 2 || this.position.y < this.size / 2) {
      this.velocity.y *= -1;
    }
  }

  display() {
    fill(150);
    stroke(0);
    
    strokeWeight(2);
    ellipse(this.position.x, this.position.y, this.size);
  }
}

class DraggableRect {
  constructor(x, y, w, h) {
    
    this.position = createVector(x, y);
    
    this.width = w;
    
    this.height = h;
    
    this.dragging = false;
  }

  display() {
    
    
    fill(this.dragging ? 100 : 150);
    
    stroke(0);
    
    strokeWeight(2);
    
    rectMode(CENTER);
    
    rect(this.position.x, this.position.y, this.width, this.height);
  }

  handleClick(mx, my) {
    if (
      mx > this.position.x - this.width / 2 &&
      mx < this.position.x + this.width / 2 &&
      my > this.position.y - this.height / 2 &&
      my < this.position.y + this.height / 2
    ) {
      this.dragging = true;
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
