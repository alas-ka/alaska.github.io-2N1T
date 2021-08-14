function setup() {
  createCanvas(1280,575);
}

function draw() {
    textSize(40);
    var dob = "2N1T";
    var dqt = dob + "!!!";
    text(dqt,mouseX+40,mouseY);
  if (mouseIsPressed) {
    fill(255,0,127);
    stroke (0,0,0);
    strokeWeight(5);
  } else {
    fill(255);
    stroke (255,0,224);
    strokeWeight(1);
  }
  ellipse(mouseX, mouseY, 80, 80,);
  hex(mouseX, mouseY,80,80,);
}
