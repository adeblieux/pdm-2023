let slider;

const synth = new Tone.PluckSynth();
const drum = new Tone.MembraneSynth();
const metal = new Tone.MetalSynth({
  "frequency"  : 45 ,
	"envelope"  : {
		"attack"  : 0.001 ,
		"decay"  : 0.4 ,
		"release"  : 0.02
	}  ,
	"harmonicity"  : 8.5 ,
	"modulationIndex"  : 40 ,
	"resonance"  : 300 ,
	"octaves"  : 1
});
const reverb = new Tone.JCReverb(0.4).toDestination();
synth.connect(reverb);
drum.connect(reverb);
metal.connect(reverb);


const {PingPongDelay} = ("tone");
const pingPong = new Tone.PingPongDelay().toDestination (
  {
    "delayTime": "4n",
    "feedback": 0.2,
    "wet": 0.5
  }
);
synth.connect(pingPong);
metal.connect(reverb);

const ampEnv = new Tone.AmplitudeEnvelope({
  attack: 0.5,
  decay: 0.6,
  sustain: 0.3,
  release: 0.2
})

let notes = {
  '1': 'A4',
  '2': 'B4',
  '3': 'C4',
  '4': 'D4',
  '5': 'E4',
  '6': 'F4',
  '7': 'G4',
  '8': 'A5'
}

function setup() {
  createCanvas(400, 400);

  slider = new Nexus.Slider('#slider');
  
  synth.release = 2;
  synth.resonance = 0.98;

  slider.on('change', ()=> {
    pingPong.delayTime.value = slider.value;
  })
  reverb.toDestination();
}

function draw() {
  background(220);
}

function keyPressed() {
  let toPlay = notes[key];
  console.log(toPlay);

  synth.triggerAttackRelease(toPlay, 0.5);
  drum.triggerAttackRelease("A6", "8n", '+.25');
  // metal.triggerAttackRelease("A1", "8n");
}