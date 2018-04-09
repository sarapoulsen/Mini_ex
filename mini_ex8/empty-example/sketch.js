var weather1, weather2, weather3, weather4, bord1, glas1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Moscow&APPID=3bbc23a1338da08f537f708c0aea31f6&units=metric', gotData1)
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Copenhagen&APPID=3bbc23a1338da08f537f708c0aea31f6&units=metric', gotData2)
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=3bbc23a1338da08f537f708c0aea31f6&units=metric', gotData3)
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=3bbc23a1338da08f537f708c0aea31f6&units=metric', gotData4)
  bord1=loadImage('bar.jpg');
  glas1=loadImage('glas.png');
}

function gotData1(data1) {
  //println(data);
  weather1 = data1;
}
function gotData2(data2) {
  //println(data);
  weather2 = data2;
}
function gotData3(data3) {
  weather3 = data3;
}
function gotData4(data4) {
  weather4 = data4;
}

function draw() {
glasses();
moscow();
london();
copenhagen();
paris();

noStroke();
fill('rgba(255,255,255,1)');
textSize(45);
textFont('Helvetica');
text('MOSCOW • COPENHAGEN • LONDON • PARIS', windowWidth/2-482, windowHeight/2-152)
textSize(45);
fill(0);
text('MOSCOW • COPENHAGEN • LONDON • PARIS', windowWidth/2-485, windowHeight/2-155)
}

function glasses(){
  image(bord1, 0,0, windowWidth, windowHeight);
  image(glas1, windowWidth/2-550, windowHeight/2-55, 200, 300);
  image(glas1, windowWidth/2-250, windowHeight/2-55, 200, 300);
  image(glas1, windowWidth/2+50, windowHeight/2-55, 200, 300);
  image(glas1, windowWidth/2+350, windowHeight/2-55, 200, 300);
}

function moscow(){
noStroke();
fill('rgba(255,255,255,0.30)')
ellipse(windowWidth/2-450, windowHeight/2+190, 150,30);
  if (weather1) {
    if(weather1.main.temp<-10){
      noStroke();
      fill('rgba(255,255,255,0.30)')
      rect(windowWidth/2-526, windowHeight/2+85, 157,100);
    }
    if(weather1.main.temp>-10 && weather1.main.temp<0){
      rect(windowWidth/2-526, windowHeight/2+62.5, 157,122.5);
    }
    if(weather1.main.temp>0 && weather1.main.temp<10){
      rect(windowWidth/2-526, windowHeight/2+40, 157,145);
    }
    if(weather1.main.temp>10 && weather1.main.temp<20){
      rect(windowWidth/2-526, windowHeight/2+17.5, 157,167.5);
    }
    if(weather1.main.temp>20){
      rect(windowWidth/2-526, windowHeight/2-5, 157,190);
    }
  }
}

function copenhagen(){
noStroke();
fill('rgba(183,158,36,0.50)')
ellipse(windowWidth/2-150, windowHeight/2+190, 150,30);
  if (weather2) {
    if(weather2.main.temp<-10){
      noStroke();
      fill('rgba(183,158,36,0.50)')
      rect(windowWidth/2-226, windowHeight/2+85, 157,100);
    }
    if(weather2.main.temp>-10 && weather2.main.temp<0){
      rect(windowWidth/2-226, windowHeight/2+62.5, 157,122.5);
    }
    if(weather2.main.temp>0 && weather2.main.temp<10){
      rect(windowWidth/2-226, windowHeight/2+40, 157,145);
    }
    if(weather2.main.temp>10 && weather2.main.temp<20){
      rect(windowWidth/2-226, windowHeight/2+17.5, 157,167.5);
    }
    if(weather2.main.temp>20){
      rect(windowWidth/2-226, windowHeight/2-5, 157,190);
    }
  }
}

function london(){
noStroke();
fill('rgba(109,80,13,0.60)')
ellipse(windowWidth/2+150, windowHeight/2+190, 150,30);
  if (weather3) {
    if(weather3.main.temp<-10){
      noStroke();
      fill('rgba(109,80,13,0.50)')
      rect(windowWidth/2+75, windowHeight/2+85, 157,100);
    }
    if(weather3.main.temp>-10 && weather3.main.temp<0){
      rect(windowWidth/2+75, windowHeight/2+62.5, 157,122.5);
    }
    if(weather3.main.temp>0 && weather3.main.temp<10){
      rect(windowWidth/2+75, windowHeight/2+40, 157,145);
    }
    if(weather3.main.temp>10 && weather3.main.temp<20){
      rect(windowWidth/2+75, windowHeight/2+17.5, 157,167.5);
    }
    if(weather3.main.temp>20){
      rect(windowWidth/2+75, windowHeight/2-5, 157,190);
    }
  }
}

function paris(){
noStroke();
fill('rgba(132,14,14,0.50)')
ellipse(windowWidth/2+450, windowHeight/2+190, 150,30);
  if (weather4) {
    if(weather4.main.temp<-10){
      noStroke();
      fill('rgba(132,14,14,0.50)')
      rect(windowWidth/2+375, windowHeight/2+85, 157,100);
    }
    if(weather4.main.temp>-10 && weather4.main.temp<0){
      rect(windowWidth/2+375, windowHeight/2+62.5, 157,122.5);
    }
    if(weather4.main.temp>0 && weather4.main.temp<10){
      rect(windowWidth/2+375, windowHeight/2+40, 157,145);
    }
    if(weather4.main.temp>10 && weather4.main.temp<20){
      rect(windowWidth/2+375, windowHeight/2+17.5, 157,167.5);
    }
    if(weather4.main.temp>20){
      rect(windowWidth/2+375, windowHeight/2-5, 157,190);
    }
  }
}
