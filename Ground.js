class Ground extends BaseRect{
    constructor(x, y, width, height, angle = 0, options = {isStatic: true}){
        super(x, y, width, height, angle, options);
        this.sprite.shapeColor = "#91672C";
        this.sprite.setCollider("rectangle");
    }
}