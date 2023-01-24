function setup() {
    createCanvas(200,100);
  }
  
  function draw() {
    background(0);
    noStroke();

    fill(255,225,0);
    ellipse(50,50,80);

    fill(0,0,0);
    triangle(0,0, 0, 100, 50,50)

    fill(180,0,0);
    ellipse(150,50,80,80);
    rect(110,50,80,40);

    fill(225,225,225);
    ellipse(130,50,25,25);
    ellipse(170,50,25,25);

    fill(0,0,225);
    ellipse(130,50,15,15);
    ellipse(170,50,15,15);
  }