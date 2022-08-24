
 var PLAY=1
 var END=0
gameState = PLAY

var bow , arrow,  background, redGroup, pinkGroup, greenGroup ,blueGroup ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var boundary1
var score;
function preload(){
  
  backgroundImage = loadImage("background0.png");

  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
 boundary1 = createSprite(400,0,10,800);
boundary1.visible = false
  arrowGroup= new Group();

console.log("Óla" + 5)

  
  redGroup = new Group();
  blueGroup = new Group();
  greenGroup = new Group();
  pinkGroup = new Group();
 score = 0
}

function draw() {
 background(0);
 text("Pontuação:"+ score,0,0);
 
 if(gameState === PLAY){
  bow.y = World.mouseY
  var select_balloon = Math.round(random(1,4));
  scene.velocityX = -3 
    if (scene.x < 0){
      scene.x = scene.width/2;
    }
    if (keyDown("space")) {
      createArrow();
      
    }
    if(redGroup.isTouching(boundary1)){
      gameState = END
    }
    if(greenGroup.isTouching(boundary1)){
      gameState = END
    }
    if(blueGroup.isTouching(boundary1)){
      gameState = END
    }
    if(pinkGroup.isTouching(boundary1)){
      gameState = END
    }
 }
  
  if (World.frameCount % 100 == 0) {
    switch(select_balloon ){
      case 1: redBalloon();
      break;
      case 2:blueBalloon();
      break;
      case 3:pinkBalloon();
      break;
      case 4:greenBalloon();
      break;
      default:break;
    }
  }

  if (arrowGroup.isTouching(redGroup)) {
    redGroup.destroyEach();
    score = score +1
}
if (arrowGroup.isTouching(pinkGroup)) {
  pinkGroup.destroyEach();
  score = score +1
}
if (arrowGroup.isTouching(greenGroup)) {
  greenGroup.destroyEach();
  score = score +1
}
if (arrowGroup.isTouching(blueGroup)) {
  blueGroup.destroyEach();
  score = score +1
}


if(gameState===END){
scene.velocityX = 0;
bow.destroy();
arrowGroup.destroyEach();

}
 

  
  drawSprites();

}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redGroup.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueGroup.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
 greenGroup.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.2
  pinkGroup.add(pink);
}

// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);

}
