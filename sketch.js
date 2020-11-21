//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var line1;
var line2;
var line3;
var ground;
var paper1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

line1 = new Rect(600,670,200,20);
line2 = new Rect(500,660,20,200);
line3 = new Rect(700,660,20,200);
ground = new Ground(400,690,800,20)
paper1 = new Paper(100,660,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  line1.display();
  line2.display();
  line3.display();
  ground.display();
  paper1.display();
  text(mouseX+ ","+ mouseY,mouseX,mouseY);
  keypressed();
}
function keypressed(){
  if(keyCode === UP_ARROW){ 
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85},0.5);
  }
}

