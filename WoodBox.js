class WoodenBox{
    constructor(x, y, size){
        let options = {
            restitution: 0.8,
            friction: 0.3,
            density: 1.0
        };
        this.body = Bodies.rectangle(x, y, size, size, options);
        World.add(world, this.body);
        
        this.size = size;
    }

    display(){
        let pos = this.body.position;
        
        push();
        fill("#EBA46E");
        stroke("brown");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.size, this.size);
        pop();
    }
}