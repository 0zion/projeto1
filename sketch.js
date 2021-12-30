var bola1
function setup() {
  createCanvas(400,400);
  bola1=createSprite(200,200,15,15)
}

function draw() 
{
  background(30);
drawSprites()
if (keyDown("right_arrow")){
  bola1.position.x+=5
}
if (keyDown("left_arrow")){
  bola1.position.x-=5
}
}




