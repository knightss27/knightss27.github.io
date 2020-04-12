// opener.js

let columns = [];
var num;

function setup() {
    num = 100;
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('display', 'block');
    for (let i = 0; i < width/num; i++) {
        columns[i] = new Reveal();
        columns[i].x = i * num;
    }
    x = 0;
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
    text('SETH KNIGHTS', width/2, height/2);
    for (let i = 0; i < columns.length; i++) {
        columns[i].display();
        if (x < columns.length) {
            if (columns[x].h <= 750) {
                x += 1;
            }
        }
        if (x == i) {
            columns[i].transform();
        }
        columns[i].reveal();
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