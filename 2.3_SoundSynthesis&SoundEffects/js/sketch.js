var bomb, boom2, synth, reverb, chorus, autowah, bgm;
var textInfo = "Click the mouse button for explosion.";

function preload(){
	bomb = loadImage('assets/bomb.jpg')
  boom = loadImage('assets/boom.png')
  white = loadImage('assets/white.jpg');
}

function setup(){
	createCanvas(800,640);
  image(bomb,90,0)
  
  synth = new Tone.MembraneSynth({
    pitchDecay: 0.05,
    envelope: {
      attack: 0.001, 
      decay: 0.1, 
      sustain: 0, 
      release: 0.2 
    }
  }).toDestination();
  
  reverb = new Tone.Reverb({
    decay: .05,
    wet: 0.5
  }).toDestination();

  chorus = new Tone.Chorus({
    frequency: 1,
    delayTime: 2.5,
    wet: 0.5
  }).toDestination();

  autowah = new Tone.AutoWah({
    octaves: 1,
    Q: 9,
    wet: 0.3
  }).toDestination();

  synth.connect(reverb).connect(chorus).connect(autowah);
  
  bgm = new Tone.Player({
	  url: "assets/boom_sound.mp3",
	  loop: true,
	  autostart: true,
	  onload: function() {
	    console.log("bgm loaded");
	  },
	  onerror: function() {
	    console.log("bgm error");
	  }
	}).toDestination();
}

function draw(){
	textSize(24);
  textAlign(CENTER);
	text(textInfo,width/2,30);
}

function mousePressed(){
	image(boom,0,0);
	boomSound();
}

function mouseReleased(){
  image(white,0,0);
	image(bomb,90,0);
}

function boomSound(){
  synth.envelope.attack = 0.001 + Math.random() * 0.01;  
  synth.envelope.release = 0.2 + Math.random() * 0.1;
  synth.triggerAttackRelease("C1", "8n");
}