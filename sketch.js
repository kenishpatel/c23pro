const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,chain,chain2,chain3,chain4,chain5,roof;
//Create multiple bobs, mulitple ropes varibale here

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
  }
    
  bob1=new Bob(350,400,50)
  bob2=new Bob(400,400,50)
  bob3=new Bob(450,400,50)
  bob4=new Bob(500,400,50)
  bob5=new Bob(550,400,50)
  chain=new chain(bob1.boby,{x:350,y:100})
  chain2=new chain(bob1.boby,{x:400,y:100}) 
  chain3=new chain(bob1.boby,{x:450,y:100})
  chain4=new chain(bob1.boby,{x:500,y:100})
  chain5=new chain(bob1.boby,{x:550,y:100})
  roof=new roof(450,100,300,20)
  
  
  
  
  
  roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  rope = Bodies.rectangle(300,100,20,230,roof_options);
  World.add(world,rope);

  //Rope1=new rope(balls,roof,-80,0)
}

function draw(){ 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //ellipse(rode.position.x,rode.position.y,20,230);
  //call display() to show ropes here
   chain.desplay()
  chain2.desplay()  
  chain3.desplay()
  chain4.desplay() 
  chain5.desplay()
  roof.desplay()
   bob1.desplay()
   bob2.desplay()
   bob3.desplay()
   bob4.desplay()
   bob5.desplay()
 
 drawsprits()
}
   function keypressed(){
  if(keycode === UPARROW ){


 matter.Body.applyForc(bob1.body,bob1.body.position,{x:-30,y:155}); 
  




  }
   
   
   }
  
