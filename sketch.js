var fixedRect,movingRect;

function setup(){
  createCanvas(1200,800);
  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor= "blue";
  fixedRect.debug=true;
  movingRect=createSprite(400,200,80,30,);
  movingRect.shapeColor= "blue";
  movingRect.debug=true;

}

function draw(){
  background("green");
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x===fixedRect.width/2+movingRect.width/2){
    movingRect.shapeColor= "lightblue";
    fixedRect.shapeColor= "lightblue";
  }
  else{
    movingRect.shapeColor= "blue";
    fixedRect.shapeColor= "blue";
  }
  drawSprites();
}