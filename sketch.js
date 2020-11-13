const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var polygon,ground2;
var score=0;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  
 
  ground=new Ground(390,300,250,10);
  ground2=new Ground(390,400,950,10);

    box1=new Box(390,235,30,40);
    box2=new Box(360,235,30,40);
    box3=new Box(390,235,30,40);
    box4=new Box(420,235,30,40);
    box5=new Box(450,235,30,40);
    box6=new Box(360,195,30,40);
    box7=new Box(390,195,30,40);
    box8=new Box(420,195,30,40);
    box9=new Box(390,155,30,40);

    polygon=Bodies.circle(50,200,20);
  World.add(world,polygon)
  
   slingshot=new SlingShot(polygon,{x:100,y:200})


}

function draw() {
  background(255,255,255); 

  text("Score:"+score,650,40)
  Engine.update(engine);
ground2.display();
 ground.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();

 box1.score();
 box2.score();
 box3.score();
 box4.score();
 box5.score();
 box6.score();
 box7.score();
 box8.score();
 box9.score();
 
 ellipseMode(RADIUS);
 fill('yellow')
 polygon.size=5
 ellipse(polygon.position.x,polygon.position.y,40,40);
 
 slingshot.display();
 keyPressed()
  drawSprites();
}

  
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){

if(keyCode===32){
slingshot.attch(this.polygon);

}


}