var background,player1,arcade,arcade2
var gamestate="bcoll"



function preload(){
   player1image=loadAnimation("sprites/mariostanding.png")
    backgroundimage=loadImage("sprites/background.jpg")
     player1image2=loadAnimation("sprites/marioimage.png")
     carimage=loadAnimation("sprites/car.png")
     heartimage=loadImage("sprites/heart.png")
     trophyimage=loadImage("sprites/trophy.png")
     stoneimage=loadImage("sprites/stone.png")
     fireimage=loadImage("sprites/fire.png")
     policeconesimage=loadImage("sprites/policecones.png")
     arcadeimage=loadImage("sprites/arcade.png")
     yesimage=loadImage("sprites/yes mage.png")
     textimage=loadImage("sprites/my game text.png")
  }


function setup(){
canvas=createCanvas(1000,600)
score=5
points=0



textSize(20)


background1=createSprite(500,400,2000,800)
background1.addImage(backgroundimage)
background1.velocityX=-5
background1.scale=2.8

ground=createSprite(500,410,1000,10)
ground.shapeColor="pink"

ground2=createSprite(500,790,1000,10)
ground2.shapeColor="pink"
ground2.visible=false

player1=createSprite(100,380,30,40)
player1.addAnimation("mario",player1image)
player1.addAnimation("mariorunning",player1image2)
player1.scale=0.1

lifeplayer1=createSprite(100,80,10,10)
lifeplayer1.addImage("heart",heartimage)
lifeplayer1.scale=0.1

awardplayer1=createSprite(600,80,10,10)
awardplayer1.addImage("award",trophyimage)
awardplayer1.scale=0.1

obstaclegroup=new Group();
obstaclegroup2=new Group();
arcadegroup=new Group();
arcadegroup12=new Group();
arcadegroup3=new Group();

arcade=createSprite(1000,350);
arcade.addImage("arcade1",arcadeimage)
arcade.scale=0.5
arcade.velocityX= -3
arcade.lifetime = 1500
arcadegroup.add(arcade)

arcade12=createSprite(2500,350);
arcade12.addImage("arcade1",arcadeimage)
arcade12.scale=0.5
arcade12.velocityX= -3
arcade12.lifetime = 1500
arcadegroup12.add(arcade12)

arcade3=createSprite(3500,350);
arcade3.addImage("arcade1",arcadeimage)
arcade3.scale=0.5
arcade3.velocityX= -3
arcade3.lifetime = 1500
arcadegroup3.add(arcade3)

text2=createSprite(500,300,30,40)
text2.addAnimation("car",textimage)
   
yes=createSprite(400,300,30,40)
yes.addAnimation("car",yesimage)

yes.visible=false
text2.visible=false
}



function draw(){

   

background("black")

if(background1.x<0 ){
  background1.x=background1.width/2
}



if (gamestate==="bcoll"){
  
   
    var select_balloon = Math.round(random(1, 3));
  if (World.frameCount % 200 === 0) {
    if (select_balloon === 1) {
      stone();

    } else if (select_balloon === 2) {
      fire();
    } else if (select_balloon === 3) {
      policecones();
    }
  }
 
  if (World.frameCount % 1250 == 0) {
heart();
  }
 

   var select_balloon = Math.round(random(1, 3));
   if (World.frameCount % 200 == 0) {
     if (select_balloon == 1) {
       stone();
 
     } else if (select_balloon == 2) {
       fire();
     } else if (select_balloon == 3) {
       policecones();
     }
   }
 
  
 
 
   if(keyDown("space")) {
    player1.velocityY = -5;
 }
 player1.velocityY =player1.velocityY + 0.1
 
 player1.collide(ground)
 
 if(obstaclegroup.isTouching(player1)){
   obstaclegroup.destroyEach();
   obstaclegroup.return
   score=score-1
 }


   if(arcade.isTouching(player1)){
     gamestate="acoll"
    
   }

   if(player1.isTouching(arcadegroup12)){
    gamestate="acoll1"
  console.log("Rashmi")
  }

  if(player1.isTouching(arcadegroup3)){
    gamestate="acoll2"
  }

}

if( gamestate==="acoll2"){
  console.log("i am here again")
  obstaclegroup.setVelocityXEach(0);
  player1.velocityX=0
  arcadegroup3.setVelocityXEach(0);
  obstaclegroup.setLifetimeEach(-1)
  arcadegroup3.setLifetimeEach(-1)
  player1.collide(ground)
  yes.visible=true
  text2.visible=true

console.log("acoll2")
if (mousePressedOver(yes)){
  //range accounting for text length
  arcadegroup3.destroyEach();
  yes.remove();
  text2.remove();
  yes.visible=false;
  text2.visible=false;
  window.open("https://editor.p5js.org/agrawaldivith/full/EdzGyKq37");
  
}
   
    }

if( gamestate==="acoll1"){
  console.log("i am here again")
  obstaclegroup.setVelocityXEach(0);
  player1.velocityX=0
  arcadegroup12.setVelocityXEach(0);
  obstaclegroup.setLifetimeEach(-1)
  arcadegroup12.setLifetimeEach(-1)
  player1.collide(ground)
  yes.visible=true
  text2.visible=true

console.log("acoll1")
if (mousePressedOver(yes)){
  //range accounting for text length
  arcadegroup12.destroyEach();
  yes.remove();
  text2.remove();
  yes.visible=false;
  text2.visible=false;
  window.open("https://editor.p5js.org/agrawaldivith/full/EdzGyKq37");
  
}
   
    }

    if( gamestate==="acoll"){
      console.log("i am here")
      obstaclegroup.setVelocityXEach(0);
      player1.velocityX=0
      arcadegroup.setVelocityXEach(0);
      obstaclegroup.setLifetimeEach(-1)
      arcadegroup.setLifetimeEach(-1)
      player1.collide(ground)
      yes.visible=true
      text2.visible=true
      
  console.log("acoll")
    if (mousePressedOver(yes)){
      //range accounting for text length
      arcadegroup.destroyEach();
      yes.remove();
      text2.remove();
     yes.visible=false;
     text2.visible=false;
      window.open("https://whitehatjr.github.io/AngryBirds-1/");
      
  }

 

  }

drawSprites();
fill("white")
text(score,120,85)
//console.log(score)

fill("white")
text(points,620,85)
//console.log(points)



}


function stone() {
   var stone= createSprite(1000, Math.round(random(300, 400)), 10, 10);
   stone.addImage("stone",stoneimage)
   stone.velocityX = -3;
   stone.scale = 0.1;
   stone.lifetime = 1500
   obstaclegroup.add(stone)
 }




 function fire() {
   var fire= createSprite(1000, Math.round(random(300,400)), 10, 10);
   fire.addImage("fire1",fireimage)
   fire.velocityX = -3;
   fire.scale = 0.2;
   fire.lifetime = 1500
   obstaclegroup.add(fire)
 }


 function policecones() {
   var policecones = createSprite(1000, Math.round(random(400,400)), 10, 10);
   policecones.addImage("cones",policeconesimage)
   policecones.velocityX = -3;
   policecones.scale = 0.2;
   policecones.lifetime = 1500
   obstaclegroup.add(policecones)
 }

 function heart() {
   var heart= createSprite(Math.round(random(1200,800)), Math.round(random(400,400)), 10, 10);
   heart.addImage("cones",heartimage)
   heart.velocityX = -3;
   heart.scale = 0.1;
   heart.lifetime = 1500}