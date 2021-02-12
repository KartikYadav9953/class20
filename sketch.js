function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50)
  rect2 = createSprite(400,200,50,50)
}

function draw() {
  background("yellow");  

rect1.x = World.mouseX
rect1.y = World.mouseY

touching();

  drawSprites();
}

function touching() {

  if(rect1.y-rect2.y <= rect1.height/2 + rect2.height/2 && rect2.y-rect1.y <= rect1.height/2 + rect2.height/2 
    && rect1.x-rect2.x <= rect1.width/2 + rect2.width/2 && rect2.x-rect1.x <= rect1.width/2 + rect2.width/2) {
  
    rect1.shapeColor = "blue"
    rect2.shapeColor = "blue"
  
  
  
  }else {
  
  rect1.shapeColor = "black"
  rect2.shapeColor = "black"
  
  }
  




}


