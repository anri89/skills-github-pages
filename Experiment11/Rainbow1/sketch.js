let system;

function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(mouseX, mouseY));
}

function draw() {
  background(255); 
  system.origin = createVector(mouseX, mouseY); 
  system.addParticle();
  system.run();
}

let Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 255;
  this.angle = 0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// okay so thats how to update position
Particle.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
  this.angle += 0.1;
};

// this bassicaly is a method to display
Particle.prototype.display = function() {
  // Map lifespan to a hue value for rainbow colors
  let hue = map(this.lifespan, 0, 255, 0, 360);
  colorMode(HSB);
  stroke(hue, 255, 255, this.lifespan);
  strokeWeight(2);
  fill(hue, 255, 255, this.lifespan);

  let t = map(sin(this.angle), -1, 1, 0, 1); 

  push();
  translate(this.position.x, this.position.y);
  drawMorphingShape(0, 0, 12, 6, t, 5);
  pop();

  colorMode(RGB); // a special mode 
};

// this is line is like asking the code like "is there any purpose for the particle this moment?"
Particle.prototype.isDead = function() {
  return this.lifespan < 0;
};

let ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (let i = this.particles.length - 1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

// this is a function bassicaly to draw a morphing shape between a circle and a star
function drawMorphingShape(x, y, radius1, radius2, t, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx, sy;

    if (t < 0.5) {
      let blendedRadius = lerp(radius1, radius2, t * 2); // radius for circle
      sx = x + cos(a) * blendedRadius;
      sy = y + sin(a) * blendedRadius;
    } else {
      let starRadius = lerp(radius2, radius1, (t - 0.5) * 2); // thats  radius for star
      sx = x + cos(a) * starRadius;
      sy = y + sin(a) * starRadius;
      vertex(sx, sy);
      
      sx = x + cos(a + halfAngle) * (starRadius / 2);
      sy = y + sin(a + halfAngle) * (starRadius / 2);
    }
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
