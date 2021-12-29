const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,wall1,wall2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   
  
  

  engine = Engine.create();    
  world = engine.world;
// 	//Create the Bodies Here.
//  ball.body = bodies.circle(5,5,10,ball_options);
  ball = new Ball(200,200,30);
  ground = new Ground(400,680,800,20);
	wall1 = new Wall1(450,680,10,30);
  wall2 = new Wall2(700,680,10,30);
}


function draw() {
  background("black");
  Engine.update(engine);
  ball.display();
  ground.display();
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Body.applyForce(ball.body,ball.body.position,{x:10,y:-5})      
  }
}



