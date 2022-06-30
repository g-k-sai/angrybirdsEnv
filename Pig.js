class Pig extends BaseCircle{
    constructor(x, y, radius, options = {restitution: 0.8, friction: 0.3, density: 1.0}){
        super(x, y, radius, options);
        
        this.f_color = "#39E75F";
    }
}