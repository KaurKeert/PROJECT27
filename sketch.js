
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.REender;

var wood1,ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball1=new Bob(300,300,20)
ball2=new Bob(350,300,20)
ball3=new Bob(400,300,20)
ball4=new Bob(450,300,20)
ball5=new Bob(500,300,20)

wood1=new Wood(400,100,300,30)

rope1=new Roop(ball1.body,wood1.body,-100,0)
rope2=new Roop(ball2.body,wood1.body,-50,0)
rope3=new Roop(ball3.body,wood1.body,0,0)
rope4=new Roop(ball4.body,wood1.body,+50,0)
rope5=new Roop(ball5.body,wood1.body,+100,0)
	
World.add(world,rope1)
World.add(world,rope2)
World.add(world,rope3)
World.add(world,rope4)
World.add(world,rope5)


Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
wood1.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
  drawSprites();
 
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-730,y:0})
}

}

