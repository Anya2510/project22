
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var cir1;var cir2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    cir1 = new Circle(400,300,20);
    cir2 = new Circle(400,150,20);
}

function draw(){
  background(0);  
  cir1 = new Circle(400,300,20);
  cir2 = new Circle(400,150,20);
    Engine.update(engine);

    cir1.display();
    cir2.display();
    
}


