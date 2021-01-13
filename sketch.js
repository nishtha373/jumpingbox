var canvas;
var music;
var redbox,greenbox,yellowbox,bluebox;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

 redbox = createSprite(80,580,190,20);
 redbox.shapeColor="red";
 
 
 greenbox = createSprite(270,580,210,20);
 greenbox.shapeColor="green";

 yellowbox = createSprite(470,580,210,20);
 yellowbox.shapeColor="yellow";

 bluebox = createSprite(670,580,250,20);
 bluebox.shapeColor="blue";

 ball = createSprite(100,100,50,50);
 ball.shapeColor="white";


    
}

function draw() {
    background(rgb(169,169,169));
      

  edges = createEdgeSprites();

    ball.velocityY=9;
    ball.velocityX=4;

  ball.bounceOff(bluebox);
  ball.bounceOff(redbox);
  ball.bounceOff(greenbox);
  ball.bounceOff(yellowbox);
  ball.bounceOff(edges);

  if(ball.isTouching(redbox) && ball.bounceOff(redbox)){

 ball.shapeColor="red";

  }

  if(ball.isTouching(greenbox)){

 ball.shapeColor="green";

  }

  if(ball.isTouching(yellowbox)){

 ball.shapeColor="yellow";

  }

  if(ball.isTouching(bluebox)){

 ball.shapeColor="blue";

  }

  if(keyDown("down")){
    ball.velocityY=2;
    ball.velocityX=0;
  }

  if(keyDown("up")){
    ball.velocityY=-2;
    ball.velocityX=0;
  }

 if(keyDown("right")){
   ball.velocityY=0;
   ball.velocityX=2;
 }

 if(keyDown("left")){
   ball.velocityY=0;
   ball.velocityX=-2;
 }

 drawSprites();
    
}
