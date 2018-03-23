// Travel like a king
// Listen to the inner voice
// A higher wisdom is at work for you
// Conquering the stumbling blocks come easier
// When the conqueror is in tune with the infinite
// Every ending is a new beginning
// Life is an endless unfoldment
// Change your mind, and you change your relation to time





var dont_worry; // Free your mind and your ass will follow





var the_answer_is_in_every_question; //Dig it?
var vibes; // Good thoughts bring forth good fruit
              // Bullshit thoughts rot your meat
                // Think right, and you can fly

// You can find the answer
// The solution lies within the problem
// The answer is in every question
// Dig it?
// An attitude is all you need to rise and walk away
// Inspire yourself
// Your life is yours
// It fits you like your skin

function preload () {
  dont_worry=loadStrings('dig_it.txt');
  the_answer_is_in_every_question=loadSound('Funkadelic.mp3');
  vibes=loadFont('Vibe.ttf');
}

// The oak sleeps in the acorn
// The giant sequoia tree sleeps in its tiny seed
// The bird waits in the egg
// God waits for his unfoldment in man
// Fly on, children
// Play on

function setup() {
  createCanvas(windowWidth, windowHeight); //Dig it?
}

// You gravitate to that which you secretly love most
// You meet in life the exact reproduction of your own thoughts
// There is no chance, coincidence or accident
// In a world ruled by law and divine order
// You rise as high as your dominant aspiration
// You descend to the level of your lowest concept of your self
// Free your mind and your ass will follow

function draw() {
  background(234,111,35);
  textFont(vibes);
  textSize(30);
  for (var i = 0; i < dont_worry.length; i++) {
    fill(255,0.95+(i*35));
    text(dont_worry[i], 50, 150+i*30);
  }
}

// The infinite intelligence within you knows the answers
// Its nature is to respond to your thoughts
// Be careful of the thought-seeds you plant in the garden of your mind
// For seeds grow after their kind

function mousePressed() {//Play on, children
  shuffle(dont_worry, true);
  the_answer_is_in_every_question.play();
}

// Every thought felt as true
// Or allowed to be accepted as true by your conscious mind
// Takes roots in your subconscious
// Blossoms sooner or later into an act
// And bears its own fruit
// Good thoughts bring forth good fruit
// Bullshit thoughts rot your meat
// Think right, and you can fly
// The kingdom of heaven is within
// Free your mind, and your ass will follow
//
// Play on, children
// Sing on, lady
