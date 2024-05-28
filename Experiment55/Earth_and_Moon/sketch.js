let earth;
let moon;
let angle = 0;

function setup() {
  createCanvas(800, 600);
  // Create Earth and Moon objects
  earth = new Planet(width / 2, height / 2, 100, color(0, 0, 255), [color(0, 255, 0)]);
  moon = new Satellite(earth, 200, 20, color(150));
}

function draw() {
  background(0);
  // display Earth and Moon
  earth.display();
  moon.display();
}

// planet class for Earth
class Planet {
  constructor(x, y, diameter, color, spotColors) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.color = color;
    this.spotColors = spotColors;
    this.spots = [];
    this.createSpots();
  }

  createSpots() {
    let numSpots = int(random(5, 15));
    for (let i = 0; i < numSpots; i++) {
      let angle = random(TWO_PI);
      let r = this.diameter / 2 * random(0.2, 0.8);
      let spotX = this.x + r * cos(angle);
      let spotY = this.y + r * sin(angle);
      this.spots.push({ x: spotX, y: spotY, diameter: random(10, 30), color: random(this.spotColors) });
    }
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.diameter, this.diameter);
    for (let spot of this.spots) {
      fill(spot.color);
      ellipse(spot.x, spot.y, spot.diameter, spot.diameter);
    }
  }
}

// satellite class for Moon
class Satellite {
  constructor(planet, orbitRadius, diameter, color) {
    this.planet = planet;
    this.orbitRadius = orbitRadius;
    this.diameter = diameter;
    this.color = color;
    this.angle = 0;
  }

  display() {
    this.angle += 0.02;
    let x = this.planet.x + this.orbitRadius * cos(this.angle);
    let y = this.planet.y + this.orbitRadius * sin(this.angle);
    fill(this.color);
    noStroke();
    ellipse(x, y, this.diameter, this.diameter);
  }
}
