const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world;
var ground;
var bird,bird_img;
var bird_group;
var car1_button, car2_button, car3_button;
var car1_img, car2_img, car3_img;
var car1_weight=1539,car2_weight=1810,car3_weight=2535;
var wall,wall_img,wallBroken_img;
var car;
var deformation;
var gameState="start";

function preload(){

bird_img=loadImage("bird.png");

car1_img=loadImage("car1.png");
car2_img=loadImage("car2.png");
car3_img=loadImage("car3.png");

wall_img=loadImage("wall1.png");
wallBroken_img=loadImage("wall2.png");

}

function setup(){
createCanvas(1600,500);

car=createSprite(100,400);
car.visible=false;

car1_button=createSprite(100,170,25,25);
car2_button=createSprite(300,170,25,25);
car3_button=createSprite(500,170,25,25);
car1_button.visible=false;
car2_button.visible=false;
car3_button.visible=false;

wall=createSprite(width-30,320,50,height);
wall.addImage(wall_img);
wall.scale=0.4;

engine=Engine.create();
world=engine.world;


bird_group=new Group();
ground=new Ground();

}

function draw(){
background("cyan");

car1_button.visible=false;
car2_button.visible=false;
car3_button.visible=false;

if(gameState=="start"){

wall.addImage(wall_img);
wall.scale=0.4;

car.x=100;
car.y=400;

car.visible=false;
wall.addImage(wall_img);

car1_button.visible=true;
car2_button.visible=true;
car3_button.visible=true;

textSize(18);
fill("black");
text("SELECT WHICH CAR YOU WANT TO TEST:",100,100);
textSize(15);
text("MG HECTOR",55,220);
text("MERCEDES",265,220);
text("BMW X7",470,220);
    
if(mousePressedOver(car1_button)){
gameState="car1";
}

if(mousePressedOver(car2_button)){
gameState="car2";
}
if(mousePressedOver(car3_button)){
gameState="car3";
}
}

if(gameState=="car1"){

var car1_speed=6;

car.visible=true;
car.addImage(car1_img);
car.scale=0.3;
car.velocityX=car1_speed;

deformation=0.5*car1_weight*car1_speed*car1_speed*100/22500;

textSize(20);
fill("black");
text("Speed: "+car1_speed*10+" km/h",100,100);
text("Weight: "+car1_weight+" kg",300,100);
text("MG HECTOR TEST",width-200,80);

if(car.isTouching(wall)){
gameState="car1_end";
}

}

if(gameState=="car1_end"){

car.velocityX=0;

textSize(20);
fill("black");
text("Deformation: "+deformation,100,100);
text("Press M to return to start menu");
text("MG HECTOR TEST",width-200,80);
fill("green");
text("'MG HECTOR IS A SAFE CAR'",100,300);
fill("black");
text("GCSO",100,340)
text("Press M to return to start menu.",790,100);

if(keyDown("M")){
gameState="start";
}
}

if(gameState=="car2"){
var car2_speed=6;

car.visible=true;
car.addImage(car2_img);
car.scale=0.3;
car.velocityX=car2_speed;
    
deformation=0.5*car2_weight*car2_speed*car2_speed*100/22500;
    
textSize(20);
fill("black");
text("Speed: "+car2_speed*10+" km/h",100,100);
text("Weight: "+car2_weight+" kg",300,100);
text("MERCEDES BENZ C TEST",width-270,80);
    
if(car.isTouching(wall)){
gameState="car2_end";
}
}

if(gameState=="car2_end"){

car.velocityX=0;

wall.addImage(wallBroken_img);
wall.scale=0.09;
wall.x=width-70;

textSize(20);
fill("black");
text("Deformation: "+deformation,100,100);
text("Press M to return to start menu");
text("MERCEDES BENZ C TEST",width-270,80);
fill("orange");
text("'MERCEDES BENZ C IS AN AVERAGE CAR'",100,300);
fill("black");
text("GCSO",100,340)
text("Press M to return to start menu.",790,100);
    
if(keyDown("M")){
gameState="start";
}

}

if(gameState=="car3"){
var car3_speed=6;    

car.visible=true;
car.addImage(car3_img);
car.scale=0.6;
car.velocityX=car3_speed;
        
deformation=0.5*car3_weight*car3_speed*car3_speed*100/22500;
        
textSize(20);
fill("black");
text("Speed: "+car3_speed*10+" km/h",100,100);
text("Weight: "+car3_weight+" kg",300,100);
text("BMW X7 TEST",width-200,80);
        
if(car.isTouching(wall)){
gameState="car3_end";
}
}
    
if(gameState=="car3_end"){
    
car.velocityX=0;
    
wall.addImage(wallBroken_img);
wall.scale=0.09;
wall.x=width-70;
    
textSize(20);
fill("black");
text("Deformation: "+deformation,100,100);
text("Press M to return to start menu");
text("BMW X7 TEST",width-200,80);
fill("red");
text("'BMW X7 IS A DANGEROUS CAR'",100,300);
fill("black");
text("GCSO",100,340)
text("Press M to return to start menu.",790,100);
        
if(keyDown("M")){
gameState="start";
}
    
}

Engine.update(engine);

ground.display();
birds();

drawSprites();
}

function birds(){

var rand=Math.round(random(30,200))

if(frameCount%250==0){
bird=createSprite(1610,rand,20,20);
bird.addImage(bird_img);;
bird.velocityX=-5;
bird.scale=0.04;
bird_group.add(bird);
}
}
