var canvas;
var music;
var pinkBox,blueBox,greenBox,purpleBox,redBox,yellowBox;
var moon,star1,star1Image;
var groundImage,ground;
var rightEdge,leftEdge,bottomEdge,topEdge;
function preload(){
    music = loadSound("music.mp3");
    star1Image=loadImage("starImage.png");
    groundImage=loadImage("starNight.png");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    ground=createSprite(500,400);
    ground.addImage(groundImage);
    
   
    var rightEdge=createSprite(798,300,1,600);
    rightEdge.shapeColor=("black");

    var leftEdge=createSprite(1,300,1,600);
    leftEdge.shapeColor=("black");

    var bottomEdge=createSprite(500,598,1000,1);
    bottomEdge.shapeColor=("black");

    var topEdge=createSprite(500,2,1000,1);
    topEdge.shapeColor=("black");
    
   var moon=createSprite(700,90,80,80);
   moon.shapeColor=("WHITE");

   var star1=createSprite(350,190,20,20);
   star1.shapeColor=("silver");
   star1.addImage(star1Image);
   star1.scale=0.04;
   //star1.velocity=-4;

   var pinkBox=createSprite(60,590,100,10);
    pinkBox.shapeColor=("pink");
 
    var blueBox=createSprite(200,590,100,10);
    blueBox.shapeColor=("blue");
 
    var greenBox=createSprite(340,590,100,10);
    greenBox.shapeColor=("green");
 
    var purpleBox=createSprite(475,590,100,10);
    purpleBox.shapeColor=("purple");
 
    var redBox=createSprite(610,590,100,10);
    redBox.shapeColor=("red");
 
    var yellowBox=createSprite(740,590,100,10);
    yellowBox.shapeColor=("yellow");
   //create box sprite and give velocity
  
}

function draw() {
   
    //create edgeSprite
   
   
    createEdgeSprites();
   if(star1.isTouching(bottomEdge)){
       star1.bounceOff();
   }
    drawSprites();
    //add condition to check if box touching surface and make it box
}



  
