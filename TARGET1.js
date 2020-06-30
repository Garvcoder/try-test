class Target1{
    constructor(x,y,width,height) {
        var options = {
            isStatic: false,
            'restitution' : 0.1,
            'friction' : 0.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
      display(){
        var pos2 =this.body.position;
        rectMode(CENTER);
        fill("pink");
        rect(pos2.x, pos2.y, this.width, this.height);
      }
};