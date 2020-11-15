var car, wall;
var line1, line2, line3;
var speed, weight;

function setup() {
  createCanvas(1600, 800);

  speed=random(55, 90);
  weight=random(400.1500)

  //creating a car
  car = createSprite(50, 200, 50, 50);
  car.velocityX=speed;

  //creating a wall
  wall = createSprite(1500, 200, 50, height/2);

  line1 = createSprite(10, 250, 2000, hieght/2);

   //creating a car
   car= createSprite(50, 300, 50, 50);
   car.velocityX=speed;
 
   //creating a wall
   wall = createSprite(1500, 400, 50, height/2);
 
   line2 = createSprite(10, 450, 2000, hieght/2);
  
    //creating a car
   car= createSprite(50, 500, 50, 50);
   car.velocityX=speed;

  wall = createSprite(1500, 600, 50, height/2);
  
  line3 = createSprite(10, 650, 2000, hieght/2);
  
}
}

function draw() {
  background(255,255,255);

  textSize(25)
  Text("GCSO car tests", 100, 700);

  if(wall.x - car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
  var deformation=0.5* speed* weight* speed/22509
if(deformation > 180)
 {
   car.shapeColor = color(255, 0, 0);
 }
 if(deformation < 180 && deformation > 100)
{
  car.shapeColor = color(230,230,0);
}
if(deformation<100)
{
  car.shapeColor = color(0,255,0);
}
}
  
  
  drawSprites();

}
