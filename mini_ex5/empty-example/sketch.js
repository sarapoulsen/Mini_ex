//shiffman bobler
let bubbles = [];

function setup() {
  createCanvas(windowWidth, 800);
  frameRate(20);
}

//shiffman bobler
function mousePressed() {
  let r = random(0.2,2);
  let r2 = random(0.2,1);
  let b = new bubble(mouseX, mouseY, r2, r, 5);
  bubbles.push(b);
}

function draw() {
  var color1 = color(34, 23, 67);
  var color2 = color(229, 107, 50);

//tegner baggrund ved at kalde funtionen setGradient defineret under
  setGradient(0, 0, windowWidth, 800, color1, color2, "Y");

  textSize(40);
  strokeWeight(1);
  stroke(255);
  textFont('Arial');
  fill('rgba(255,255,255,0)');
  text('Draw stars in the sky', 45,70);
  textSize(10);
  noStroke();
  fill(255);
  text('Click anywhere on this page to draw a star.',45,90);

//shiffman bobler
  for (let bubble of bubbles) {
    bubble.move();
    bubble.show();
  }

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
    bubbles[i].rot++;
  }
}

class bubble {
  constructor(x, y, r2, r, rot){
    this.x = x;
    this.y = y;
    this.r = r;
    this.r2 = r2;
    this.rot = rot;
  }

  move() {
    this.x = this.x + random(-0.5, 0.5);
    this.y = this.y + random(-0.5, 0.5);
  }

  show() {
push();
translate(this.x,this.y);
rotate(this.rot);
    strokeWeight(0);
    noStroke();
    fill('rgb(243, 211, 98)');
    this.star(0,0,this.r2*10,this.r*1,5);
    pop();
  }

star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
}

//funktion til at tegne baggrund
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis == "Y") {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == "X") {  // Left to right gradient
    for (var j = x; j <= x+w; j++) {
      var inter2 = map(j, x, x+w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y+h);
    }
  }
}
