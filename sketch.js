var wall,bulllet,speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80,80,80);
  bullet = createSprite(0,200,50,50);

  

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  
}  

function draw() {
  background(255,255,255);
  
  bullet.velocityX = speed;

  if(bullet.isTouching(wall)){
     bullet.velocityX = 0;

     if(thickness <= 45){
        bullet.shapeColor = "green";
     }

     if(thickness > 45){
      bullet.shapeColor = "red";
   }

} 
  

  drawSprites();


}
