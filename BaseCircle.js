class BaseCircle{
    constructor(x, y, radius, options = {}){
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);

        this.sprite = createSprite(x , y, radius, radius);
    }
    
    display(){
        let pos = this.body.position;
        this.sprite.x = pos.x;
        this.sprite.y = pos.y;
    }
}