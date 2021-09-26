class bob{
constructor(x,y,r)
{
var options={
    'restitution':1.4,
    'friction':1.0,
    'density':1.0
}
this.x=x;
this.y=y;
this.r=r;
this.body=bodies.circle(thish.x, this.y,(this.r-20)/2, options)
World.add(world. this.body);


}
display()
{
        var bobpos=this.body.position;
        Push()
        Translate(bobpos.x, bobpos.y);   
        rectmadee(CANTER)
        fill(rgd(6,253,199));
        ellipse(0,0,this.r,this.r);
        Pop()





    }















}