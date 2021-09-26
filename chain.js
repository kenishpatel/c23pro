class chain{
constructor(bodyA,bodyB){

{
  var   options = {
   bodyA: bodyA,
   pointB: pointB,
   stiffness: 0.04,
   lenght: 200

}
this.pointB=pointB
this.chain = constraint.create(options);
World.add(word,this.chain)
}


display()
{
  if(this.chain.bodyA){
   var pointA = this.chatn.bodyA.position;
   var pointB = this.pointB;
   strokeweight(4);
  line(point.x,pointA.y,pointB.x,pointB.y);
  }


}


}
}