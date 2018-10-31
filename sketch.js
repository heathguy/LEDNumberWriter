let zero = [1,1,1,1,1,1,0];
let one = [0,1,1,0,0,0,0];
let two = [1,1,0,1,1,0,1];
let three = [1,1,1,1,0,0,1];
let four = [0,1,1,0,0,1,1];
let five = [1,0,1,1,0,1,1];
let six = [1,0,1,1,1,1,1];
let seven = [1,1,1,0,0,0,0];
let eight = [1,1,1,1,1,1,1];
let nine = [1,1,1,1,0,1,1];

let test = [1,0,0,0,0,0,0];

let s1;
let s2;
let s3;

function setup() {
  createCanvas(800, 800);
  
	// DISPLAY NUMBER, OFFSET, BAR WIDTH, BAR HEIGHT, BAR THICKNESS
	s1 = new lednbr(one, 0, 50, 50, 10);
	s2 = new lednbr(two, 100, 50, 50, 10);
	s3 = new lednbr(three, 440, 100, 100, 30);
}

function draw() {
  background(0);
	translate(50,50);
	s1.showLEDNbr();
	s2.showLEDNbr();
	s3.showLEDNbr();
}
