class WoodenLog{
    constructor(x, y, width, height, angle = 0){
        let options = {
            restitution: 0.8,
            friction: 0.3,
            density: 1.0
        };
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        
        this.width = width;
        this.height = height;

        //Matter.Body.rotate(this.body, angle)
    }

    display(){
        let pos = this.body.position;
        
        push();
        fill("#EBA46E");
        stroke("brown");
        //rotate(this.body.angle);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}