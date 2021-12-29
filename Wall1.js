class Wall1{
    constructor(x,y,w,h){
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
      var options = {isStatic:true};
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke(200);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}