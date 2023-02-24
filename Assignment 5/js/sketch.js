let sounds = new Tone.Players({

  "bird call" : "sounds/birdcall.mp3",
  "cat purr" : "sounds/catpurr.mp3",
  "game start" : "sounds/gamestart.mp3",
  "chopping wood" : "sounds/woodchop.mp3",
  "walking on grass" : "sounds/walkgrass.mp3"

});

const delay = new Tone.FeedbackDelay("8n", 0.5);

let soundNames = ["bird call", "cat purr", "game start", "chopping wood", "walking on grass"];
let buttons = [];

let dSlider;
let pSlider;

function setup() {
  createCanvas(400, 400);
  sounds.connect(delay);
  delay.toDestination();

  soundNames.forEach((word, index) => {
    buttons[index] = createButton(word);
    buttons[index].position(165, 100 + index*50);
    buttons[index].mousePressed( () => buttonSound(word))
  })

  dSlider = createSlider(0, 1, 0.5, 0.05);
  dSlider.mouseReleased( () => {
    delay.delayTime.value = dSlider.value();
  })

  pSlider = createSlider(0, 1, 0.5, 0.05);
  pSlider.mouseReleased( () => {
    delay.feedback.value = pSlider.value();
  })

}

function draw() {
  background(random(255),random(255),random(255));
  frameRate(.5);
  textAlign(CENTER);
  fill(255);
  textSize(25);
  stroke(0);
  strokeWeight(3);
  text("Press buttons to play sound.", 200, 50);
  text("Delay", 65, 390);
  text("Feedback", 195, 390);
}

function buttonSound(whichSound){
  sounds.player(whichSound).start();
}