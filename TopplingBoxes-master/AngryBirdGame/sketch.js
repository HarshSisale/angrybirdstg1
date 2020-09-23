const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,box3,box4,box5,log1,log2,log3,log4;
var pig1,pig2;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new pig(810,350);
    log1 = new log(810,250,300,PI/2);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new pig(810,220);
    log2 = new log(810,180,300,PI/2);
    box5 = new Box(810,160,70,70);
    log3 = new log(750,150,140,PI/7);
    log4 = new log(880,150,140,-PI/7);
    bird1 = new bird(200,100,30);


    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
    
}