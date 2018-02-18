/*var img;
function preload() {
  img = loadImage('data/mcdonalds_PNG10.mcdonalds_PNG10');
}
*/

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background('rgba(68,33,154,1)');
  console.log(mouseX,mouseY);
}

function draw() {
  // put drawing code here
push();
//hvid del af bakke
fill('rgb(229,226,218)');
noStroke();
ellipse(250, 298, 200, 60);

//nr.0
fill(255,204,0);
stroke(255,204,0);
beginShape();
vertex(169, 211);
vertex(185, 203);
vertex(204, 381);
vertex(190, 381);
endShape(CLOSE);

fill('rgba(175,151,33,1)');
stroke('rgba(175,151,33,1)');
beginShape();
vertex(185, 203);
vertex(202, 209);
vertex(215, 382);
vertex(204, 381);
endShape(CLOSE);

//nr.-1
fill(255,204,0);
stroke(255,204,0);
beginShape();
vertex(157, 253);
vertex(169, 259);
vertex(180, 381);
vertex(173, 381);
endShape(CLOSE);

fill('rgba(175,151,33,1)');
stroke('rgba(175,151,33,1)');
beginShape();
vertex(169, 259);
vertex(182, 258);
vertex(191, 382);
vertex(181, 381);
endShape(CLOSE);

fill('rgba(252,215,104,1)');
noStroke();
beginShape();
vertex(157,253);
vertex(173,254);
vertex(182,258);
vertex(169,259);
endShape(CLOSE);

//nr.1
fill(255,204,0);
stroke(255,204,0);
beginShape();
vertex(244, 191);
vertex(270, 181);
vertex(269, 381);
vertex(214, 381);
endShape(CLOSE);

fill('rgba(175,151,33,1)');
stroke('rgba(175,151,33,1)');
beginShape();
vertex(270, 181);
vertex(289, 192);
vertex(280, 382);
vertex(269, 381);
endShape(CLOSE);
//nr. 2
  fill(255,204,0);
  stroke(255,204,0);
  beginShape();
vertex(194, 220);
vertex(217, 193);
vertex(233, 381);
vertex(214, 381);
endShape(CLOSE);

fill('rgba(175,151,33,1)');
stroke('rgba(175,151,33,1)');
beginShape();
vertex(217, 193);
vertex(248, 199);
vertex(253, 381);
vertex(233, 381);
endShape(CLOSE);
//nr. 3
fill(255,204,0);
stroke(255,204,0);
beginShape();
vertex(275, 232);
vertex(293, 228);
vertex(295, 381);
vertex(280, 381);
endShape(CLOSE);

fill('rgba(175,151,33,1)');
stroke('rgba(175,151,33,1)');
beginShape();
vertex(293, 228);
vertex(306, 241);
vertex(303, 381);
vertex(295, 381);
endShape(CLOSE);

//nr.4
fill(255,204,0);
stroke(255,204,0);
beginShape();
vertex(306, 288);
vertex(320, 278);
vertex(308, 381);
vertex(296, 381);
endShape(CLOSE);

fill(255,204,0);
stroke(255,204,0);
quad(351, 258, 344, 270, 312, 295, 306, 284);

fill('rgba(175,151,33,1)');
stroke('rgba(175,151,33,1)');
quad(345, 270, 352, 282, 330, 303, 320, 290);

fill('rgba(175,151,33,1)');
stroke('rgba(175,151,33,1)');
quad(320, 290, 330, 303, 316, 382, 308, 382);

fill('rgba(252,215,104,1)');
stroke('rgba(252,215,104,1)');
quad(353, 258, 358, 270, 353, 281, 344, 272);

//nr.5 foran
fill(255,204,0);
stroke(255,204,0);
beginShape();
vertex(238, 277);
vertex(254, 291);
vertex(251, 381);
vertex(240, 381);
endShape(CLOSE);

fill('rgba(175,151,33,1)');
stroke('rgba(175,151,33,1)');
beginShape();
vertex(254, 291);
vertex(265, 285);
vertex(263, 381);
vertex(251, 381);
endShape(CLOSE);

fill('rgba(252,215,104,1)');
stroke('rgba(252,215,104,1)');
quad(250, 275, 265, 285, 254, 291, 238, 277);

//rød boks
fill('rgb(198,52,16)');
noStroke();
quad(150,299,197,310,200,483,171,483);

fill('rgb(198,52,16)');
noStroke();
quad(304,310,351,299,332,483,305,483);

fill('rgb(198,52,16)');
noStroke();
rect(183,341,130,130)

fill('rgb(198,52,16)');
noStroke();
ellipse(251,480,162,30)

/*
fill('rgba(175,151,33,1)');
stroke('rgba(175,151,33,1)');
beginShape();
vertex(293, 228);
vertex(306, 241);
vertex(303, 381);
vertex(295, 381);
endShape(CLOSE);
*/
pop();

if (mouseIsPressed){

if (dist(433,176,mouseX,mouseY)<50){
fill(0);
textSize(30);
textFont('Arial');
var word = ['snydt pomfrit'];
text(word, 100,125);

fill(0);
textSize(10);
textFont('Arial');
var word2 = ['press ENTER to restart'];
text(word2, 200,358);

push();
  //hvid cirkel bagerst
  fill('rgba(255,255,255,1)')
  stroke('rgba(255,255,255,1)')
  ellipse(433, 176, 100, 100);

  //cirkel bagved
  fill('rgba(29,14,66,0.75)')
  stroke('rgba(29,14,66,0.75)')
  strokeWeight(0);
  ellipse(428, 183, 100, 100);

  //cirkel foran 217, 138, 72
 push();
  fill('rgba(217,138,72,0.90)')
  stroke('rgba(222,154,98,1)')
  strokeWeight(4);
  ellipse(433, 176, 100, 100);
pop();
pop();
}
} else {
push();
//hvid cirkel bagerst
fill('rgba(255,255,255,1)')
stroke('rgba(255,255,255,1)')
ellipse(433, 176, 100, 100);

//cirkel bagved
fill('rgba(29,14,66,0.75)')
stroke('rgba(29,14,66,0.75)')
strokeWeight(0);
ellipse(428, 183, 100, 100);

//cirkel foran
push();
fill('rgba(214,113,30,0.85)')
stroke('rgba(214,113,30,1)')
strokeWeight(4);
ellipse(433, 176, 100, 100);
pop();
pop();
}


push();
fill(0);
textSize(14);
textFont('Arial')
noStroke();
var word = ['click for fun'];
text(word,396,180);
pop();
}


function keyPressed() {
  if(keyCode===ENTER) {
    setup();
    redraw();
  }
}


function mousePressed(){
  console.log(mouseX,mouseY);
}
