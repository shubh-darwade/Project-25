
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj;
var world;
var missioncompImg,missioncomp,border,paper1,GameOver,GameOverImg,manObj1,manObj2,manObj1Img,manObj2Img;
function preload()
{
	missioncompImg=loadImage("GC.png");
	GameOverImg=loadImage("GameOver.png");
	manObj1Img=loadImage("man-standing.png");
	manObj2Img=loadImage("man-kicking.png")
}

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	missioncomp=createSprite(width/2,200,100,50);
	missioncomp.addImage("image",missioncompImg);
	missioncomp.scale=0.7;
	missioncomp.visible=false;

	border=createSprite(1000,330,100,10);
    border.visible=false;
	dustbinObj=new dustbin(1000,350);
  
	paperObject=new paper(300,340,40);
	paper1=createSprite(300,340,40,40);
	paper1.visible=false;

	GameOver=createSprite(width/2,200,100,50);
	GameOver.addImage(GameOverImg);
	GameOver.scale=0.7;
	GameOver.visible=false;

  groundObject=new ground(width/2,370,width,20);
  
  manObj1=createSprite(200,225,50,200);
  manObj1.addImage(manObj1Img);
  manObj1.scale=0.7;
 

  manObj2=createSprite(200,225,50,200);
  manObj2.addImage(manObj2Img);
  manObj2.scale=0.7;
  manObj2.visible=false;
  //Create a Ground


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
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  paper1.x=paperObject.body.position.x;
  paper1.y=paperObject.body.position.y;
keyPressed();

  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  

  if(paper1.isTouching(border))
  {
	  missioncomp.visible=true;
  }

  if(paper1.x > 1200)
  {
   GameOver.visible=true;
  }
 drawSprites();

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:5,y:-5});
		manObj1.visible=false;
		manObj2.visible=true;
    }
 
  }
