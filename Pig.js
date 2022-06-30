class Pig{
    constructor(x, y, radius){
        let options = {
            restitution: 0.8,
            friction: 0.3,
            density: 1.0
        };
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        
        this.radius = radius;
    }

    display(){
        let pos = this.body.position;
        
        push();
        fill("#39E75F");
        stroke("black");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius);
        pop();
    }
}