
let  subTitulos = [];

var subMenu0;
var subMenu1;
var subMenu2;
var subMenu3;
var subMenu3;

var anteRior0;
var proXimo0;
var anteRior1;
var proXimo1;
var anteRior2;
var proXimo2;
var anteRior3;
var proXimo3;
var anteRior4;
var proXimo4;


let subMenus = [];
class SubMenu {
  constructor() {
    this.id = tempId;
    this.status = tempStatus;
  }
}

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

//Funções de visualização dos submenus.
function ir0() {
  subMenu0.style('display', 'grid');
  subMenu1.style('display', 'none');
  subMenu2.style('display', 'none');
  subMenu3.style('display', 'none');
  subMenu4.style('display', 'none');
}

function ir1() {
  subMenu0.style('display', 'none');
  subMenu1.style('display', 'grid');
  subMenu2.style('display', 'none');
  subMenu3.style('display', 'none');
  subMenu4.style('display', 'none');
}

function ir2() {
  subMenu0.style('display', 'none');
  subMenu1.style('display', 'none');
  subMenu2.style('display', 'grid');
  subMenu3.style('display', 'none');
  subMenu4.style('display', 'none');
}

function ir3() {
  subMenu0.style('display', 'none');
  subMenu1.style('display', 'none');
  subMenu2.style('display', 'none');
  subMenu3.style('display', 'grid');
  subMenu4.style('display', 'none');
}

function ir4() {
  subMenu0.style('display', 'none');
  subMenu1.style('display', 'none');
  subMenu2.style('display', 'none');
  subMenu3.style('display', 'none');
  subMenu4.style('display', 'grid');
}

//Mudar de cor do texto para vermelho.
function highlight() {
    this.style('color', 'red');
}

//Mudar de cor do texto para preto.
function unhighlight() {
    this.style('color', 'black');
}

let canvas;

//Código Geral
//function preload() {} | windowWidth, windowHeight
function setup() {
  canvas = createCanvas(windowWidth/2, windowHeight * 0.95);
  canvas.parent("canv");

  subTitulos = selectAll('h2');

  for (var i = 0; i < subTitulos.length; i++) {
    subTitulos[i].mouseOver(highlight);
    subTitulos[i].mouseOut(unhighlight);
  }

  subMenu0 = select('#Submenu0');
  subMenu1 = select('#Submenu1');
  subMenu2 = select('#Submenu2');
  subMenu3 = select('#Submenu3');
  subMenu3 = select('#Submenu4');



  anteRior0 = select('#anterior0') //#
  proXimo0 = select('#proximo0');
  anteRior1 = select('#anterior1');
  proXimo1 = select('#proximo1'); //#
  anteRior2 = select('#anterior2');
  proXimo2 = select('#proximo2');
  anteRior3 = select('#anterior3');
  proXimo3 = select('#proximo3');
  anteRior4 = select('#anterior4');
  proXimo4 = select('#proximo4');

  anteRior0.mousePressed(ir4); //*
  proXimo0.mousePressed(ir1);
  anteRior1.mousePressed(ir0);
  proXimo1.mousePressed(ir2); //*
  anteRior2.mousePressed(ir1); //*
  proXimo2.mousePressed(ir3); //*
  anteRior3.mousePressed(ir2); //*
  proXimo3.mousePressed(ir4); //*
  anteRior4.mousePressed(ir3); //*
  proXimo4.mousePressed(ir0); //*



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
