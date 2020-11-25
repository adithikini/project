var fixedrect,movingrect;
var rect3;


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="green";
  movingrect=createSprite(600,200,50,50);
  movingrect.shapeColor="green";
  rect3=createSprite(100,100,30,30);
  rect3.shapeColor="black";
}

function draw() {
  background("white");  
  
  movingrect.x=mouseX;
  movingrect.y=mouseY;

  if(touching(movingrect,fixedrect)){
    movingrect.shapeColor="orange";
    fixedrect.shapeColor="orange";
  }
 else if(touching(movingrect,rect3)){
      background("blue");
  }
else {
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
  background("white");
}
  drawSprites();
}

function touching(object1,object2){
  if(object1.x-object2.x <=(object1.width/2+object2.width/2)&& 
object2.x-object1.x <= (object1.width/2 + object2.width/2)&&
  object1.y-object2.y <= (object1.height/2 + object2.height/2)&&
  object2.y-object1.y <= (object1.height/2 + object2.height/2)
){
  return true;
}
else{
  return false;
}
}