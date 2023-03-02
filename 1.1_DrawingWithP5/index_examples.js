////Example 1
var example1 = function(p) {
  p.setup = function() {
    const ex1 = p.createCanvas(200,100);
    ex1.parent("ex1");
  }

  p.draw = function() {
    p.clear();
    p.background('rgb(0,255,0)');
    p.ellipse(50,50,80)
    p.rect(110,10,80,80)
  }
}

//Example 2
var example2 = function(p) {
  p.setup = function() {
    const ex2 = p.createCanvas(200,200);
    ex2.parent("ex2");
  }

  p.draw = function() {
    p.clear();
    p.background(500);
    p.noStroke();

    p.fill(255,0,0,80);
    p.ellipse(100,70,100);

    p.fill(0,0,255,80);
    p.ellipse(70,125,100);

    p.fill(0,255,0,80)
    p.ellipse(135,125,100);
  }
}

//Example 3
var example3 = function(p) {
  p.setup = function() {
    const ex3 = p.createCanvas(200,100);
    ex3.parent("ex3");
  }

  p.draw = function() {
    p.clear();
    p.background(0);
    p.noStroke();

    p.fill(255,225,0);
    p.ellipse(50,50,80);

    p.fill(0,0,0);
    p. triangle(0,0, 0, 100, 50,50)

    p.fill(180,0,0);
    p.ellipse(150,50,80,80);
    p.rect(110,50,80,40);

    p.fill(225,225,225);
    p.ellipse(130,50,25,25);
    p.ellipse(170,50,25,25);

    p.fill(0,0,225);
    p.ellipse(130,50,15,15);
    p.ellipse(170,50,15,15);
  }
}

//Example 4
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

var example4 = function() {
  setup = function() {
    const ex4 = createCanvas(200,200);
    ex4.parent("ex4");
  }

  draw = function() {
    background(0,0,129);

    fill(0,128,0);
    stroke(225);
    strokeWeight(4);
    ellipse(100,100,100);

    fill(225,0,0);
    stroke(225);
    strokeWeight(4); 
    rotate(49.98);
    star(67,125,20,55,5);
  }
}

var myex1 = new p5(example1);
var myex2 = new p5(example2);
var myex3 = new p5(example3);
var myex4 = new p5(example4);