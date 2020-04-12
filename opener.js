// opener.js

let columns = [];
var num;
let texty;
let speed;
let gravity;
let stopbounce;
let liney;
let fade;


function setup() {
    num = 100;
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('display', 'block');
    for (let i = 0; i < width/num; i++) {
        columns[i] = new Reveal();
        columns[i].x = i * num;
    }
    x = 0;
    texty = height/2;
    speed = 1;
    gravity = 0.6;
    stopbounce = 0;
    liney = height + 5;
    fade = 0;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {

    background(225);
    textSize(80);
    textFont("komu-b");
    textAlign(CENTER);
    fill(33, 37, 41)
    text('SETH KNIGHTS', width/2, texty - 10);
    for (let i = 0; i < columns.length; i++) {
        columns[i].display();
        if (x < columns.length) {
            if (columns[x].h <= width/3 * 2) {
                x += 1;
            }
        }
        if (x == i) {
            columns[i].transform();
        }
        columns[i].reveal();
    }

    if (x >= columns.length) {
        texty += speed;
        speed += gravity;

        if (stopbounce > 2) {
            if (speed > 10) {
                speed = 0;
                gravity = 0;
            }

            stroke(3);
            line(width/2 - 150, liney, width/2 + 150, liney);
            if (liney > texty + 80) {
                liney -= 5;
            } else {
                textSize(30);
                textFont('komu-b')
                fill(33, 37, 41, fade);
                noStroke();
                text('HTML  +  CSS  +  PYTHON', width/2, liney + 30);
                fade += 5;
            }


        }

            if (texty > height) {
                if (stopbounce <= 2) {
                    speed = -0.85 * speed;
                    stopbounce += 1;
                }

            }
        }

}

class Reveal {
    constructor() {
        this.y = 0;
        this.h = height;
        this.w = num;
    }

    display() {
        fill(250,150,0);
        noStroke();
        rect(this.x, this.y, this.w, this.h);

    }

    transform() {
        this.moving = true;
    }

    reveal() {
        if (this.moving == true) {
            this.h -= 3 * (this.h/90);
        }
    }

}