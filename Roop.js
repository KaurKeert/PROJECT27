class Roop{
constructor(body1,body2,X,Y){
  this.X=X;
  this.Y=Y;
    var options ={
bodyA:body1,
bodyB:body2,
pointB:{x:this.X,y:this.Y}
    }

this.roop=Matter.Constraint.create(options)
World.add(world,this.roop)
} 
display(){
var point1=this.roop.bodyA.position
var point2=this.roop.bodyB.position



var Anchor1X=point1.x;
var Anchor1Y=point1.y

var Anchor2X=point2.x+this.X;
var Anchor2Y=point2.y+this.Y;
line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)
}
}