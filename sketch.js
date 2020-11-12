

function setup() {
  createCanvas(600,400);

  fixedRect =  createSprite(200,10,50,80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,80,30)
  movingRect.shapeColor = "green";

  fixedRect.debug = true;
  movingRect.debug = true;

  fixedRect.velocityY = 2;
  movingRect.velocityX = -2;
}

function draw() {
  background("black");

  console.log((movingRect.width + fixedRect.width)/2);
  console.log(movingRect.x - fixedRect.x);

  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x); 
  if(bounceOff(movingRect,fixedRect)){
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
    movingRect.velocityY = movingRect.velocityY * (-1);
  }
  
  

  drawSprites();
}


