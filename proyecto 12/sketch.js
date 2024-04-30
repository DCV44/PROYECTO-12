var path,boyAnimation, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyAnimation = loadAnimation("Jake1.png","jake2.png","jake3.png","jake4.png");
 
}

function setup(){
  createCanvas(400,400);

path = createSprite(200,200);
path.addImage(pathImg);
path.velocityY= 2;
path.scale=1.2;

boy = createSprite(200,300,90,20)
boy.addAnimation("rruning",boyAnimation);
boy.scale=0.9;
  

leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
leftBoundary.visible = false;


//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
rightBoundary.visible = false;
}

function draw() {
  background(0); 

  path.velocityY = 4;
  

  boy.addAnimation(boyAnimation);
  // boy moviéndose en el eje X con el mouse
  boy.x=World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
