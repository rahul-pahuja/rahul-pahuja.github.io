/* We should ignore no-used-vars since this is a p5.js sketch */
/* eslint-disable no-unused-vars */

let xSize;
let ySize;
let noiseX = 0.1;
let noisePos = 0.1;
let sz = 10;
var siz = 20;
let weight = 2;
let pg;

function setup() {
  frameRate(10);
  const width = document.getElementById("canvasDiv").clientWidth;
  const myCanvas = createCanvas(300, 50);
  myCanvas.parent("canvasDiv");
  strokeCap(ROUND);
  xSize = windowWidth;
  ySize = windowHeight;
  createTile();
}

const colors = [
  "#ffadad",
  "#ffd6a5",
  "#fdffb6",
  "#caffbf",
  "#9bf6ff",
  "#a0c4ff",
  "#bdb2ff",
  "#ffc6ff",
];

function createTile() {
  pg = createGraphics(siz - 10, siz - 10);
  pg.noFill();
  //pg.stroke('255');
  pg.noStroke();
  pg.strokeWeight(weight * 0.7);
  pg.strokeCap(ROUND);
  pg.square(0, 0, pg.height);

  pg.strokeWeight(weight);
  pg.stroke(random(["#ff88df", "#b4aaff", "#b4aaff50", "#ec478080"]));
  pg.arc(0, 0, pg.width, pg.height, 0, PI / 2);
  pg.arc(pg.width, pg.height, pg.width, pg.height, PI, PI + PI / 2);

  imageMode(CENTER, CENTER);
  return pg;
}

function draw() {
  clear();
  noLoop();
  background("#ff88df20");
  let xMargin = xSize * 0.01;
  let yMargin = ySize * 0.01;
  let scale = 0.0009 * windowWidth;

  let row = 0;
  for (let x = 0; x < xSize - xMargin; x += sz) {
    let offset = map(noise(noiseX), 0, 1, 5, 20);
    row++;

    for (let y = 0; y <= ySize - xMargin; y += sz) {
      let opacity = map(y, 0, ySize - xMargin, 0.1, 0.6);
      const colors = ["#2b2135", "#b4aaff", "#fbf4ff", "#bdb2ff"];

      noStroke();

      push();
      translate(x, y);
      var angle = (TWO_PI * int(random(1, 5))) / 4;
      rotate(angle);
      let variation = random(1);
      //  tint(tintColor);
      if (pg) {
        image(pg, 0, 0);
      }
      pop();

      const xOffset = map(noise(noisePos + y), 0, 1, -25, 25);
      noisePos += 0.00001;
    }

    noiseX += 0.001;
  }

  //clear(); // clear canvas of elements from previous draw
}

function keyPressed() {
  const SPACEBAR = " ";
  // pause/play animation when spacebar is pressed for sketches that animate from draw to draw
  if (key == SPACEBAR) {
    isLooping() ? noLoop() : loop();
  }

  if (key === "g") {
    saveGif("canvas", 5);
  }
  if (key === "s") {
    saveCanvas("canvas");
  }
}
