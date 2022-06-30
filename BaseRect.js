class BaseRect{
    constructor(x, y, width, height, angle = 0, options = {}){
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        
        this.width = width;
        this.height = height;

        this.f_color = "black";
        this.st_color = "black"; 

        Matter.Body.setAngle(this.body, angle);
    }

    display(){
        let pos = this.body.position;
        let ang = this.body.angle;
        
        push();
        fill(this.f_color);
        stroke(this.st_color);
        translate(pos.x, pos.y);
        rotate(ang);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}