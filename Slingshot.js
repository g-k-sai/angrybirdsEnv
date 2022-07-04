class Slingshot{
    constructor(x, y, width, height, brd){
        this.body = Bodies.rectangle(x, y, width, height);
        World.add(world, this.body);

        this.sprite = createSprite(x, y, width, height);
        this.sprite.addImage(ss_img);
        this.sprite.scale = 0.35;

        this.constraint = Constraint.create({
            pointA: {x: 65, y: 110},
            bodyB: brd,
            stiffness: 0.1,
          });
        World.add(world, this.constraint);
    }

    display(){
        if(this.constraint.bodyB){
            let pos = this.body.position;
            this.sprite.x = pos.x;
            this.sprite.y = pos.y;
        }
    }

    fly(){
        this.constraint.bodyB = null;
    }

    attach(b){
        this.constraint.bodyB = b;
    }
}