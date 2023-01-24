function setup() {
    createCanvas(200,200);
  }
  
  function draw() {
    background(0,0,129);

    fill(0,128,0);
    stroke(225);
    strokeWeight(4);
    ellipse(100,100,100);

    fill(225,0,0);
    stroke(225);
    strokeWeight(4); 
    rotate(49.98)
    star(67,125,20,55,5)
}

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