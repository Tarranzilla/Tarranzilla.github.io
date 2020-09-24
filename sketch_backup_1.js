
//Declaração da Array de Bolhas.
let bubbles = [];

let bubble1;
let bubble2;
let unicorn;

//Declaração da Array de imagens.
let fotografiasArray = [];
let foto;

//Código Geral
function preload() {
  foto = loadImage("fotografias/exemplo1.jpg");
}

function setup() {
  createCanvas(800,800);

  //Criação das Bolhas Extras.
  bubble1 = new Bubble(200, 200, 200, 200);
  bubble2 = new Bubble(600, 600, 200, 0);
  unicorn = new Bubble(400, 400, 40, 255);

  //Definição da quantidade e tipos possíveis de Bolhas da Array.
  for (let i = 0; i < 7; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(50) * i + random(5,10);
    let s = 255;
    bubbles[i] = new Bubble(x, y, r, s);
  }
}

function draw() {
  background(25);

  let d = dist(bubble1.x, bubble1.y, bubble2.x, bubble2.y)
  if (d < bubble1.r + bubble2.r) {
    strokeWeight(4);
    drawingContext.setLineDash([0.5, 3]);
    line(bubble1.x, bubble1.y, bubble2.x, bubble2.y);
  }

  //Sistema de detecção de Distância entre as Bolhas.
  //Mudança de cor do Fundo e estilo de tracejado às linhas e traços.
  //Regra de interseção.

  //if (bubble1.intersects(bubble2)) {
  //  background(255, 0, 0)
  //  line(bubble1.x, bubble1.y, bubble2.x, bubble2.y)
  //}

  //Grandes Bolhas Indestrutíveis.
  bubble1.show();
  bubble1.move();
  bubble1.edgeCollision();
  bubble2.show();
  bubble2.move();
  bubble2.edgeCollision();

  unicorn.show();
  unicorn.x = mouseX;
  unicorn.y = mouseY;

  //fotoSupergarui1.showFoto();

  //Highlight sobre bolha selecionada.
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].clickAble(mouseX, mouseY)) {
      bubbles[i].changeColor();
    }
  }

  //Inicialização das funções para as Bolhas.
  for (let b of bubbles) {
    b.move();
    b.show();
    b.edgeCollision();

    //Criação de uma linha entre unicornio e bolhas caso haja interseção.
    for (let other of bubbles) {
      if (b.intersects(unicorn)) {
        line(unicorn.x, unicorn.y, b.x, b.y);
      }
    }

    //Criação de uma linha entre bolhas caso haja interseção.
    for (other of bubbles) {
      if (b !== other && b.intersects(other)) {
        line(other.x, other.y, b.x, b.y);
      }
    }
  }

  //for (let i = 0; i < bubbles.length; i++) {
  //  bubbles[i].move();
  //  bubbles[i].show();
  //  bubbles[i].edgeCollision();
  //}

  //Texto do Site e estilo contínuo às linhas e traços.
  drawingContext.setLineDash([]);
  noStroke();
  fill(255);
  textSize(32);
  text("João Tarran", 100, 300);
  noFill();
  stroke(255);
  strokeWeight(1)
  textSize(96);
  text(menu[index], 100, 400);

}



//Definição de uma Fotografia.
//class fotografias {
//  constructor(tempX, tempY, tempR, TempS) {
//    this.x = tempX;
//    this.y = tempY;
//    this.r = tempR;
//    this.s = tempS;
//  }
//
//  showFoto() {
//    image(foto, this.x, this.y);
//  }
//}//Fim da Classe de Fotografia

//Definição de uma Bolha.
class Bubble {
  constructor(tempX, tempY, tempR, tempS) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
    this.s = tempS;
  }

  move() {
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }

  show() {
  //  image(foto, this.x, this.y);
  //  stroke(this.s);
  //  strokeWeight(4);
  //  noFill();
  //  ellipse(this.x, this.y, this.r * 2);
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

  //Função de interseção.
  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r);
  }

  //Mudança de cor do Stroke das Bolhas.
  changeColor() {
    this.s = random(255);
  }

  //Sensoriamento de click em objeto.
  clickAble(x, y) {
    let d = dist(x, y, this.x, this.y);
    if (d < this.r) {
      return true;
  } else {
      return false;
    }
  }
}//Fim da Bubble Class.

//Menu.
var menu = ["Projetos", "Experimentos", "Fotografias", "Sobre Mim", "Contato"];
var index = 0;

//Interação entre mouse e menu.
function mousePressed () {

  index = index + 1;
  if (index == menu.length) {
  index = 0;
  }

  //Remover uma Bolha selecionada.
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].clickAble(mouseX, mouseY)) {
      bubbles.splice(i,1);
      console.log("Estorou a Bolha");
    }
  }
}

//Criar uma nova Bolha.
//  let r = random(5, 50);
//  let s = random(0, 255);
//  let b = new Bubble(mouseX, mouseY, r, s);
//  bubbles.push(b);
//}

// Fim do Código 1


//Declaração da Array de Bolhas.
let bubbles = [];
let foto;

//Código Geral
function preload() {
  foto = loadImage('fotografias/exemplo1.png');
}

function setup() {
  createCanvas(800,800);

  //Definição da quantidade e tipos possíveis de Bolhas da Array.
  for (let i = 0; i < 7; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(50) * i + random(5,10);
    let s = 255;
    bubbles[i] = new Bubble(x, y, r, s);
  }
}

function draw() {
  background(25);

  //Highlight sobre bolha selecionada.
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].clickAble(mouseX, mouseY)) {
      bubbles[i].changeColor();
    }
  }

  //Inicialização das funções para as Bolhas.
  for (let b of bubbles) {
    b.move();
    b.show();
    b.edgeCollision();
  }

  //Texto do Site e estilo contínuo às linhas e traços.
  drawingContext.setLineDash([]);
  noStroke();
  fill(255);
  textSize(32);
  text("João Tarran", 100, 300);
  noFill();
  stroke(255);
  strokeWeight(1)
  textSize(96);
  text(menu[index], 100, 400);

}

//Definição de uma Bolha.
class Bubble {
  constructor(tempX, tempY, tempR, tempS) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
    this.s = tempS;
  }

  move() {
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }

  show() {
    image(foto, this.x, this.y);
  //  stroke(this.s);
  //  strokeWeight(4);
  //  noFill();
  //  ellipse(this.x, this.y, this.r * 2);
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

  //Função de interseção.
  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r);
  }

  //Mudança de cor do Stroke das Bolhas.
  changeColor() {
    this.s = random(255);
  }

  //Sensoriamento de click em objeto.
  clickAble(x, y) {
    let d = dist(x, y, this.x, this.y);
    if (d < this.r) {
      return true;
  } else {
      return false;
    }
  }
}//Fim da Bubble Class.

//Menu.
var menu = ["Projetos", "Experimentos", "Fotografias", "Sobre Mim", "Contato"];
var index = 0;

//Interação entre mouse e menu.
function mousePressed () {

  index = index + 1;
  if (index == menu.length) {
  index = 0;
  }

  //Remover uma Bolha selecionada.
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].clickAble(mouseX, mouseY)) {
      bubbles.splice(i,1);
      console.log("Estorou a Bolha");
    }
  }
}

//FIM DO CÓDIGO 2


//Declaração da Array de Bolhas.
let bubbles = [];

let bubble1;
let bubble2;
let unicorn;

//Declaração da Array de imagens.
let fotografiasArray = [];
let foto;

//Definição de uma Fotografia.
//class fotografia {
//  constructor(tempImg, tempX, tempY) {
//    this.img = tempImg;
//    this.x = tempX;
//    this.y = tempY;
//  }

//  showFoto() {
//    image(this.img, this.x, this.y);
//  }
//}//Fim da Classe de Fotografia

//Definição de uma Bolha.
class Bubble {
  constructor(tempImg, tempX, tempY, tempR, tempS) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
    this.s = tempS;
    this.imagem = tempImg
  }

  move() {
    this.x = this.x + random(-5,5);
    this.y = this.y + random(-5,5);
  }

  show() {
    image(this.imagem, this.x, this.y);
    //stroke(this.s);
    //strokeWeight(4);
    //noFill();
    //ellipse(this.x, this.y, this.r * 2);
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

  //Função de interseção.
  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r);
  }

  //Mudança de cor do Stroke das Bolhas.
  changeColor() {
    this.s = random(255);
  }

  //Sensoriamento de click em objeto.
  clickAble(x, y) {
    let d = dist(x, y, this.x, this.y);
    if (d < this.r) {
      return true;
  } else {
      return false;
    }
  }
}//Fim da Bubble Class.

//Menu.
var menu = ["Projetos", "Experimentos", "Fotografias", "Sobre Mim", "Contato"];
var index = 0;

//Interação entre mouse e menu.
function mousePressed () {

  index = index + 1;
  if (index == menu.length) {
  index = 0;
  }

  //Remover uma Bolha selecionada.
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].clickAble(mouseX, mouseY)) {
      bubbles.splice(i,1);
      console.log("Estorou a Bolha");
    }
  }
}

//Criar uma nova Bolha.
//  let r = random(5, 50);
//  let s = random(0, 255);
//  let b = new Bubble(mouseX, mouseY, r, s);
//  bubbles.push(b);
//}


//Código Geral
function preload() {
  foto = loadImage("fotografias/exemplo1.jpg")

for (let k = 0; k < 4; k++) {
  fotografiasArray[k] = loadImage("fotografias/exemplo" + k + ".png");
  }
}

function setup() {
  createCanvas(800,800);

  //Criação das Bolhas Extras.
  bubble1 = new Bubble(200, 200, 200, 200);
  bubble2 = new Bubble(600, 600, 200, 0);
  unicorn = new Bubble(400, 400, 40, 255);

  //Definição da quantidade e tipos possíveis de Bolhas da Array.
  for (let i = 0; i < 7; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(50) * i + random(5,10);
    let s = 255;
    let img = random(fotografiasArray);
    bubbles[i] = new Bubble(x, y, r, s, img);
  }

  //Definição da quantidade e tipos possíveis de Fotografias.
  //for (let k = 0; k < 4; k++) {
  //  let x = random(width);
  //  let y = random(height);
  //  let img = random(fotografiasArray);
  //  let b = new fotografia(x, y, img);
  //  fotografiasArray.push(b);
  //}

}

function draw() {
  background(25);
  imageMode(CENTER);

  let d = dist(bubble1.x, bubble1.y, bubble2.x, bubble2.y)
  if (d < bubble1.r + bubble2.r) {
    strokeWeight(4);
    drawingContext.setLineDash([0.5, 3]);
    line(bubble1.x, bubble1.y, bubble2.x, bubble2.y);
  }

  //Sistema de detecção de Distância entre as Bolhas.
  //Mudança de cor do Fundo e estilo de tracejado às linhas e traços.
  //Regra de interseção.

  //if (bubble1.intersects(bubble2)) {
  //  background(255, 0, 0)
  //  line(bubble1.x, bubble1.y, bubble2.x, bubble2.y)
  //}

  //Grandes Bolhas Indestrutíveis.
  bubble1.show();
  bubble1.move();
  bubble1.edgeCollision();
  bubble2.show();
  bubble2.move();
  bubble2.edgeCollision();

  unicorn.show();
  unicorn.x = mouseX;
  unicorn.y = mouseY;

  //fotoSupergarui1.showFoto();

  //Highlight sobre bolha selecionada.
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].clickAble(mouseX, mouseY)) {
      bubbles[i].changeColor();
    }
  }

  //Inicialização das funções para as Bolhas.
  for (let b of bubbles) {
    b.move();
    b.show();
    b.edgeCollision();

    //Criação de uma linha entre unicornio e bolhas caso haja interseção.
    for (let other of bubbles) {
      if (b.intersects(unicorn)) {
        line(unicorn.x, unicorn.y, b.x, b.y);
      }
    }

    //Criação de uma linha entre bolhas caso haja interseção.
    for (other of bubbles) {
      if (b !== other && b.intersects(other)) {
        line(other.x, other.y, b.x, b.y);
      }
    }
  }

  //for (let i = 0; i < bubbles.length; i++) {
  //  bubbles[i].move();
  //  bubbles[i].show();
  //  bubbles[i].edgeCollision();
  //}

  //Texto do Site e estilo contínuo às linhas e traços.
  drawingContext.setLineDash([]);
  noStroke();
  fill(255);
  textSize(32);
  text("João Tarran", 100, 300);
  noFill();
  stroke(255);
  strokeWeight(1)
  textSize(96);
  text(menu[index], 100, 400);

}
