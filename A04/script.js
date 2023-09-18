let particles = [];
let scattering = false;

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }

    canvas = document.querySelector('canvas');
    canvas.addEventListener("click", function() {
        scattering = true;
        setTimeout(() => {
            scattering = false;
        }, 3000); 
    });
}

function draw() {
    background(0);
    for (let particle of particles) {
        if (scattering) {
            particle.scatter();
        } else {
            let angle = atan2(mouseY - particle.y, mouseX - particle.x);
            particle.move(angle);
        }
        particle.display();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

class Particle {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.speed = random(1, 3);
        this.angle = random(TWO_PI);
        this.colors = this.generateCustomColors(); 
        this.history = [];
        this.trailLength = 20; 
    }

    generateCustomColors() {
        const purple = color(128, 0, 128, 0.7); 
        const purple2 = color(140, 20, 252, .7); 
        return [purple, purple2];
    }

    move(angle) {
        this.history.push(createVector(this.x, this.y));
        if (this.history.length > this.trailLength) {
            this.history.splice(0, 1); 
        }

        this.x += cos(angle) * this.speed;
        this.y += sin(angle) * this.speed;
        this.wrap();
    }

    scatter() {
        this.history.push(createVector(this.x, this.y));
        if (this.history.length > this.trailLength) {
            this.history.splice(0, 1);
        }

        this.x += cos(this.angle) * this.speed * 5;
        this.y += sin(this.angle) * this.speed * 5;
        this.wrap();
    }

    wrap() {
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
    }

    display() {
        noStroke();
        for (let i = 0; i < this.history.length; i++) {
            const pos = this.history[i];
            const colorIndex = i % this.colors.length;
            const blurFactor = map(i, 0, this.history.length, 0, 1);
            const fillColor = color(red(this.colors[colorIndex]), green(this.colors[colorIndex]), blue(this.colors[colorIndex]), 100 * blurFactor);
            fill(fillColor);
            ellipse(pos.x, pos.y, 20, 20);
        }
    
        fill(red(this.colors[0]), green(this.colors[0]), blue(this.colors[0]));
        ellipse(this.x, this.y, 20, 20);
    }
    
}


const funText = document.getElementById("funText");
const letters = funText.textContent.split(""); 
funText.textContent = ""; 

letters.forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.setProperty("--index", index);
    funText.appendChild(span);
});