//Temperature code 
int pinTemp = A0;
int ledPin = 13;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int temp = analogRead(pinTemp);
  temp = temp * 0.48828125;
//  Serial.print("Temperature: ");
  Serial.println(temp);
//  Serial.println("F");
//  delay(1000);
  if (temp >=71) { digitalWrite(ledPin, HIGH);
  }  else  {digitalWrite(ledPin, LOW);
  
  }
//analogWrite(11, map(temp, 71,80,0,255));
  }


