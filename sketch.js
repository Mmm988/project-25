
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var paper,ground;
var boxImage,paperImage;
var box1,box2,box3;

function preload(){
	//boxImage=loadImage("dustbingreen.png");
	//paperImage=loadImage("paper.png");
}

function setup() {
	createCanvas(800, 400);
    rectMode(CENTER);

	engine=Engine.create();
	world = engine.world;

	ground=new Ground(400,390,800,20)

	paper=new Ball(150,320,15);

	box1=new Box(600,375,80,10)

	box2=new Box(555,330,10,100)

	box3=new Box(645,330,10,100)

	Engine.run(engine);
  
}


function draw() {
  background("skyBlue");
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(CENTER);
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();

  drawSprites(); 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:31,y:-31})
	}
}