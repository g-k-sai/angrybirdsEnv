const Engine = Matter.Engine,
      World = Matter.World,
      Bodies = Matter.Bodies;

var engine, world;
var highGround, ground, wLog1, wBox1, wBox2;
var wLog2, wBox3, wBox4;
var wLog3, wLog4, wBox5;
var pig1, pig2, bird1;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  World.add(world, engine);

  ground = new Ground(0, 380, 1600, 20);
  highGround = new Ground(0, 300, 200, 150);
  
  wBox1 = new WoodBox(400, 360, 40);
  wBox2 = new WoodBox(500, 360, 40);
  pig1 = new Pig(450, 360, 18);
  wLog1 = new WoodLog(450, 320, 140, 20, 0);

  wBox3 = new WoodBox(400, 300, 40);
  wBox4 = new WoodBox(500, 300, 40);
  pig2 = new Pig(450, 300, 18);
  wLog2 = new WoodLog(450, 260, 140, 20, 0);

  wBox5 = new WoodBox(450, 240, 54);
  wLog3 = new WoodLog(495, 240, 20, 90, -PI*10);
  wLog4 = new WoodLog(405, 240, 20, 90, PI*10);
  
  bird1 = new Bird(50, 200, 15);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  
  ground.display();
  highGround.display();

  wBox1.display();
  wBox2.display();
  pig1.display();
  wLog1.display();

  wBox3.display();
  wBox4.display();
  pig2.display();
  wLog2.display();

  wBox5.display();
  wLog3.display();
  wLog4.display();

  bird1.display();
}