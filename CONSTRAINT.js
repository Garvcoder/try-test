class Constraint1{
  constructor(bodyA,pointB){
   var options = {
     bodyA: bodyA,
     pointB: pointB
   }
     this.pointB = pointB;
     this.constraint = Constraint.create(options)
     World.add(world, this.constraint);
  } 
  
  display(){
    if(this.sling.bodyA){
     var pointA = this.sling.bodyA.position;
     var pointB = this.pointB;
     fill("green");
     strokeWeight(3);
     line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
     
    }
};




  




