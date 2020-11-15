const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("images/field.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    tree = new Tree(900,240,400,350);

    mango1 = new Mango(810,300);
    mango2 = new Mango(810, 220);
    mango3 = new Mango(810, 350);
    mango4 = new Mango(810, 220);
    mango5 = new Mango(810, 350);
    mango6 = new Mango(810, 220)


    stone = new Stone(100,100,50,50);

    slingshot = new Slingshot(stone.body,{x: 200,y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine)
    strokeWeight(4);
    tree.display();
    ground.display();

    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();

    stone.display();
   
    slingshot.display();  
    
    detectCollision(stone,mango1)
    detectCollision(stone,mango2)
    detectCollision(stone,mango3)
    detectCollision(stone,mango4)
    detectCollision(stone,mango5)
    detectCollision(stone,mango6)
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}

function detectCollision(lstone,lmango){
    mangoBodyPosition= lmango.body.setPosition
    stoneBodyPosition= lstone.body.position

    var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x)
    if(distance<-lmango.r+lstone.r)
    {
        Matter.Body.setStatic(lmango.body,false);
    }
}