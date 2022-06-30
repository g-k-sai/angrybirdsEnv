class WoodLog extends BaseRect{
    constructor(x, y, width, height, angle = 0, options = {restitution: 0.8, friction: 0.3, density: 1.0}){
        super(x, y, width, height, angle, options);

        this.f_color = "#EBA46E";
        this.st_color = "brown";
    }
}