let canvas;
let canv;

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

let sub1_btn0;
let sub1_btn1;
let sub1_btn2;

let sub2_btn0;

let subcontent00;
let subcontent01;

let subcontent10;
let subcontent11;
let subcontent12;

let submenu0;
let submenu1;
let submenu2;



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
    //stroke(random(255), random(255), random(255));
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
  canv.style("background-color", "red");

  botao0.style("background-color", "red");
  botao1.style("background-color", "white");
  botao2.style("background-color", "white");

  submenu0.style("border-style", "none none solid solid");
  submenu1.style("border-style", "solid none solid dashed");
  submenu2.style("border-style", "solid solid solid none");

  //background(255,0,0);
  stroke(255, 4, 0);
}

function irFaco () {
  pannel0.style("display", "none");
  pannel1.style("display", "block");
  pannel2.style("display", "none");
  canv.style("background-color", "blue");

  botao0.style("background-color", "white");
  botao1.style("background-color", "blue");
  botao2.style("background-color", "white");

  submenu0.style("border-style", "solid none solid solid");
  submenu1.style("border-style", "none none solid dashed");
  submenu2.style("border-style", "none solid solid dashed");

  //background(0,255,0);
  stroke(25, 204, 0);
}

function irCont () {
  pannel0.style("display", "none");
  pannel1.style("display", "none");
  pannel2.style("display", "block");
  canv.style("background-color", "green");

  botao0.style("background-color", "white");
  botao1.style("background-color", "white");
  botao2.style("background-color", "green");

  submenu0.style("border-style", "solid none solid solid");
  submenu1.style("border-style", "solid none solid none");
  submenu2.style("border-style", "none solid solid dashed");

  //background(0,0,255);
  stroke(255, 204, 0);
}

function irSubContent00() {
  subcontent00.style("display", "block");
  subcontent01.style("display", "none");

  sub0_btn0.style("background-color", "red");
  sub0_btn1.style("background-color", "black");
  sub0_btn1.style("border-radius", "0rem 1rem 0rem 0rem");

}

function irSubContent01() {
  subcontent00.style("display", "none");
  subcontent01.style("display", "block");

  sub0_btn0.style("background-color", "black");
  sub0_btn1.style("background-color", "red");

}

function irSubContent10() {
  subcontent10.style("display", "block");
  subcontent11.style("display", "none");
  subcontent12.style("display", "none");

  sub1_btn0.style("background-color", "blue");
  sub1_btn1.style("background-color", "black");
  sub1_btn2.style("background-color", "black");

}

function irSubContent11() {
  subcontent10.style("display", "none");
  subcontent11.style("display", "block");
  subcontent12.style("display", "none");

  sub1_btn0.style("background-color", "black");
  sub1_btn1.style("background-color", "blue");
  sub1_btn2.style("background-color", "black");

}

function irSubContent12() {
  subcontent10.style("display", "none");
  subcontent11.style("display", "none");
  subcontent12.style("display", "block");

  sub1_btn0.style("background-color", "black");
  sub1_btn1.style("background-color", "black");
  sub1_btn2.style("background-color", "blue");

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight/4);
}

function setup() {
//canvas = createCanvas(windowWidth/2.05, windowHeight/1.5);
canvas = createCanvas(windowWidth, windowHeight);

canvas.parent("canv");

canv = select("#canv");

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

sub1_btn0 = select("#sub1_btn0");
sub1_btn1 = select("#sub1_btn1");
sub1_btn2 = select("#sub1_btn2");

sub2_btn0 = select("sub2_btn0");

subcontent00 = select("#subcontent00");
subcontent01 = select("#subcontent01");

subcontent10 = select("#subcontent10");
subcontent11 = select("#subcontent11");
subcontent12 = select("#subcontent12");

//botao3.mousePressed(irContato);

submenu0 = select("#submenu0");
submenu1 = select("#submenu1");
submenu2 = select("#submenu2");

sub0_btn0.mousePressed(irSubContent00);
sub0_btn1.mousePressed(irSubContent01);

sub1_btn0.mousePressed(irSubContent10);
sub1_btn1.mousePressed(irSubContent11);
sub1_btn2.mousePressed(irSubContent12);


for (let i = 0; i < 20; i++) {
  let x = random(width);
  let y = random(height);
  let r = random(50) * i + random(5,10);
  bolhas[i] = new Bolha(x, y, r);
}

}

function draw() {
  clear();
  strokeWeight(3);
  botao0.mousePressed(irSou);
  botao1.mousePressed(irFaco);
  botao2.mousePressed(irCont);

  //if () {}
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
