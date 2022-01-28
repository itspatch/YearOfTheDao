var font;
var clock;
var sampleFactor = 0.15;
let vehicles = [];
let bg;

function preload() {
    // font = loadFont("fonts/AvenirNextLTPro-Demi.otf");
    // font = loadFont("fonts/BreeSerif-Regular.ttf");
    font = loadFont("fonts/Rokkitt-Bold.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = loadImage('assets/bg.jpg');
  background(bg);
  console.log(windowHeight);

  var points = font.textToPoints('Year of The DAO', windowWidth*120/1440, windowHeight*380/796, windowWidth*160/1440, {
    sampleFactor: 0.12
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
}

function draw() {
  background(bg);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}
