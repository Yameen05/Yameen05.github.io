// Interactive Drawing Application
// Creates floating particles that form letters when dragged

let particles = [];
const particleCount = 500;

function setup() {
    const canvas = createCanvas(800, 500);
    canvas.parent('drawing-container');
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    background(240);
    
    // Update and display particles
    particles.forEach(p => {
        p.update();
        p.display();
    });
    
    // Draw instructions
    fill(50);
    textSize(16);
    text("Drag to draw your initials", 20, 30);
}

function mouseDragged() {
    // Attract particles to mouse position
    particles.forEach(p => {
        p.attract(mouseX, mouseY);
    });
}

function keyPressed() {
    if (key === 'c') {
        // Clear canvas
        particles.forEach(p => p.reset());
    } else if (key === 's') {
        // Save drawing
        saveCanvas('my-initials', 'png');
    }
}

// Particle class
class Particle {
    constructor() {
        this.reset();
        this.size = random(5, 15);
        this.color = color(random(100, 200), random(100, 200), random(100, 200));
    }
    
    reset() {
        this.x = random(width);
        this.y = random(height);
        this.targetX = this.x;
        this.targetY = this.y;
        this.speed = random(0.02, 0.1);
    }
    
    attract(tx, ty) {
        // Calculate distance to mouse
        const d = dist(this.x, this.y, tx, ty);
        if (d < 100) {
            this.targetX = tx + random(-20, 20);
            this.targetY = ty + random(-20, 20);
        }
    }
    
    update() {
        // Move toward target
        this.x = lerp(this.x, this.targetX, this.speed);
        this.y = lerp(this.y, this.targetY, this.speed);
        
        // Random movement if no target
        if (random() < 0.01) {
            this.targetX = random(width);
            this.targetY = random(height);
        }
    }
    
    display() {
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.size);
    }
}
