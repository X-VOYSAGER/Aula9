var box;
function setup() {
  createCanvas(400,400);
box= createSprite (120, 40, 30, 30)
}

function draw() 
{
  background(30);
if (keyDown (RIGHT_ARROW)) 
{ box.position.x = box.position.x +1; 
}
if (keyDown (UP_ARROW))
{box.position.y = box.position.y -1}
if (keyDown (DOWN_ARROW))
{box.position.y = box.position.y +1}
if (keyDown (LEFT_ARROW))
{box.position.x = box.position.x -1}
drawSprites ();
}




