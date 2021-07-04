var garden,rabbit;
var gardenImg,rabbitImg;
var appleimg,apple
var leaves,leafimg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg=loadImage("apple.png")
  leafimg=loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  rabbit.x=World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  createapples()
  createleaves()
 
  drawSprites();
}

function createapples(){

if(frameCount%60===0){
var apple=createSprite(50,50,5,5)
  apple.scale=0.05
apple.velocityY=2
apple.addImage(appleimg)
apple.x=Math.round(random(10,390))
}



}

function createleaves(){
 if(frameCount%60==0){
  var leaves =createSprite(100,50,10,10)  
  leaves.scale=0.08
  leaves.velocityY=2
leaves.addImage(leafimg)
leaves.x=Math.round(random(50,390))

 }

 
}