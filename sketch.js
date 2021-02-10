var car;
var wall;
var speed, weight;

function setup() {
  createCanvas(1500,800);
  wall = createSprite(1050, 500, 30, 1000);
  car = createSprite(70, 500, 80,40);
  console.log("Speed",speed);
  console.log("Weight",weight);  
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  car.shapeColor = "pink";
  wall.shapeColor = "white;"
}

function draw() {
  background(0);
  car.velocityX = 15;
  
  if (wall.x - car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;
    console.log("Deformation",deformation);
    if (deformation > 100){
      car.shapeColor = "green";
    }
    if (deformation > 100 && deformation < 180){
      car.shapeColor = "yellow";
    }
    if (deformation > 180){
      car.shapeColor = "red";
    }
  }
  drawSprites();
}