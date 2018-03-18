let circles = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(30); //setting frameRate lower to have ellipses move slower
}

function mousePressed () { //function that draws an ellipse when the mouse is pressed
  let b = new Circle()
  circles.push(b);
}

function draw(){
var color1 = color(63, 191, 127);
var color2 = color(255, 76, 35);

//draws gradient background by calling the function setGradient
setGradient(0, 0, windowWidth, 800, color1, color2, "Y");

push();
  noStroke();
  fill(255);
  textFont('Arial');
  text('CLICK THIS PAGE MULTIPLE TIMES',10,20);
pop();

//for-loop that calls the class Circle
  for (let Circle of circles) {
    Circle.move();
    Circle.show();
  }
}

class Circle {
  constructor() {
    this.positionX = mouseX; // circle is initially drawn at mouse coordinates...
    this.positionY = mouseY;
    this.xSpeed = 3; //... then moves with a speed of 3
    this.ySpeed = 3;
  }
  show() {
    strokeWeight(1);
    stroke(255);
    fill('rgba(255,180,200,0.20)');
    ellipse(this.positionX, this.positionY, 400, 400);
  }
  move() {
    // When the circle moves out of the window, it will turn in a new direction
    // and move -5 pixels along either the y- or x-aksis
    if(this.positionX > width || this.positionX < 0) {
      this.xSpeed = this.xSpeed * -1;
    }
    if(this.positionY > height || this.positionY < 0) {
      this.ySpeed = this.ySpeed * -1;
    }

    // this makes sure the circle keeps moving
    this.positionX = this.positionX + this.xSpeed;
    this.positionY = this.positionY - this.ySpeed;
  }
}

// draws the background by using var color1 and var color2 from function draw
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
