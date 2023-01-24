function setup() {
    createCanvas(200,200);
  }
  
  function draw() {
    background(500);
    noStroke();

    fill(255,0,0,80);
    ellipse(100,70,100);

    fill(0,0,255,80);
    ellipse(70,125,100);

    fill(0,255,0,80)
    ellipse(135,125,100);
  }