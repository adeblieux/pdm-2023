let serial;
let portName = "/dev/tty.usbmodem14101";
let bkg = 0;
let x=200;
let y=300;
let values = [];

function setup() {
  createCanvas(500,500);
  serial = new p5.SerialPort();

  let portlist = serial.list();

  serial.open(portName);

  serial.on('connected', serverConnected);

  serial.on('list', gotList);

  serial.on('data', gotData);

 
  serial.on('error', gotError);


  serial.on('open', gotOpen);
}


function serverConnected() {
    print("We are connected!");
}

function gotList(thelist) {
  for (let i = 0; i < thelist.length; i++) {
    // Display in the console
    print(i + " " + thelist[i]);
  }
}


function gotOpen() {
  print("Serial Port is open!");
}


function gotError(theerror) {
  print(theerror);
}

function gotData() {
  let currentString = serial.readStringUntil("\r\n");
  console.log(currentString);
  currentString = trim(currentString);
  values = split(currentString, ',');
  

  x = int(values[0]);
  y = int(values[1]);
  
  
}

function draw() {
  

  background(220);
  fill(0);
  rect(25, 25, 50, 50);
}