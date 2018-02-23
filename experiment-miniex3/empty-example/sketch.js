var img;
function preload() {
  img = loadImage('7kopi.jpg');
}

function setup(){
  console.log(mouseX,mouseY);
  createCanvas(500,500);
  image(img,0,0)
  angleMode(DEGREES);

}

function draw(){


strokeWeight(3);
stroke(63,248,189);
noFill();
ellipse(250,250,200,200);

strokeWeight(3);
stroke('rgba(248,189,63, 0.50)');
let end = map(mouseY, 0, mouseX, 0, 280);
arc(250,250,200,200,0,end);

strokeWeight(5);
stroke(63,248,189);
noFill();
ellipse(250,250,170,170);

strokeWeight(5);
stroke('rgba(248,189,63, 0.50)');
arc(250,250,170,170,0,end);

strokeWeight(8);
stroke(63,248,189);
noFill();
ellipse(250,250,130,130);

strokeWeight(8);
stroke('rgba(248,189,63, 0.50)');
arc(250,250,130,130,0,end);

strokeWeight(1);
stroke(63,248,189);
noFill();
ellipse(250,250,215,215);

strokeWeight(1);
stroke('rgba(248,189,63, 0.50)');
arc(250,250,215,215,0,end);

strokeWeight(3);
fill('rgba(239,152,157,1)');
stroke('white');
textSize(30);
textStyle(ITALIC);
textFont('Georgia');
text('fill circles to access page',80,430);


}

function mousePressed(){
  console.log(mouseX,mouseY);
}
