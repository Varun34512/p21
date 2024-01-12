
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1700, 700);

	var ball_option={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground =new Ground(width/2,670,width,20);
	left =new Ground(1100,600,20,120);
	right =new Ground(1300,600,20,120);

	ball= Bodies.circle(200,20,20,ball_option) ;
	World.add(world,ball) ;

	Engine.run(engine);
	
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:85,y:-85});
	}
  }	

function draw() {
  rectMode(CENTER);
  background(0);
  
  
  ellipse(ball.position.x,ball.position.y,20,20) ;
  ground.show()
  left.show()
  right.show()
  
  drawSprites();
 
}






