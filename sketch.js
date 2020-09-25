let canvas;

let botao0;
let botao1;
let botao2;
//let botao3;

let pannel0;
let pannel1;
let pannel2;
//let pannel3;

let sub0_btn0;
let sub0_btn1;


let bolhas = [];
class Bolha {
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
  }

  show() {
    noFill();
    stroke(0);
    //ellipse(this.x, this.y, this.r);
  }

  move() {
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }

  edgeCollision() {
    if (this.x < this.r) {
      this.x = this.x + 5;
    } else if (this.x > width - this.r) {
      this.x = this.x -5;
    }
    if (this.y < this.r) {
      this.y = this.y + 5;
    } else if (this.y > height - this.r) {
      this.y = this.y - 5;
    }
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r);
  }
}

function irSou () {
  pannel0.style("display", "block");
  pannel1.style("display", "none");
  pannel2.style("display", "none");
  //pannel3.style("display", "none");
}

function irFaco () {
  pannel0.style("display", "none");
  pannel1.style("display", "block");
  pannel2.style("display", "none");
  //pannel3.style("display", "none");
}

function irCont () {
  pannel0.style("display", "none");
  pannel1.style("display", "none");
  pannel2.style("display", "block");
  //pannel3.style("display", "none");
}

function irContato () {
  pannel0.style("display", "none");
  pannel1.style("display", "none");
  pannel2.style("display", "none");
  //pannel3.style("display", "block");
}

function setup() {
canvas = createCanvas(935, 935);
canvas.parent("canv");

botao0 = select("#butt0");
botao1 = select("#butt1");
botao2 = select("#butt2");
//botao3 = select("#butt3");

pannel0 = select("#infoPannel0");
pannel1 = select("#infoPannel1");
pannel2 = select("#infoPannel2");
//pannel3 = select("#infoPannel3");

sub0_btn0 = select("#sub0_btn0");
sub0_btn1 = select("#sub0_btn1");

botao0.mousePressed(irSou);
botao1.mousePressed(irFaco);
botao2.mousePressed(irCont);
//botao3.mousePressed(irContato);

for (let i = 0; i < 13; i++) {
  let x = random(width);
  let y = random(height);
  let r = random(50) * i + random(5,10);
  bolhas[i] = new Bolha(x, y, r);
}

}

function draw() {
  background(255);

  for (let b of bolhas) {
    b.move();
    b.show();
    b.edgeCollision();

    for (other of bolhas) {
      if (b !== other && b.intersects(other)) {
        line(other.x, other.y, b.x, b.y);
      }
    }
  }
}
