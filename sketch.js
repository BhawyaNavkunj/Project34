const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
const Render = Matter.Render;

var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var canvas;

function setup() {
  canvas = createCanvas(windowWidth/2,windowHeight/1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options={
    mouse: canvasmouse,
  };

  mConstraint = MouseConstraint.create(engine,options);
  World.add(world,mConstraint);

  pendulum1 = new Pendulum(250,400,"violet");
  pendulum2 = new Pendulum(310,400,"blue");
  pendulum3 = new Pendulum(370,400,"green");
  pendulum4 = new Pendulum(430,400,"yellow");
  pendulum5 = new Pendulum(490,400,"red");
  sling1 = new Sling(pendulum1.body,{x:250,y:100});
  sling2 = new Sling(pendulum2.body,{x:310,y:100});
  sling3 = new Sling(pendulum3.body,{x:370,y:100});
  sling4 = new Sling(pendulum4.body,{x:430,y:100});
  sling5 = new Sling(pendulum5.body,{x:490,y:100});
  var render = Render.create({
    element: document.body,
    engine: engine,
    options:{
      width: 800,
      height: 600,
      wireframes: false,
    }
  })
}

function draw() {
  Engine.update(engine);
  background(0);  
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(pendulum5.body,{x:mouseX,y:mouseY});
}