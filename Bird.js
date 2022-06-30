class Bird extends BaseCircle{
    constructor(x, y, radius, options = {restitution: 0.8, friction: 0.2, density: 1.5}){
        super(x, y, radius, options);
        
        this.f_color = "red";
    }
}