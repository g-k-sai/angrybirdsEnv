class WoodBox extends BaseRect{
    constructor(x, y, size, angle = 0, options = {restitution: 0.8, friction: 0.3, density: 1.0}){
        super(x, y, size, size, angle, options);

        this.f_color = "#EBA46E";
        this.st_color = "brown";
    }
}