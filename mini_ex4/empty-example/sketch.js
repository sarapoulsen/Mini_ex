function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  button = createButton('Gain access!');
  button.position(20,325);
  button.mousePressed(changeBG);

  textAlign(CENTER);
  background(200);
  sel = createSelect();
  sel.position(310, 110);
  sel.option('--');
  sel.option('Aldi');
  sel.option('LIDL');
  sel.option('Bilka');
  sel.option('Føtex');
  sel.option('Netto');
  sel.option('Brugsen');
  sel.option('Fakta');
  sel.option('Irma');
  sel.option('REMA 1000');
  sel.option('KIWI');
  sel.option('MENY');
  sel.option('Spar');
  sel.option('Løvbjerg');
  sel.changed(mySelectEvent);

  textAlign(CENTER);
  background(200);
  sel = createSelect();
  sel.position(310, 90);
  sel.option('--');
  sel.option('0-14 years');
  sel.option('15-24 years');
  sel.option('25-64 years');
  sel.option('65 years and over');
  sel.changed(mySelectEvent2);

  textAlign(CENTER);
  background(200);
  sel = createSelect();
  sel.position(310, 70);
  sel.option('--');
  sel.option('Female');
  sel.option('Male');
  sel.option('None of the above');
  sel.changed(mySelectEvent3);

  textAlign(CENTER);
    background(200);
    sel = createSelect();
    sel.position(310, 130);
    sel.option('--');
    sel.option('Instagram');
    sel.option('Twitter');
    sel.option('Snapchat');
    sel.option('Facebook');
    sel.option('None of the above');
    sel.changed(mySelectEventnr4);

    textAlign(CENTER);
    background(200);
    sel = createSelect();
    sel.position(310, 150);
    sel.option('--');
    sel.option('Pop');
    sel.option('Rock');
    sel.option('R&B and soul');
    sel.option('Hip hop');
    sel.option('Jazz');
    sel.option('Country');
    sel.option('Electronic');
    sel.changed(mySelectEvent5);

    textAlign(CENTER);
    background(200);
    sel = createSelect();
    sel.position(310, 170);
    sel.option('--');
    sel.option('In a relationship');
    sel.option('Single');
    sel.changed(mySelectEvent6);

    textAlign(CENTER);
    background(200);
    sel = createSelect();
    sel.position(310, 190);
    sel.option('--');
    sel.option('Netflix');
    sel.option('HBO');
    sel.option('Amazon');
    sel.option('ViaPlay');
    sel.changed(mySelectEvent7);

    textAlign(CENTER);
    background(200);
    sel = createSelect();
    sel.position(310, 210);
    sel.option('--');
    sel.option('Aquarius');
    sel.option('Pisces');
    sel.option('Aries');
    sel.option('Taurus');
    sel.option('Gemini');
    sel.option('Cancer');
    sel.option('Leo');
    sel.option('Virgo');
    sel.option('Libra');
    sel.option('Scorpio');
    sel.option('Sagittatius');
    sel.option('Capricorn');
    sel.changed(mySelectEvent8);

    textAlign(CENTER);
    background(200);
    sel = createSelect();
    sel.position(310, 230);
    sel.option('--');
    sel.option('Less than 10 people');
    sel.option('More than 10 people');
    sel.changed(mySelectEvent9);

    textAlign(CENTER);
    background(200);
    sel = createSelect();
    sel.position(310, 250);
    sel.option('--');
    sel.option('Less than 30.000');
    sel.option('More than 30.000');
    sel.changed(mySelectEvent10);

    textAlign(CENTER);
    background(200);
    sel = createSelect();
    sel.position(310, 270);
    sel.option('--');
    sel.option('Less than 100 friends');
    sel.option('Between 100 and 1000 friends');
    sel.option('More than 1000 friends');
    sel.changed(mySelectEvent11);
}

function draw() {
  // put drawing code here
  background(186, 211, 236);

  push();
  fill('rgba(255,255,255,0.50)');
  noStroke();
  rect(40,60,519,240,15);

  fill('rgba(255,255,255,0.50)');
  noStroke();
  rect(306,60,255,240,15);
  pop();

  textSize(11);
  fill(0);
  text('Fill in your information below*. This helps us tailor your experience',182,20);
  text('to fit your personal needs, wants and desires.',132,35);
  text('OBS.: All fields must be completed.',107,50);
  text('Gender:',272,82);
  text('What is your favourite supermarket?',205,122);
  text('Your most preferred Social Networking Platform:',175,142);
  text('Age:',280,102);
  text('What music genre do you most often listen to?',179,162);
  text('Relationship status:',245,182);
  text('Which streaming services do you most often use?',170,202);
  text('Zodiac sign:',263,222);
  text('Number of sexual partners within the last 2 years:',172,242);
  text('Amount of money in your savings account:', 189,262);
  text('How many Facebook friends do you have?',188,282);
  textSize(9);
  text('*Your information will be stored for business purposes.',132,320);
  push();
  stroke('rgba(244,138,0,1)')
  line(300,60,300,300);
  pop();

  push();
  if (mouseIsPressed){

if (dist(70,325,mouseX,mouseY)<40){
  stroke('red');
  strokeWeight(3);
  fill(255);
  rect(20,350,555,140,10);
fill(0);
noStroke();
textSize(30);
textFont('Arial');
var word = ['Oops! Looks like some of your personal'];
var word2 = ['information prevents you from gaining'];
var word3 = ['access to this page … :('];
text(word, 300,400);
text(word2,300,430);
text(word3,300,460);
}
}
pop();
}

function changeBG() {
  var val = random(255);
  background(val);
}

function mySelectEvent() {
  var item = sel.value();
  background(200);
  text('it is a' + item + '!', 50, 50);
}

function mySelectEvent2() {
  var item = sel.value();
  background(200);
  text('it is a' + item + '!', 50, 50);
}

function mySelectEvent3() {
  var item = sel.value();
  background(200);
  text('it is a' + item + '!', 50, 50);
}

function mySelectEventnr4() {
  var item = sel.value();
  background(200);
  text('it is a' + item + '!', 50, 50);
}

function mySelectEvent5() {
  var item = sel.value();
  background(200);
  text('it is a' + item + '!', 50, 50);
}

function mySelectEvent6() {
  var item = sel.value();
  background(200);
  text('it is a' + item + '!', 50, 50);
}

function mySelectEvent7() {
  var item = sel.value();
  background(200);
  text('it is a' + item + '!', 50, 50);
}

function mySelectEvent8() {
  var item = sel.value();
  background(200);
  text('it is a' + item + '!', 50, 50);
}

function mySelectEvent9() {
  var item = sel.value();
  background(200);
  text('it is a' + item + '!', 50, 50);
}

function mySelectEvent10() {
  var item = sel.value();
  background(200);
  text('it is a' + item + '!', 50, 50);
}

function mySelectEvent11() {
  var item = sel.value();
  background(200);
  text('it is a' + item + '!', 50, 50);
}
