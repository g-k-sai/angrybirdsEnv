class BaseCircle{
    constructor(x, y, radius, options = {}){
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);

        this.radius = radius;
        this.f_color = "black";
        this.st_color = "black";
    }

    display(){
        let pos = this.body.position;
        
        push();
        fill(this.f_color);
        stroke(this.st_color);
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius);
        pop();
    }
}