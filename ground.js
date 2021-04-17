class Ground{
constructor(){

var options = {
isStatic:true,
density: 1,
friction: 1
}
 
this.body=Bodies.rectangle(800,463,1600,75,options);

World.add(world,this.body);
    
}

display(){

push();
fill("green");
rectMode(CENTER);
var pos=this.body.position;
rect(pos.x,pos.y,1600,75);
pop();

}


}