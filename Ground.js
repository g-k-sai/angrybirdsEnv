class Ground{
    constructor(x, y, width, height){
        this.body = Bodies.rectangle(x, y, width, height, {isStatic: true});
        World.add(world, this.body);
        
        this.width = width;
        this.height = height;
    }

    display(){
        let pos = this.body.position;
        fill("black");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}