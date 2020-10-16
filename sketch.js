var fixedRect,movingRect
function setup() {
  createCanvas(1000,800);
  fixedRect=createSprite(400, 200, 50, 100);
  movingRect=createSprite(200,400,100,50)
fixedRect.shapeColor="green"
movingRect.shapeColor="green"
fixedRect.debug=true
movingRect.debug=true
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  if (movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor="red"
    movingRect.shapeColor="blue"
  }
  else{
    fixedRect.shapeColor="green"
    movingRect.shapeColor="green"
  }
  drawSprites();

}