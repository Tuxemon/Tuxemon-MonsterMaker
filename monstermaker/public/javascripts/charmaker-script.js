/*
credits
"function loadImages" and some other parts are taken from the following site:
http://www.html5canvastutorials.com/tutorials/html5-canvas-image-loader/
*/

// set all "selected variable" for all types of sprites/parts
var base_sel="none";
var clothes_sel="none";
var beard_sel="none";
var eyes_sel="none";
var hair_sel="none";
var hat_sel="none";

// the following functions switch the above variables (aka change what's selected)
function switchBase(s){
	base_sel=s;
	drawImg();
}
function switchClothes(s){
	clothes_sel=s;
	drawImg();
}
function switchBeard(s){
	beard_sel=s;
	drawImg();
}
function switchEyes(s){
	eyes_sel=s;
	drawImg();
}
function switchHair(s){
	hair_sel=s;
	drawImg();
}
function switchHat(s){
	hat_sel=s;
	drawImg();
}

function loadImages(sources, callback) {
	var images = {};
	var loadedImages = 0;
	var numImages = 0;
	// get num of sources
	for(var src in sources) {
		numImages++;
	}
	for(var src in sources) {
		images[src] = new Image();
		images[src].onload = function() {
			if(++loadedImages >= numImages) {
			callback(images);
			}
		};	
		images[src].src = sources[src];
	}
}
// the canvas we will be drawing on
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

// all spritesheets which are selectable
var sources = {
	base_1_1: 'sprites/spritesheet/base_1_1.png',
	base_1_2: 'sprites/spritesheet/base_1_2.png',
	base_1_3: 'sprites/spritesheet/base_1_3.png',
	base_1_4: 'sprites/spritesheet/base_1_4.png',
	clothes_1_1: 'sprites/spritesheet/clothes_1_1.png',
	clothes_2_1: 'sprites/spritesheet/clothes_2_1.png',
	beard_1_1: 'sprites/spritesheet/beard_1_1.png',
	beard_1_2: 'sprites/spritesheet/beard_1_2.png',
	eyes_1_1: 'sprites/spritesheet/eyes_1_1.png',
	eyes_1_2: 'sprites/spritesheet/eyes_1_2.png',
	eyes_2_1: 'sprites/spritesheet/eyes_2_1.png',
	eyes_3_1: 'sprites/spritesheet/eyes_3_1.png',
	hair_1_1: 'sprites/spritesheet/hair_1_1.png',
	hair_1_2: 'sprites/spritesheet/hair_1_2.png',
	hair_2_1: 'sprites/spritesheet/hair_2_1.png',
	hat_1_1: 'sprites/spritesheet/hat_1_1.png',
	hat_2_1: 'sprites/spritesheet/hat_2_1.png',
	hat_3_1: 'sprites/spritesheet/hat_3_1.png',
	hat_3_2: 'sprites/spritesheet/hat_3_2.png',
	hat_4_1: 'sprites/spritesheet/hat_4_1.png',
	hat_5_1: 'sprites/spritesheet/hat_5_1.png',
	hat_6_1: 'sprites/spritesheet/hat_6_1.png',
	hat_7_1: 'sprites/spritesheet/hat_7_1.png'
};

// draw the images depending on selection
function drawImg(){
	loadImages(sources, function(images) {
		// clear canvas
		context.clearRect(0, 0, canvas.width, canvas.height);
		// draw the base/body
		switch(base_sel){
			case "base_1_1":
				context.drawImage(images.base_1_1, 0, 0);
				break;
			case "base_1_2":
				context.drawImage(images.base_1_2, 0, 0);
				break;
			case "base_1_3":
				context.drawImage(images.base_1_3, 0, 0);
				break;
			case "base_1_4":
				context.drawImage(images.base_1_4, 0, 0);
				break;
		};
		// draw the clothes
		switch(clothes_sel){
			case "clothes_1_1":
				context.drawImage(images.clothes_1_1, 0, 0);
				break;
			case "clothes_2_1":
				context.drawImage(images.clothes_2_1, 0, 0);
				break;
		};
		// beard/facial hair
		switch(beard_sel){
			case "beard_1_1":
				context.drawImage(images.beard_1_1, 0, 0);
				break;
			case "beard_1_2":
				context.drawImage(images.beard_1_2, 0, 0);
				break;
		};
		// eyes
		switch(eyes_sel){
			case "eyes_1_1":
				context.drawImage(images.eyes_1_1, 0, 0);
				break;
			case "eyes_1_2":
				context.drawImage(images.eyes_1_2, 0, 0);
				break;
			case "eyes_2_1":
				context.drawImage(images.eyes_2_1, 0, 0);
				break;
			case "eyes_3_1":
				context.drawImage(images.eyes_3_1, 0, 0);
				break;
		};
		// hair
		switch(hair_sel){
			case "hair_1_1":
				context.drawImage(images.hair_1_1, 0, 0);
				break;
			case "hair_1_2":
				context.drawImage(images.hair_1_2, 0, 0);
				break;
			case "hair_2_1":
				context.drawImage(images.hair_2_1, 0, 0);
				break;
		};
		// hat
		switch(hat_sel){
			case "hat_1_1":
				context.drawImage(images.hat_1_1, 0, 0);
				break;
			case "hat_2_1":
				context.drawImage(images.hat_2_1, 0, 0);
				break;
			case "hat_3_1":
				context.drawImage(images.hat_3_1, 0, 0);
				break;
			case "hat_3_2":
				context.drawImage(images.hat_3_2, 0, 0);
				break;
			case "hat_4_1":
				context.drawImage(images.hat_4_1, 0, 0);
				break;
			case "hat_5_1":
				context.drawImage(images.hat_5_1, 0, 0);
				break;
			case "hat_6_1":
				context.drawImage(images.hat_6_1, 0, 0);
				break;
			case "hat_7_1":
				context.drawImage(images.hat_7_1, 0, 0);
				break;
		};
	});
}