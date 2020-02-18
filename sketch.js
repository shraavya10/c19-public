var obstacle1
var obstacle2
var obstacle3
var obstacle4
var obstacle5
var obstacle6
var ball


function setup() {
  createCanvas(400, 400);
 obstacle1 =createSprite(98,347,5,700);
obstacle2 =createSprite(199,98,5,200);
 obstacle3 =createSprite(197,398,5,200);
 obstacle4 =createSprite(198,197,100,5);
 obstacle5 =createSprite(196,297,100,5);
 obstacle6 =createSprite(246,245,5,100);
 ball =createSprite(190,392,10,10);
  
 ball.velocityY=3;
ball.velocityX=-2;
  
}

function draw() {
  background(220);
  
  createEdgeSprites();
    background('white');
  ball.bounceOff(edges);
  ball.bounceOff(obstacle1);
  ball.bounceOff(obstacle2);
  ball.bounceOff(obstacle3);
  ball.bounceOff(obstacle4);
  ball.bounceOff(obstacle5);
  ball.bounceOff(obstacle6);
 drawSprites();  
}