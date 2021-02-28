
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4, stone;
var world,boy,slingshot;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,200,30);
	mango3=new mango(1150,150,30);
	mango4=new mango(1000,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone=new Stone(240,420,50,50);
	Engine.run(engine);
	slingshot = new SlingShot(stone.body,{x:240,y:420});

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  stone.display();
  slingshot.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
	keyPressed();

  groundObject.display();
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	
	
	
	}
function mouseReleased(){
	slingshot.fly();
		
	
	
}
function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position 
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		if(distance<=lmango.r+lstone.r){
			Matter.Body.setStatic(lmango.body,false);
		}

}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:240,y:420})
		slingshot.attach(stone.body);

	}

}