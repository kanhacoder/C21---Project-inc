class Ball{
    constructor(x,y,r){
      this.x = x;
      this.y = y;
      this.r = r;
      var options = {restitution:0.8,friction:0.1};
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        stroke(200);
        fill("red");
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
    }
}