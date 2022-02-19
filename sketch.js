var desert , ground
var paddle , stick
var camel , player
var base
var gameover,over
var again,restart
var coin
var score = 0
var play
var gameState = play
var END=0
function preload(){
ground=loadImage("desert.jpg")
stick=loadImage("log.png")
player=loadImage("camel.jpg")
over=loadImage("over clip.png")
restart=loadImage("restart.jpg")
money=loadImage("coin.png")
}

function setup() {
 createCanvas(600,600)
  desert = createSprite(300,300,600,600)
desert.addImage(ground)
//desert.velocityX=-1
 camel = createSprite(50,350)
camel.addImage(player)
camel.scale=0.05
 base = createSprite(300,580,600,10)
base.visible=false
 gameover = createSprite(300,300)
gameover.scale=0.5
gameover.addImage(over)
gameover.visible=false
 again = createSprite(300,200)
again.scale=0.5
again.addImage(restart)
again.visible=false
paddleg=new Group()
coing=new Group()
}

function draw() {
  if (gameState===play){
    spawnpaddle();
     if(camel.isTouching(paddleg)){
      gameState=END}
    desert.velocityX=-4
    if(keyDown("RIGHT_ARROW")){
    camel.velocityX=3}
    else{
        camel.velocityX=0
    }
if(keyDown("UP_ARROW")){
    camel.velocityY=-3
}
else{camel.velocityY=0}

if(keyDown("DOWN_ARROW")){
    camel.velocityY=3
}
else{camel.velocityY=0}

if(camel.isTouching(coing)){
    coing.destroyEach()
}

    if(desert.x<0){
        desert.x=desert.width/2
    }
    score=score+Math.round(getFrameRate()/60)
  }

  else if (gameState===END){
       again.visible=true
        gameover=true
        desert.velocityX=0
        paddleg.setVelocityXEach(0)
        coing.setVelocityXEach(0)
        if(mousePressedOver(again)){
            reset()
        }
        
        
  }
  paddleg.setLifetimeEach(-1)

 drawSprites();
 text("score:"+score,500,100)

}


function spawnpaddle(){
    if(frameCount%60===0){
        var paddle = createSprite(240,250)
        paddle.y = Math.round(random(250,550))
        paddle.addImage(stick)
       paddle.scale=0.1
        paddle.velocityX=-5
     paddleg.add(paddle)
var coin = createSprite(240,300)
coin.addImage(money)
coin.scale=0.03
coin.velocityX=-3
coin.y = Math.round(random(350,500))

coing.add(coin)
    }
}
function reset(){
    gameState=play
    again.visible=false
    gameover.visible=false
    score=0
    paddleg.destroyEach()
    coing.destroyEach()
  //  desert.destroy()
}
