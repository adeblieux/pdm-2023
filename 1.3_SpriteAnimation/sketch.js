var guy = [];
var green = [];
var robot = [];
var count = 10;

function preload(){
	for (var i = 0; i < count; i++){
    guy[i] = new avatar("Guy.png", 300, 200);
		green[i] = new avatar("Green.png", 400, 200);
		robot[i] = new avatar("Robot.png", 500, 200);
	}
}


function setup() {
	createCanvas(850, 450);
	imageMode(CENTER);
}

function draw(){
	background(0, 128, 0);

	for (var i = 0; i < count; i++){
		guy[i].draw();
		green[i].draw();
		robot[i].draw();
	}
}

function keyPressed(){
	if (keyCode === RIGHT_ARROW){
		for (var i = 0; i < count; i++){
			guy[i].go(+1);
			green[i].go(+1);
			robot[i].go(+1);
		}
	}
	if (keyCode === LEFT_ARROW){
		for (var i = 0; i < count; i++){
			guy[i].go(-1);
			green[i].go(-1);
			robot[i].go(-1);
		}
	}
}

function keyReleased(){
	if (keyCode === RIGHT_ARROW){
		for (var i = 0; i < count; i++){
			guy[i].stop();
			green[i].stop();
			robot[i].stop();
		}
	}
	if (keyCode === LEFT_ARROW){
		for (var i = 0; i < count; i++){
			guy[i].stop();
			green[i].stop();
			robot[i].stop();
		}
	}
}

function avatar(imageName, x, y){
	this.spritesheet = loadImage(imageName);
	this.frame = 0;
	this.x = x;
	this.y = y;
	this.moving = 0;
	this.facing = 0;

	this.draw = function() {
		  
		  push();
		  translate(this.x, this.y);
		  if (this.facing < 0){
		  	scale(-1.0, 1.0);
		  }
		  
		  if (this.moving == 0){
		  	image(this.spritesheet, 0, 0, 80, 80, 0, 0, 80, 80);
		  }
		  else{
        if (this.frame == 0)
          image(this.spritesheet, 0, 0, 80, 80, 80, 0, 80, 80);
        if (this.frame == 1)
          image(this.spritesheet, 0, 0, 80, 80, 160, 0, 80, 80);
        if (this.frame == 2)
          image(this.spritesheet, 0, 0, 80, 80, 240, 0, 80, 80);
        if (this.frame == 3)
          image(this.spritesheet, 0, 0, 80, 80, 320, 0, 80, 80);
        if (this.frame == 4)
          image(this.spritesheet, 0, 0, 80, 80, 400, 0, 80, 80);
        if (this.frame == 5)
          image(this.spritesheet, 0, 0, 80, 80, 480, 0, 80, 80);
        if (this.frame == 6)
          image(this.spritesheet, 0, 0, 80, 80, 560, 0, 80, 80);
        if (this.frame == 7)
          image(this.spritesheet, 0, 0, 80, 80, 640, 0, 80, 80);
		 	 }
		  if (frameCount % 4 == 0){
			  this.frame = (this.frame + 1) % 8;
			  this.x = this.x + 6 * this.moving;
		  }
		  pop();
	}

	this.stop = function(){
		this.moving = 0;
		this.frame = 3;
	}

	this.go = function(direction){
		this.moving = direction;
		this.facing = direction;
	}
}