class Chain{
    constructor(body1, body2, offsetX, offsetY) {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA : body1,
            bodyB : body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.chain=Constraint.create(options);
        World.add(world, this.chain);
    }
        display(){
            var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;        
        strokeWeight(4);
        var anker1x=pointA.x
        var anker1y = pointA.y
        var anker2x=pointB.x+this.offsetX
        var anker2y=pointB.y+this.offsetY
        line(anker1x,anker1y,anker2x,anker2y);
        }
        
    }