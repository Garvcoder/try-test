class Target3{
    constructor(x,y,width,height) {
        var options = {
            isStatic: false,
            //'restitution' : 0.1,
            'friction' : 0.5
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
      display(){
        var pos3 =this.body.position;
        rectMode(CENTER);
        fill("grey");
        rect(pos3.x, pos3.y, this.width, this.height);
      }
};