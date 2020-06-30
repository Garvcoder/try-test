const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var attachment, shooter1
var target1, target2;
//var chain;
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  
  holder1 = new Holder(500,350,300,10,PI);
  holder2 = new Holder(1000,200,240,10,PI);

  ground = new Ground(600,400,1200,20); 

  //base
  target1 = new Target(377,285,30,40);
  target2 = new Target(407,285,30,40);
  target3 = new Target(437,285,30,40);
  target4 = new Target(467,285,30,40);
  target5 = new Target(497,285,30,40);
  target6 = new Target(527,285,30,40);
  target7 = new Target(557,285,30,40);
  target8 = new Target(587,285,30,40);
  target9 = new Target(617,285,30,40);
  //layer1
  target10 = new Target1(407,245,30,40);
  target11 = new Target1(437,245,30,40);
  target12 = new Target1(467,245,30,40);
  target13 = new Target1(497,245,30,40);
  target14 = new Target1(527,245,30,40);
  target15 = new Target1(557,245,30,40);
  target16 = new Target1(587,245,30,40); 
  //layer2
  target17 = new Target2(437,205,30,40);
  target18 = new Target2(467,205,30,40);
  target19 = new Target2(497,205,30,40);
  target20 = new Target2(527,205,30,40);
  target21 = new Target2(557,205,30,40);
  //layer3
  target22 = new Target3(467,165,30,40);
  target23 = new Target3(497,165,30,40);
  target24 = new Target3(527,165,30,40);
  //top
  target25 = new Target4(497,125,30,40);
  //base_2
  target26 = new Target1(910,165,30,40);
  target27 = new Target1(940,165,30,40);
  target28 = new Target1(970,165,30,40);
  target29 = new Target1(1000,165,30,40);
  target30 = new Target1(1030,165,30,40);
  target31 = new Target1(1060,165,30,40); 
  target32 = new Target1(1090,165,30,40);
  //layer1_2 
  target33 = new Target(940,125,30,40);
  target34 = new Target(970,125,30,40);
  target35 = new Target(1000,125,30,40);
  target36 = new Target(1030,125,30,40);
  target37 = new Target(1060,125,30,40); 
  //layer2_2 
  target38 = new Target2(970,85,30,40);
  target39 = new Target2(1000,85,30,40);
  target40 = new Target2(1030,85,30,40);
  //top_2
  target41 = new Target3(1000,45,30,40);

  polygon1 = Bodies.polygon(50,200,20,20);
  World.add(world,polygon1);

  // p = createSprite(50,200,2,2)

  // var options = {
  //   bodyA: polygon,
  //   pointB : {x:50, y: 200},
  //   stiffness:0.1,
  //   length:10
  // }
  // chain = Constraint.create(options);
  // World.add(world, chain);

  slings = new Constraint1(polygon1, {x:50, y:200})
  //shooter1 = new Shooter(50,200,5,10);

 // attachment = new COnstraint(shooter1.body, {x:50, y:200});
}

function draw() {
  background(0,255,255);  
  Engine.update(engine);
  holder1.display();
  holder2.display();
  ground.display();
  target1.display();
  target2.display();
  target3.display();
  target4.display();
  target5.display();
  target6.display();
  target7.display();
  target8.display();
  target9.display();
  target10.display();
  target11.display();
  target12.display();
  target13.display();
  target14.display();
  target15.display();
  target16.display();
  target17.display();
  target18.display();
  target19.display();
  target20.display();
  target21.display();
  target22.display();
  target23.display();
  target24.display();
  target25.display();
  target26.display();
  target27.display();
  target28.display();
  target29.display();
  target30.display();
  target31.display();
  target32.display();
  target33.display();
  target34.display();
  target35.display();
  target36.display();
  target37.display();
  target38.display();
  target39.display();
  target40.display();
  target41.display();
  //polygon1.display();
  slings.display();

  //strokeweight(3);
  //line(polygon1.position.x, polygon1.position.y,50,250)
  
  drawSprites();
}