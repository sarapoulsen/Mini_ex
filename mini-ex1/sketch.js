function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background('pink');

  push();
  stroke('black');
  strokeWeight(2);
  noFill();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(40, 30,10,2);
  pop();

  stroke('yellow');
  strokeWeight(1);
  fill('rgba(200,100,80, 0.20)');
  rotateY(frameCount * 0.005);
  box(250)

  stroke('yellow');
  strokeWeight(1);
  noFill();
  rotateX(frameCount * 0.005);
  box(90,150);

  stroke('rgba(200,100,80, 0.20)');
  strokeWeight(1);
  fill('rgba(100,200,80, 0.20)');
  rotateX(frameCount * 0.005);
  sphere(70);

  stroke('rgba(50,5,100, 0.50)');
  strokeWeight(1);
  fill('rgba(60,10,80, 0.20)');
  rotateX(frameCount * 0.005);
  sphere(10);

}
