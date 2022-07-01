class WoodLog extends BaseRect{
    constructor(x, y, width, height, angle = 0, scale = 0.74, options = {restitution: 0.8, friction: 0.3, density: 1.0}){
        super(x, y, width, height, angle, options);
        this.sprite.addImage(log_img);
        this.sprite.scale = scale;
        this.sprite.setCollider("rectangle");
    }
}