var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){

  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");

  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  red_balloonImage = loadImage("red_balloon0.png");

}



function setup() {
  createCanvas(400, 400);
  
  //criando fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  //criando arco para atirar flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  score = 0
}

function draw() {
 background(0);

  //movendo chão
  scene.velocityX = -3 

  if (scene.x < 0){
    scene.x = scene.width/2;
  }
  
 // movendo flecha 

 bow.y = World.mouseY
  
 //soltar flecha quando barra de espaço é pressionada

  if (keyDown("space")) {
    createArrow();
    
  }
 

  spawnBallon ();
  drawSprites();
  fill ("black");
  text("Tempo de jogo: "+ score + " s", 10,10);

  if (frameCount % 1 == 0){
    score = score + 1;
  }

}

//Criando flechas para arco
 
function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4; 
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function spawnBallon() {

  var rand = Math.round(random(1,4));

  var ballon;

  if (World.frameCount % 100 == 0) { 

    ballon = createSprite(10,Math.round(random(20, 370)), 10, 10);
    ballon.velocityX = 3;
    ballon.lifetime = 150;
    ballon.scale = 0.1;
    switch (rand){

      case 1: ballon.addImage (red_balloonImage);
      break;

      case 2: ballon.addImage (green_balloonImage);
      break;

      case 3: ballon.addImage (blue_balloonImage);
      break;

      case 4: ballon.addImage (pink_balloonImage);
      break;
      default: break;

    }
  }

}