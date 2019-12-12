import processing.serial.*;

Serial myPort;
int val;    

void setup()
{
  
  size (450,450);
  String portName = Serial.list()[0];
  myPort = new Serial(this, portName, 9600);
  
}

void draw()
{
  
  //if ( myPort.available() > 0) {  // If data is available,
  //  val = int(myPort.read());         // read it and store it in val
  //}
  println(val);
  background(0);
  rect(60,120,325,200);
  fill(150,210,220);
  rect(60,100,325,50);
   fill(127,248,235);
   textSize(40);
     fill(255,252,0);
   text("WARNING",130,140);
 fill(0);
   textSize(20);
   text("Your Temperature is",100,200);
   text("below 72 degrees",200,230);
   fill(255);

  // textfill(255,252,0);
  
  
}

void serialEvent (Serial myPort) {
  String inString = myPort.readStringUntil('\n'); //read until new line (Serial.println on Arduino)
  if (inString != null) {
    inString = trim(inString); // trim off whitespace
    val = int(inString); // break string into an array and change strings to ints //for multiple variables
    //inputVars = int(inString); //for a single variable
  }
}
