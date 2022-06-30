class Bird{
    constructor(x, y, radius){
        this.body = Bodies.circle(x, y, radius); //, {restitution: 0.3}
        World.add(world, this.body);
        
        this.radius = radius;
    }

    display(){
        let pos = this.body.position;
        
        push();
        fill("red");
        stroke("black");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius);
        pop();
    }
}