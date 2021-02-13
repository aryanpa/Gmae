class Shooter{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 5
        }
        this.shooter = loadImage("shooter.png");
        this.pointB = pointB
        this.shooter = Constraint.create(options);
        World.add(world, this.shooter);
    }

    fly(){
        this.shooter.bodyA = null;
    }

    attach(body){
           this.shooter.bodyA = body;
    }

    display(){
        image(this.shooter,200,20);
        //image(this.shooter,170,20);
       
        if(this.shooter.bodyA){
            var pointA = this.shooter.bodyA.position.x;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 200) {
                strokeWeight(7);

               
                line(pointA.x-30, pointA.y, pointB.x+10, pointB.y);
                line(pointA.x-30, pointA.y, pointB.x+95, pointB.y -3);
               image(this.shooter,pointA.x-30, pointA.y-10,15,30);
               //image(this.shooter,200,20);
            }
            else{
                strokeWeight(3);
               
               line(pointA.x+1, pointA.y, pointB.x+100, pointB.y);
                line(pointA.x+1, pointA.y, pointB.x-100, pointB.y- 3);
               image(this.shooter,pointA.x+25, pointA.y-10,15,30);
              //image(this.shooter,200,20);
             }
           
            
            pop();
        }
    }
    
}