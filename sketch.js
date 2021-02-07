var cat, mouse, backgroundImg;
var catImg1, catImg2, catImg3, mouseImg1, mouseImg2, mouseImg3, bgImg;
function preload() {
    //load the images here
    catImg1=loadAnimation("cat1.png");
    catImg2=loadAnimation("cat2.png","cat3.png");
    catImg3=loadAnimation("cat4.png");
    bgImg=loadAnimation("garden.png");
    mouseImg1=loadAnimation("mouse1.png")
    mouseImg2=loadAnimation("mouse2.png","mouse3.png");
    mouseImg3=loadAnimation("mouse4.png");
    
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    backgroundImg=createSprite(500,400);
    backgroundImg.addAnimation("background0",bgImg);

    cat=createSprite(800,650,50,50);
    cat.addAnimation("catSitting",catImg1);
    cat.addAnimation("catRunning",catImg2);
    cat.addAnimation("catFinalAnimation",catImg3);
    cat.scale=0.1;
    
    mouse=createSprite(200,650,50,50);
    mouse.addAnimation("mouseCheese",mouseImg1);
    mouse.addAnimation("mouseTease",mouseImg2);
    mouse.scale=0.1;
  
  cat.debug=true;
  mouse.debug=true;
  cat.setCollider("rectangle",0,0,cat.width,cat.height);
  mouse.setCollider("rectangle",0,0,mouse.width,mouse.height);

   
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    leftKey();

    if(cat.x - mouse.x < (cat.width/2-mouse.width/2)+50 ){
        cat.velocityX=0;        
        cat.changeAnimation("catFinalAnimation",catImg3);
        mouse.addAnimation("mouseFinalAnimation",mouseImg3);
        mouse.changeAnimation("mouseFinalAnimation",mouseImg3);
    }
  
    
  

    drawSprites();
  
  //print(cat.width+","+mouse.width);
    
}


function leftKey(){

  //For moving and changing animation write code here

  if(keyCode==LEFT_ARROW){
    
    cat.changeAnimation("catRunning",catImg2);
    
    mouse.changeAnimation("mouseTease",mouseImg2);
    cat.velocityX=-5;
  } 


}