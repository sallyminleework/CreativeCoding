
let gryffindor = 'Gryffindor';

let slytherin = 'Slytherin';

let ravenclaw = 'Ravenclaw';

let hufflepuff = 'Hufflepuff';

let myHouse = '';

let newHouse = false;

let phraseCount = 0;

let img;

let img2;

let img3;

let img4;

var song;

function preload(){
	//song = loadSound("Prologue.mp3");
	img = loadImage('/05-data/gryffindorlion.png');
	img2 = loadImage('/05-data/slytherinsnake.png');
	img3 = loadImage('/05-data/ravenclaweagle.png');
	img4 = loadImage('/05-data/hufflepuffbadger.png');
}

function loaded() {
	song.play();
}

function setup(){
	httpGet('https://www.potterapi.com/v1/sortingHat','json', myCallback);
	//httpGet('https://dictionaryapi.com/api/v3/references/sd4/json/test?key=f5749151-40e9-4288-b6ce-c7ec97a84577',myCallback);
	//httpGet('wordsapiv1.p.rapidapi.com',  + apiKey, myCallback);
	
	createCanvas(400, 500);
	background(0);
	song = loadSound("Prologue.mp3", loaded);

	textSize(15);
	fill(255);
	text('Refresh to see what house you are in', 80, 30);
}

function draw(){
	if (myHouse == gryffindor) {

			fill(255, 50, 50, 65);
			rect(50, 50, 150, 150, 20, 0, 0, 0);
			fill(255, 133, 48, 65);
			rect(200, 50, 150, 150, 0, 20, 0, 0);
			fill(255, 133, 48, 65);
			triangle(50,200,200,200,200,400);
			fill(255, 50, 50, 65);
			triangle(200,200,350,200,200,400);

			textAlign(CENTER, CENTER);
			textSize(25);
			fill(255);
			text('You are in Gryffindor!', width/2, 450);

			image(img, width/5.5, height/5, img.width/3, img.height/3);
		}

		else if (myHouse == slytherin) { 
			fill(0, 166, 0, 65);
			rect(50, 50, 150, 150, 20, 0, 0, 0);
			fill(255, 65);
			rect(200, 50, 150, 150, 0, 20, 0, 0);
			fill(255, 65);
			triangle(50,200,200,200,200,400);
			fill(0, 166, 0, 65);
			triangle(200,200,350,200,200,400);

			textAlign(CENTER, CENTER);
			textSize(25);
			fill(255);
			text('You are in Slytherin!', width/2, 450);

			image(img2, width/5.5, height/5, img.width/3, img.height/3);
			}

			else if (myHouse == ravenclaw) {
			fill(145,215,255, 65);
			rect(50, 50, 150, 150, 20, 0, 0, 0);
			fill(0,115,230, 65);
			rect(200, 50, 150, 150, 0, 20, 0, 0);
			fill(0,115,230, 65);
			triangle(50,200,200,200,200,400);
			fill(145,215,255, 65);
			triangle(200,200,350,200,200,400);

			textAlign(CENTER, CENTER);
			textSize(25);
			fill(255);
			text('You are in Ravenclaw!', width/2, 450);

			image(img3, width/5.5, height/5, img.width/3, img.height/3);
			}

			else if (myHouse == hufflepuff) {
			fill(160, 65);
			rect(50, 50, 150, 150, 20, 0, 0, 0);
			fill(255, 240, 15, 65);
			rect(200, 50, 150, 150, 0, 20, 0, 0);
			fill(255, 240, 15, 65);
			triangle(50,200,200,200,200,400);
			fill(160, 65);
			triangle(200,200,350,200,200,400);

			textAlign(CENTER, CENTER);
			textSize(25);
			fill(255);
			text('You are in HufflePuff!', width/2, 450);

			image(img4, width/5.5, height/5, img.width/3, img.height/3);
			}

}

function randomColor(){
  let r = random (0,255);
  let g = random (0,255);
  let b = random (0,255);
  background(r,b,g);
}

function mousePressed(){
	randomColor();
}
function myCallback(result){
	newHouse = result != myHouse;
	myHouse = result;
	draw();
	console.log(result);
	console.log(typeof result);
	console.log(result.response);
}


