let img 

function setup()   {

    createCanvas(400, 400);
    background(255);
}
 
function draw() {

    stroke(255);
  point(width * 0.5, height * 0.5);
  point(width * 0.5, height * 0.25);
    fill(224,145,66);
    fill(0);
    noStroke(0);
    rect(150,205,115,120);//(chest)
    // rect(x, y, width, height)
    arc(250, 330, 150, 250, -PI, 0, CHORD);//L-shoulder
    arc(160, 330, 150, 250, -PI, 0, CHORD);//r-shoulder

    
    
  
 fill(224,145,66);
 stroke(0);
  strokeWeight (1);
  
  ellipse(200,150,175,170); //head 
  fill(255);
  
  ellipse(220,130,30,30);//L eye(R-L,U-D,x1, y1)
  ellipse(170,130,30,30);//R eye 
  fill(233,222,100);
  fill(223,204,200);
   ellipse(220,130,10,10);//L eye(R-L,U-D,x1, y1)
  ellipse(170,130,10,10);//R eye 
  fill (220,204,135);


  
  fill(190,200,750);
  noStroke();
  
 
  stroke(0);
 
  fill(255);
  arc(198,170,50,50,0,-PI);//mouth
    fill(0);
    arc(198,177,50,35,0,-PI);//R-L,U-D,X1,Y1*black in mouth*
  stroke(0);
  strokeWeight(1);
  line(175, 180, 220, 180);// line(x1, y1, x2, y2)top line
  line(173, 170, 223, 170); // bottom teeth edge
    line(200,170,200, 180); // tooth seperation
    line(210,170,210, 180); // tooth seperation
    line(180,170,180, 180); // tooth seperation 
    line(190,170,190, 180); // tooth seperatio
    
   strokeWeight(3);
   line(170,110,170, 115); // lash(L-eye)
  line(165,110,166, 115); // lash(L-eye)
   line(160,110,161, 116); // lash(L-eye)
 line(175,110,175, 116); // lash(L-eye)
  line(180,110,179, 116); // lash(L-eye)
  line(156,110,158, 119); // lash(L-eye)
   line(185,110,183, 119); // lash(L-eye)
  
   line(220,110,220, 115); // lash(R-eye)
  line(226,110,226, 115); // lash(R-eye)
   line(215,110,215, 116); // lash(R-eye)
 line(230,110,230, 118); // lash(R-eye)
  line(235,110,233, 119); // lash(R-eye)
  line(205,110,209, 119); // lash(R-eye)
   line(210,110,212, 117); // lash(R-eye)
 

}
