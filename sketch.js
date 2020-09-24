const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var stand,sling;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

 stand= new Ground(325,150,100,10);
//level two
 block1=new Block1(330,235,30,40);
 block2=new Block2(360,235,30,40);
 block3=new Block3(390,235,30,40);
 block4=new Block4(420,235,30,40);
 block5=new Block5(450,235,30,40);
//level three
block6=new Block6(360,195,30,40);
block7=new Block7(390,195,30,40);
block8=new Block8(420,195,30,40);
//top
block9=new Block9(390,155,30,40);

polygon=Bodies.circle(100,200,20);
World.add(world,polygon);

sling= new Slingshot(this.polygon,{x:100,y:200});

imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40);

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode===32){
    sling.attach(polygon.body);
  }
}