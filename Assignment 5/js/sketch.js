let sounds = new Tone.Players({

  "bird call": "sounds/bird_call.mp3",
  "cat purring": "sounds/cat_purr.mp3",
  "game start": "sounds/game-start.mp3",
  "walking on grass": "sounds/grass_walking.mp3",
  "wood chopping": "sounds/woodchopping.mp3"

})

const delay = new Tone.FeedbackDelay("8n", 0.5);

let soundNames = ["bird call", "cat purring", "game start", "walking on grass", "wood chopping"];
let buttons = [];

let dSlider;
let fSlider;

function setup() {
  createCanvas(400, 400);
  sounds.connect(delay);
  delay.toDestination();

  soundNames.forEach((word, index) => {
    buttons[index] = createButton(word);
    buttons[index].position(160, 80 + index*50);
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
  textSize(30);
  textFont("Times New Roman");
  stroke(3);
  strokeWeight(3);
  text("Press buttons to play sound.", 200, 50);
  text("Delay", 65, 390);
  text("Feedback", 200, 390);

}

function buttonSound(whichSound){
  sounds.player(whichSound).start();
}