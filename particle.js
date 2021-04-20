class Particle{
    constructor(x,y,r){
        var options = {
            friction : 1.0,
            restitution : 0.5 
        }

        this.par = Bodies.circle(x,y,r,options);
        this.r = r
        World.add(world,this.par);
        this.color = color(random(0,255), random(0,255), random(0,255));
    }

      display(){
        var pos = this.par.position;
        var angle = this.par.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0,0,this.r,this.r);
        pop();

    }
}