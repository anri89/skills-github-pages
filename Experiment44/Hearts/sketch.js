let bugs = [];

function setup() {
  
  createCanvas(710, 400);
  for (let i = 0; i < 50; i++) {
    
    bugs.push(new Heart());
  }
}

function draw() {
  background(0, 0 , 0);
  
  
  
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
    
  }
}

// heart class
class Heart {
  constructor() {
    
    this.x = random(width);
    this.y = random(height);
    this.size = random(10, 30);
    this.speed = 1;
    this.color = color(random(255), random(20, 100), random(100, 200)); // colours!!
  }

  move() {
    this.x += random(-this.speed, this.speed);
    
    this.y += random(-this.speed, this.speed);
    //this basicaly telling the hearts how they should move and what speed
  }

  display() {
    fill(this.color);
    noStroke();
    this.drawHeart(this.x, this.y, this.size);
  }

  drawHeart(x, y, size) {
    beginShape();
    vertex(x, y);
    bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    //this was a hard part to create acctual heart shape, for this i use google and just random website
    endShape(CLOSE);
  }
}
