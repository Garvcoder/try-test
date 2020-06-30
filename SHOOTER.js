class Shooter{
    constructor(x,y,sides,radius){
        var options = {
            isStatic : false
        }
     this.body = Bodies.polygon(x, y, sides, radius, options);   
     this.radius = radius;
     this.sides = sides;
     World.add(world, this.body);
    }
    display(){
        var pos6 = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos6.x, pos6.y, this.width, this.height);
      }
}
