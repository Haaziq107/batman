var man,thunder;
var drops = [];
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var thunderGroup;


function preload(){
    manI=loadImage("images/man.png");
    thunderI1=loadImage("images/1.png");
    thunderI2=loadImage("images/2.png");
    thunderI3=loadImage("images/3.png");
    thunderI4=loadImage("images/4.png");

}

function setup(){
    canvas=createCanvas(400,600);

    man=createSprite(200,500);
    man.addImage(manI);
    man.scale=0.3;

    for (var i=70; i<Drop; i=i+50){
      drop.push(new Drop(random(0,400), (random(0,400))));
    }
    
    thunderGroup = new Group();

}

function draw(){
    background("black");

      man.display();
  

      for (var i=0; i<Drop.length; i++){
        //drop[i].display();
     }

     var rand = Math.round(random(1,4));
      switch(rand){
       case 1: thunder.addImage(thunderI1);
       break;
       case 2: thunder.addImage(thunderI2);
       break;
       case 3: thunder.addImage(thunderI3);
       break;
       case 4: thunder.addImage(thunderI4);
       break;
       }
      thunderGroup.add(thunder);

    drawSprites();

}   
