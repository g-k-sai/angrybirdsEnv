const Engine = Matter.Engine,
      World = Matter.World,
      Bodies = Matter.Bodies;

var engine, world;
var highGround, ground, wLog1, wBox1, wBox2;
var wLog2, wBox3, wBox4;
var wLog3, wLog4, wBox5;
var pig1, pig2, bird;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  World.add(world, engine);

  ground = new Ground(0, 380, width*2, 20);
  highGround = new Ground(0, 300, 200, 150);
  
  wBox1 = new WoodenBox(400, 360, 40);
  wBox2 = new WoodenBox(500, 360, 40);
  pig1 = new Pig(450, 360, 18);
  wLog1 = new WoodenLog(450, 320, 140, 20);

  wBox3 = new WoodenBox(400, 300, 40);
  wBox4 = new WoodenBox(500, 300, 40);
  pig2 = new Pig(450, 300, 18);
  wLog2 = new WoodenLog(450, 260, 140, 20);

  wBox5 = new WoodenBox(450, 240, 40);
  wLog3 = new WoodenLog(495, 240, 20, 90);
  wLog4 = new WoodenLog(405, 240, 20, 90);
  
  bird = new Bird(50, 200, 15);
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

  bird.display();
}