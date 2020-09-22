var chance = 3;
var player,player2;
var life = 100;
var complife = 100;
var buton,title;
var win = 2,lose =4;
var play =1,end = 0;
var state = 5;
var gameState =0;
var punch;
var Reset;
var start;
function preload(){
  backimg = loadImage("ring.jpg");
  bgimg = loadImage("bg.jpg");
  playerimg = loadImage("plaimg/man1.png");
  playerimg2 = loadImage("plaimg/man2.png");
  playerimg3 = loadImage("plaimg/man3.png");
  playerimg4 = loadImage("plaimg/man4.png");
  compimg = loadImage("compimg/1.png");
  compimg2 = loadImage("compimg/2.png");
  compimg3 = loadImage("compimg/3.png");
  compimg4 = loadImage("compimg/4.png");
  compimg5 = loadImage("compimg/5.png");
  compimg5 = loadImage("compimg/comp.png");
  lose = loadImage("lose.png");
  punch = loadSound("punch2.mp3");
  won = loadSound("over.mp3");
  cup = loadImage("cup2.png");

}


function setup() {
  createCanvas(1200,600);
  // create player
  player = createSprite(200,400,10,10);
  player.addImage(playerimg4);
  player.scale = 0.5;
  
  //create compplayer
  player2 = createSprite(900,400,10,10);
  player2.addImage(compimg5);
  player2.scale = 0.5;
 Reset = createButton("replay");
Reset.position(570,160);
   
   buton = createButton("play");
   buton.position(932,200);   
   start = createButton("restart");
   start.position(570,160);
      
}

function draw() {
  player.depth = player.depth+2;
  player2.depth = player.depth-4;
   
  // setting gameStates  for running the game
  if(gameState ===0){
    HIDE();
    image(bgimg,0,0,1200,600) ; 
    Reset.hide();
    start.hide();
  }

   buton.mousePressed(()=>{
     chance = 3;
    buton.hide();
     gameState = play; 
});

  
   if(gameState === 1){
     againplay();
     start.hide();
    player.visible = true;
    player2.visible = true; 
    Reset.hide();
    background(backimg);
    textSize(23);
    fill("green");
    text("Your Life:"+life,180,40);
    textSize(23);
    fill("red");
    text("Comp Life:"+complife,780,40);
     text("Your chance:"+chance,180,100);
   playercontrols(); 
   compcontrols();
      
    if(player.isTouching(player2) && keyWentDown(32)){
      complife = complife-1;
      player2.x+=6;
    }
   }
   if(complife<=0){
    gameState = 3;

  }
  if(chance ===1 && life<=1){
    gameState = 4;
  }
  if(chance === 3 && gameState ===5){
    
  }
  
  if(life<=0 && chance>0){
    
    gameState = 5;
  }

      //state = 3
      if(gameState === 3){
        image(cup,400,200)
        setpos();
        textSize(100);
         fill("green");
         text("You Won",400,150)
       HIDE();
       reset();
       start.hide();
      }
 
// state = 4

if(gameState ===4){
  chance = 3;
textSize(100);
fill("red");
text("YOU LOSE",400,150);
image(lose,60,200);
HIDE();
reset();
setpos();
start.hide();
}
if(life === 1){
  won.play();
}

if(gameState ===5){
  
  start.show();
  player.visible = false;
  player2.visible = false;
  
  start.mousePressed(()=>{
    
    gameState = 1;
    player.visible = true;
  player2.visible = true;
    chance= chance-1;
   
    life = 100;
    complife = complife;
    player.x = 200;
    player2.x = 900;
  })
}

drawSprites();
}


function playercontrols(){
if(keyWentDown(32)){
  player.addImage(playerimg3);
  player2.addImage(compimg3);
  punch.play();
 
}
else{
  player.addImage(playerimg4);
  player2.addImage(compimg5);
}


if(keyDown(RIGHT_ARROW)){
  player.x+=7;
  player2.x+=-7;
    }
    else{
   player.x+=0;
   player2.x+=0;
    }

  if(keyDown(LEFT_ARROW)){
  player.x+=-7
  player2.x+=7
  }
   else{
       player.x+=0;
       player2.x+=0;
        }  ;
    if(player.x<=0){
      player.x = 200;
    }}function compcontrols(){

if(player2.x <= player.x+100 && player2.x>500){
  player2.addImage(compimg3);
  life = life-1;
 punch.play();
}
else{
  player2.addImage(compimg5);
}
if(player2.x >=1200 || player2.x<=0){
  player2.x = 850;
}

if(player.x>500 ){
life = life-0;

}

}

function HIDE(){
  player2.visible = false;
  player.visible = false;
}

function reset(){
Reset.show();

Reset.mousePressed(()=>{
Reset.hide();
gameState = 0;
buton.show();
});
life = 100;
complife = 100;
}


function setpos(){
  player.x = 200;
  player2.x = 900;
}

function againplay(){
if(life<=0){
reset();

}



}







