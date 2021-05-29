
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new Ground(600,680,1200,20)
	stone=new Stone(100,100,100,100)
	rubber=new Rubber(300,100,30)
	hammer=new Hammer(500,100,100,30)
	iron=new Iron(200,680,100,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 
  ground1.display()
  stone.display()
  rubber.display()
  hammer.display()
  iron.display()
}



