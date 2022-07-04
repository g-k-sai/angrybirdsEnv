const Engine = Matter.Engine,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint,
      Constraint = Matter.Constraint;

var engine, world;
var highGround, ground, wLog1, wBox1, wBox2;
var wLog2, wBox3, wBox4;
var wLog3, wLog4, wBox5;
var pig1, pig2, bird1;
var mouse, mConstraint;

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
  const canvas = createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  World.add(world, engine);

  mouse = Mouse.create(canvas.p5canvas);
  mConstraint = MouseConstraint.create(engine, {mouse:mouse});
  World.add(world, mConstraint);

  bg = createSprite(400, 200, 400, 200);
  bg.addImage(bg_img);

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
  
  bird1 = new Bird(65, 110, 15);

  ss = new Slingshot(65, 160, 50, 50, bird1.body);
}

function mouseReleased(){
  setTimeout(() => {
    ss.fly();
  }, 100);
}

function keyPressed(){
  if(key == ' '){
    bird1.sprite.destroy();
    World.remove(world, bird1.body);
    bird1 = new Bird(65, 110, 15);
    ss.attach(bird1.body);
  }
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