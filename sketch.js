const Engine = Matter.Engine,
      World = Matter.World,
      Bodies = Matter.Bodies;

var engine, world;
var highGround, ground, wLog1, wBox1, wBox2;
var wLog2, wBox3, wBox4;
var wLog3, wLog4, wBox5;
var pig1, pig2, bird1;

var pig_img, log_img, box_img, bird_img, bg_img, ss_img, bg, ss;

function preload(){
  bird_img = loadImage("Images\\Bird.png");
  pig_img = loadImage("Images\\pig.png");
  log_img = loadImage("Images\\Wooden_Log.png");
  box_img = loadImage("Images\\Wooden_Box.png");
  bg_img = loadImage("Images\\background.png");
  ss_img = loadImage("Images\\Slingshot.png");
}

function setup() {
  createCanvas(800,400);
  bg = createSprite(400, 200, 400, 200);
  bg.addImage(bg_img);

  ss = createSprite(50, 180);
  ss.addImage(ss_img);
  ss.scale = 0.5;
  
  engine = Engine.create();
  world = engine.world;
  World.add(world, engine);

  ground = new Ground(0, 380, 1600, 40);
  highGround = new Ground(0, 300, 200, 150);
  
  wBox1 = new WoodBox(400, 360, 40);
  wBox2 = new WoodBox(500, 360, 40);
  pig1 = new Pig(450, 360, 18);
  wLog1 = new WoodLog(450, 320, 140, 20);

  wBox3 = new WoodBox(400, 300, 40);
  wBox4 = new WoodBox(500, 300, 40);
  pig2 = new Pig(450, 300, 18);
  wLog2 = new WoodLog(450, 260, 140, 20);

  wLog3 = new WoodLog(420, 240, 70, 20, -45, 0.5);
  wLog4 = new WoodLog(480, 240, 70, 20, 45, 0.5);
  wBox5 = new WoodBox(450, 240, 40);
  
  bird1 = new Bird(50, 150, 15);
}

function draw() {
  background("yellow");
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

  wLog3.display();
  wLog4.display();
  wBox5.display();

  bird1.display();

  drawSprites();
}