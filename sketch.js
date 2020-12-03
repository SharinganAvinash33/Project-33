const Bodies=Matter.Bodies
const Body=Matter.Body
const Constraint=Matter.Constraint
const Engine=Matter.Engine
const World=Matter.World
var divisions=[];
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var turns=0;
var Play=1;
var End=0;
var gameState=1;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    mousePressed();
    
    score=0;
}
function mousePressed(){
  if (gameState!=End){
    turns++;
    particles=new Particle(mouseX,10,10)
  }
} 


function draw() {
  Engine.update(engine);
  background("black");
  push();
  stroke("yellow")
  line(0,480,width,480)
  pop();
  textSize(20)
  noStroke();
  fill("white")
 text("Score : "+score,20,30);
 text("500",20,600);
 text("500",100,600);
 text("500",180,600);
 text("500",260,600);
 text("100",340,600);
 text("100",420,600);
 text("100",500,600);
 text("200",580,600);
 text("200",660,600);
 text("200",740,600); 


    
 if (gameState===Play){
  

 
  
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-60, width/2+60), 10,10));
     score++;
   }*/
 
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   ground.display();
   if(turns>5){
     gameState=End;
   } 
   if(particles!=null){
   /* for (var j = 0; j < particles.length; j++) {
   
      particles[j].display();
    }*/
    particles.display();
    if(particles.body.position.y>760){
      if(particles.body.position.x<300){
        score=score+500;
        
        
      }
      if(particles.body.position.x>301&&particles.body.position.x<600){
        score=score+100;
        
      }
      if(particles.body.position.x>601&&particles.body.position.x<900){
        score=score+200;
        
      }
      particles=null;
      
    }
   }

  }
  else if(gameState===End){
    textSize(50);
    text("Game Over",400,400);
  }
}




