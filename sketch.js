var helicopterIMG, helicopterSprite
var packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var boxsprite1,boxsprite2,boxsprite3

function preload()
{  
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
} 

function setup(){
	//Matter.Body.setStatic(false)
	var canvas = createCanvas(600,600);
	 engine = Engine.create();
	 world = engine.world;

	 packageSprite=createSprite(width/2, 80, 50,50);
	 packageSprite.addImage(packageIMG)
	 packageSprite.scale=0.2

	 helicopterSprite=createSprite(width/2, 200, 10,10);
	 helicopterSprite.addImage(helicopterIMG)
	 helicopterSprite.scale=0.6
 
	var change={   
 
	   isStatic: true
 
	}

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

   

	ground = Bodies.rectangle(width/2,550,width,50,change); 
	World.add(world,ground);
 
	var ball_options={
	   restitution:0.6,isStatic:true}

	packageBody=Bodies.circle(width/2,200,5,ball_options);
	World.add(world,packageBody);
	
		packageBody.x = width/2
		packageBody.y = 200  

		boxsprite1 = createSprite(width/2,550,200,20);
		boxsprite1.shapeColor = color("red")

		boxsprite2 = createSprite(200,510,20,100);
		boxsprite2.shapeColor = color("red");

		boxsprite3 = createSprite(400,510,20,100);
		boxsprite3.shapeColor = color("red");
	
    Engine.run(engine)
	console.log(packageBody);
	console.log(packageBody.position.x)
	console.log(packageBody.position.y);
 }
 
 function draw(){
 background(0);
 Engine.update(engine);
	 rectMode(CENTER);
	  packageSprite.x= packageBody.position.x 
     packageSprite.y= packageBody.position.y
	 ellipseMode(RADIUS)
	 ellipse(packageBody.position.x,packageBody.position.y,20,20)
	 drawSprites();

	 if(keyCode=== DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);}
 }


