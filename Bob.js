class Bob{
    constructor(x,y,r){
        var options={
            isStatic:false,
            'restitution':1,
            'friction':0,
            'density':7.8
        }
        this.body=Bodies.circle(x,y,r,options)
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world,this.body)
    }
    display(){

        fill("pink")
        ellipseMode(RADIUS);
        circle(this.body.position.x,this.body.position.y,this.r)
       
    }
}