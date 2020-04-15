// opener.js

let columnsv = [];
let columnsh = [];
var num;
let texty;
let speed;
let gravity;
let stopbounce;
let liney;
let fade;
let buttonfade;
let disp;
let hchange;
let fx;
let fy;
let x;
let button;

function preload() {

}

function setup() {
    num = 20;
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('display', 'block');
    canvas.parent('sketch-div');
    for (let i = 0; i < num; i++) {
        columnsv[i] = new Reveal();
        columnsv[i].x = floor(i * (width/num));
    }
    x = 0;
    texty = height/2;
    speed = 1;
    gravity = 0.6;
    stopbounce = 0;
    liney = height + 5;
    fade = 0;
    buttonfade = 0;
    disp = false;
    hchange = 0;
    fx = 0;
    fy = -.05;
    button = createButton('CONTINUE').attribute('class','btn-main');
    button.hide();
    button.position(width/2, height/2 + 100);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {

    background(225);
    noStroke();
    textSize(80);
    textFont("komu-b");
    textAlign(CENTER);
    fill(33, 37, 41);
    text('SETH KNIGHTS', width/2, texty - 10);
    for (let i = 0; i < columnsv.length; i++) {
        columnsv[i].display();
        if (x < columnsv.length) {
            if (columnsv[x].h <= height/6 * 5) {
                x += 1;
            }
        }
        if (x === i) {
            columnsv[i].transform();
        }
        columnsv[i].reveal();
    }

    if (x >= columnsv.length) {
        texty += speed;
        speed += gravity;

        if (stopbounce > 2) {
            if (speed > 10) {
                speed = 0;
                gravity = 0;
            }

            stroke(3);
            strokeWeight(2);
            line(width/2 - 150, liney, width/2 + 150, liney - hchange);
            if (liney > texty + 80) {
                liney -= 5;
            } else {
                textSize(30);
                textFont('komu-b');
                fill(33, 37, 41, fade);
                noStroke();
                text('HTML  +  CSS  +  PYTHON', width/2, liney + 30 - hchange);
                fade += 5;
                button.show();
            }


        }

            if (texty > height) {
                if (stopbounce <= 2) {
                    speed = -0.85 * speed;
                    stopbounce += 1;
                }

            }
        }

        if (fade >= 255) {

            noStroke();
            fill(250,150,0);
            rect(width/2 - 50, height, 100, -fx);
            if (disp === false) {
                if(fx < height/2 + 100) {
                    fx += 10 + (fx/30);
                    if ((height - fx) - liney < 30) {
                        liney -= 10 + (fx/30);
                        texty -= 10 + (fx/30);
                    }
                } else {
                    disp = true;
                }
            } else {
                fx -= 20 + (fx/30);
                if (liney < height/2) {
                    liney -= 1 + fy;
                    texty -= 1 + fy;
                    fy = fy * 1.2;
                } else {
                    button.style('opacity', buttonfade);
                    if (buttonfade < 1) {
                        button.style('opacity', buttonfade);
                        buttonfade += 0.01;
                    }
                }
            }


        }
}

function mouseWheel(event) {
}



class Reveal {
    constructor() {
        this.y = 0;
        this.h = height;
        this.w = ceil(width/num);
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
        if (this.moving === true) {
            this.h -= 3 * (this.h/90);
        }
    }

}