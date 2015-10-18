---
layout: post
title: Controlling aircon via bluetooth
categories: [technology, hacking]
tags: [arduino, nano, bluetooth, HC-06, JY-MCU, aircon, controller]
fullview: true
---

I live in a student dormitary where the aircon controller is attached to the wall next to the door. I guess I should be content with air conditioning, but it is the nature of human beings that we are never satisfied. Sometimes, I find myself wishing for a remote to turn off my aircon or change the temperature at night when I'm in bed. Since I have always been wanting to do something with my Arduino, I decided to make my aircon bluetooth compatible with my phone.

#### Components used
* Arduino Nano (shown below)
* HC-06 bluetooth module (shown below)
* 9v battery
* 100 ohm resistor
* 220 ohm resistor
* 10k ohm resistor
* Wires

![Components]({{ site.BASE_PATH }}/assets/images/aircon1.jpg)

#### 1. Wiring the controller
After testing the switches on my aircon controller, I determined that they are active-low and that a single pulse is sent whenever a switch is depressed. I connected the on/off toggle switch and the temperature control switches to pins 10, 11 and 12 on the Arduino. I then wired up the HC-06 bluetooth module to the Arduino by connecting the TX on the blueooth module to RX on the Arduino and vice-versa. Note that the bluetooth module uses a logic level of 3.3v while the Arduino uses 5v, so the TX line from the Arduino needs to be divided using a potential divider circuit to prevent it from damaging the bluetooth module. This is done by connecting a 100 ohm resistor in series and a 220 ohm resistor in parallel with it. The other line can be directly connected as the Arduino is 3.3v tolerant. The whole circuit is powered by a 9v battery. The schematic can be seen below.

![Schematic]({{ site.BASE_PATH }}/assets/images/aircon2.png)

<!--- The connections to the aircon controller are shown below. The black wire is the ground while the blue wires are the on/off, temp up and temp down switches. The red wire is the live wire and is not used.

![Controller]({{ site.BASE_PATH }}/assets/images/aircon3.jpg) -->

#### 2. Program the Arduino
After wiring the controller, we need to make sure that the Arduino recognize signals from the bluetooth module. I programmed the Arduino to always output HIGH on pins 10, 11 and 12 unless a signal is received which will toggle the pin to LOW for half a second. This effectively mimics the pressing of the switch. The Arduino code is shown below:

~~~ bash
#include <SoftwareSerial.h>
char receivedChar;
int powerPin = 12; // power pin
int tempUpPin = 11; // to increase temperature
int tempDownPin = 10; // to decrease temperature
SoftwareSerial mySerial(0, 1); // bluetooth serial RX,TX

void setup()
{
  // Set pins as output
  pinMode(powerPin, OUTPUT);
  pinMode(tempUpPin, OUTPUT);
  pinMode(tempDownPin, OUTPUT);
  // Set pins as high initially (active low logic)
  digitalWrite(powerPin, HIGH);
  digitalWrite(tempUpPin, HIGH);
  digitalWrite(tempDownPin, HIGH);  
  // Open serial communications and wait for port to open
  mySerial.begin(9600);
  mySerial.println("Sending a '1' will turn toggle aircon on/off");
  delay(1000);
  mySerial.println("Sending a '2' will increase temperature");
  delay(1000);
  mySerial.println("Sending a '3' will decrease temperature");
}

void loop()
{

  while (!mySerial.available());   // Wait for COM port to open
  receivedChar = mySerial.read();
  if (receivedChar == '1') {
    digitalWrite(powerPin, LOW);
    delay(50);
    digitalWrite(powerPin, HIGH);
  } // Toggle power pin to simulate button press
  if (receivedChar == '2') {
    digitalWrite(tempUpPin, LOW);
    delay(50);
    digitalWrite(tempUpPin, HIGH);
  } // Toggle temp up pin
  if (receivedChar == '3') {
    digitalWrite(tempDownPin, LOW);
    delay(50);
    digitalWrite(tempDownPin, HIGH);
  } // Toggle temp down pin
}
~~~

#### 3. Testing the setup
After everything is done, I downloaded Bluetooth Terminal on my phone and paired it with the bluetooth module using the default code '1234'. I received the following on my phone.

~~~ bash
Sending a '1' will turn toggle aircon on/off
Sending a '2' will increase temperature
Sending a '3' will decrease temperature
~~~

Yes, success! The final product is shown below.

![Final product]({{ site.BASE_PATH }}/assets/images/aircon4.jpg)

The only caveat is that this is extremely power inefficient and the 9v battery won't last long. I am planning to replace this with an Arduino on breadboard and use a bluetooth low energy chip which can last a few months on two AA batterys. Any updates will be posted!