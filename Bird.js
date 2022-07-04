class Bird extends BaseCircle{
    constructor(x, y, radius, options = {restitution: 0.8, friction: 0.2, density: 3}){
        super(x, y, radius, options);
        
        this.sprite.addImage(bird_img);
        this.sprite.scale = 0.125;
        this.sprite.setCollider("circle");
    }
}