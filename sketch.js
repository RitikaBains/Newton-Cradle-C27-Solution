
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var roof, bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5, bobDiameter;
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,700);


	engine = Engine.create();
	world = engine.world;
	bobDiameter=100;

	startBobPositionX=width/2;
	startBobPositionY=height/4+300;

	//Create the Bodies Here.
	roof = new Roof(width/2,height/4,width/3,20);
	bob1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter)
	bob2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter)
	bob3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter)
	bob4 = new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter)
	bob5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter)
	rope1 = new Chain(bob1.body,roof.body,-bobDiameter*2, 0)
	rope2 = new Chain(bob2.body,roof.body,-bobDiameter*1, 0)
	rope3 = new Chain(bob3.body,roof.body,0, 0)
	rope4 = new Chain(bob4.body,roof.body,bobDiameter*1, 0)
	rope5 = new Chain(bob5.body,roof.body,bobDiameter*2, 0);


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);
  
  drawSprites();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //keyPressed();
}

function keyPressed() 
{ 
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-50})
}
}


