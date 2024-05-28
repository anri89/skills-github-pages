let saturn;
let moons = [];

function setup() {
  
  createCanvas(800, 600);
  // create a circle "Saturn"
  saturn = new Planet(width / 2, height / 2, 200, color(255, 204, 153));
  // thats create little circles or moons, that r orbiting around Saturn
  for (let i = 0; i < 8; i++) {
    let radius = 150 + 50 * i;
    let diameter = 10 + 5 * i;
    
    let moonColor = color(random(100, 255), random(100, 255), random(100, 255));
    
    let moon = new Satellite(saturn, radius, diameter, moonColor);
    moons.push(moon);
  }
}

function draw() {
  background(0);
  saturn.display();
  for (let moon of moons) {
    moon.display();
  }
}

// created a class "Plane"for Saturn
class Planet {
  constructor(x, y, diameter, color) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.color = color;
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}


class Satellite {
  constructor(parent, orbitRadius, diameter, color) {
    this.parent = parent;
    this.orbitRadius = orbitRadius;
    this.diameter = diameter;
    this.color = color;
    this.angle = random(TWO_PI);
    this.speed = random(0.01, 0.03);
    // then i created a class for moons, which i called "Satellite"
  }

  display() {
    this.angle += this.speed;
    let x = this.parent.x + this.orbitRadius * cos(this.angle);
    let y = this.parent.y + this.orbitRadius * sin(this.angle);
    // again its just saying the speed, so how fast should they move
    fill(this.color);
    noStroke();
    ellipse(x, y, this.diameter, this.diameter);
  }
}
