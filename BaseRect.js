class BaseRect{
    constructor(x, y, width, height, angle = 0, options = {}){
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        Matter.Body.setAngle(this.body, angle);
        
        this.sprite = createSprite(x , y, width, height);
        this.sprite.rotateToDirection = true;
    }
    
    display(){
        let pos = this.body.position;
        this.sprite.x = pos.x;
        this.sprite.y = pos.y;
        this.sprite.rotation = this.body.angle;
    }
}