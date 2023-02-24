# Programming Digital Media

Projects from Programming Digital Media class at Louisiana State University, Spring 2023

-  Starter template 
   - [download](https://downgit.github.io/#/home?url=https://github.com/tatecarson/LSU-PDM-Spring-2021/tree/main/Week_1_T/starter-template) 
   - [p5 editor](https://editor.p5js.org/tcarso2/sketches/3Gs60W1g_)
  
---
## Topics Covered
### p5.js

### Tone.js
- Web audio basics and sound file players
- Adding effects and intro to synthesis
- Making synthesizers from scratch
- Scheduling signals and LFOs
- Instruments and Sequencers
- Sound Effects and Sequencers
- Rhythm / Scales / Tuning / Distributed smartphone music

### Arduino
-
* Digital out - [notes](Hardware_Week_1_Th)
    * Blink - blink an LED [[video](https://www.youtube.com/watch?v=5vkuxBmWNDo), [code](https://www.arduino.cc/en/Tutorial/Blink), [circuit diagram](Hardware_Week_1_Th/LED_Diagram_bb.jpg)]
    * Morse code introduction - how to do the morse code assignment. [[video](https://youtu.be/18gWlNBlRoQ)]
* Analog Out (Pulse Width Modulation) - [notes](Hardware_Week_2_T)
    * Tate's Fading tutorial - fade an LED [[video](https://www.youtube.com/watch?v=vd93XYizHJ8), [code](https://www.arduino.cc/en/Tutorial/Fading)]
    * Simron's fading tutorial - this covers the same information but might be useful for reinforcement. [[video](https://youtu.be/O1DLHSXtBhs)]
    * PWM game introduction - more PWM details and also introduces using a potentiometer. [[video](https://youtu.be/f03C7euWj6o)]
* Analog Input
  * Potentiometer - control the rate of blinking of the LED [[video](https://youtu.be/tU6CDI3UI34), [code](https://github.com/tatecarson/LSU-PDM-Spring-2020/blob/master/Hardware_Week_2_T/3_AnalogInput_FINISHED/3_AnalogInput_FINISHED.ino)]
      * Note: the intro to this was cut off but the circuit that is already there is from the blink tutorial. The thing i'm holding is a potentiometer that allows analog input between 0v and 5v.
  * Photoresistor - control circuit with light [[video](https://youtu.be/0vB-MQ8Xu80), [code](https://github.com/tatecarson/LSU-PDM-Spring-2020/blob/master/Hardware_Week_2_Th/fade_photoresistor/fade_photoresistor.ino)]
    * Note: I was referring to the serial monitor through this video but didn't realize that it wasn't recording the screen. You should be able to see it on your computer.
* Digital Input
  * turn an LED on and off with a button. [[video pt 1](https://youtu.be/70QLvamyvLY)]
  * the code for the button example [[video pt 2](https://youtu.be/O-ag-6QlpDA), [code](https://www.arduino.cc/en/Tutorial/Button)]
* Fading machine with states
  * Fade LED automatically or manually - press one button and the LED fades up and down automatically, press the other button and then you can fade the LED manually with a potentiometer. If nothing is pressed then the LED is off. [[video](https://youtu.be/JDvBIzrUiPI), [code](https://github.com/tatecarson/LSU-PDM-Spring-2020/blob/master/Hardware_Week_2_Th/fade/fade.ino) ]
  * with toggle buttons - updated version of the previous example but now with toggle buttons instead of momentary buttons. [[video](https://youtu.be/VrVjUOgyflo), [code](https://github.com/tatecarson/LSU-PDM-Spring-2020/blob/master/Hardware_Week_2_Th/fade_withStates/fade_withStates.ino)]
  * debouncing buttons - an example of debouncing a button to fix unpredictable button presses. Debouncing is when you set a threshold of time when only the first press gets recorded, everything else is ignored. This ensures that noise in a circuit is filtered out when necessary. [[video](https://youtu.be/BJc8L2R014s), [code](https://www.arduino.cc/en/Tutorial/Debounce)]
* Serial communication (Arduino <---> p5.js)
  * Basic setup - Arduino --> p5.js [[video](https://youtu.be/AuPWylJi1lU), [code](SerialTop5_Setup)]
  * p5.js --> Arduino [[video](https://youtu.be/zxaIv6GVosU), [code](Hardware_Week_3_T/writeExample)] 
  * Heart game [[video](https://youtu.be/GpBJrg_8Qgs)]  
  * Paint game with Arduino [[video](https://youtu.be/9-AXZToU-BM)]


### Digital Audio

- [Digital Sound and Music](http://digitalsoundandmusic.com/curriculum/) - explanations and definitions of all things digital sound
- [PDM Online Textbook](https://pdm.lsupathways.org/) - in development for highschool class but covers all necessary material

### JS Basics

- [freeCodeCamp](https://www.freecodecamp.org/)
- [codecademy](https://www.codecademy.com/learn/introduction-to-javascript)
- [MDN web docs Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - includes some tutorials and the standard javascript reference 
- [stackoverflow](https://stackoverflow.com/) - find answers or ask questions to javacript related things. 
