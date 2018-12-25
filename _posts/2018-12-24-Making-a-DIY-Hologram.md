---
layout: post
title: "Making a DIY Hologram"
categories: [technology]
tags: [DIY, hologram, 3D, effect, video, tutorial]
---

<img src="/assets/images/hologram.jpg" class="thumbnail">

I recently saw an [article](https://www.telegraph.co.uk/technology/mobile-phones/11780393/How-to-turn-your-phone-into-a-3D-hologram-projector.html) that teaches you how to make a very simple hologram with a bit of plastic and a phone. I've always been fascinated by holograms, so I decided to make one for my girlfriend as a little gift and have a bit of fun in the process. 

The final result can be seen below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/PNDoPP2o-Co" frameborder="0" allowfullscreen></iframe>

And here it is under normal light conditions.

<iframe width="560" height="315" src="https://www.youtube.com/embed/sWWBp5LZS3E" frameborder="0" allowfullscreen></iframe>

I've detailed the process below. Hopefully, it'll help people who might be doing similar projects.

#### Materials
* 0.2in / 5mm Birch Plywood
* 0.04in / 1mm Acrylic Sheet
* Raspberry Pi Zero module
* 3.5inch TFT LCD Display
* Gorilla Wood Glue

#### Finishing
* Rust-Oleum Semi-Gloss Black Paint
* Minwax Fast Drying Polyutherane Satin
* Minwax Wood Finish Penetrating Interior Wood Stain, Cherry
* Minwax Pre-stain Wood Conditioner

<img src="/assets/images/wood_finish.jpg" class="thumbnail">

### 1) Laser Cut the Box

The first step is to measure and set the dimensions of the box. I wanted the box to be shaped like a tube so that minimal amount of light will enter it from both the front and the back to prevent interference. The Raspberry Pi will be mounted on a center piece flanked by two pieces of wood on either side. The acrylic piece which reflects the LCD screen will be held by little wood angle brackets.

<img src="/assets/images/lasercut_box.svg" class="thumbnail">

The sides of the box were a little bare, so I decided to laser engrave a picture of us on the top and graphics of sheeps frolicking around on the sides. (Fun fact - Rachel means ewe in Hebrew.) I edited a photo we took this summer in Taiwan and cut out the foreground using Photoshop's "Quick Selection" tool, which is pretty magical.

*<sub>Original</sub>*

<img src="/assets/images/portrait_original.jpg" class="thumbnail">

*<sub>Cut</sub>*

<img src="/assets/images/portrait_cut.jpg" class="thumbnail">

I then applied the "Graphic Pen" filter in Photoshop and got a sketch-like effect as shown below.

<img src="/assets/images/portrait_sketch.png" class="thumbnail">

The sheep vectors were downloaded free from here (https://www.vecteezy.com/vector-art/85746-cute-sheep-vectors). I imported the assets into illustrator and converted the images into vectors using the "Image Trace" function. This is important as we want the images to be engraved as a series of lines, rather than an entire blob. The final vector file to be sent for engraving is shown below.

<img src="/assets/images/lasercut_everything.svg" class="thumbnail">

### 2. Staining Wood

After cutting out the design on birch plywood, I applied wood stain to the top side of each wooden piece so that the grain stands out a little more and the colour is a little richer. Before that, pre-stain has to be applied to prevent blotching. I found that it is better to be generous with the amount of pre-stain you apply. The rationale behind this is that wood absorbs stain unevenly so you kind of saturate it with pre-stain before using actual stain. The actual stain will be more evenly absorbed as a result.

*<sub>Before staining</sub>*

<img src="/assets/images/stain_before.jpg" class="thumbnail">

*<sub>After staining</sub>*

<img src="/assets/images/stain_after.jpg" class="thumbnail">

The under side of the wooden pieces are painted over with black paint. These will face inwards, so black paint is used to absorb as much light as possible. 

<img src="/assets/images/stain_painted.jpg" class="thumbnail">

### 3. Assemble the Box

Once everything is done, it's time to assemble the box together. Using cotton buds and wood glue, I glued the side walls to the bottom pieces first, then covered it up with the top wall. 

<img src="/assets/images/wood_glue.jpg" class="thumbnail">

There really isn't a need to apply as much glue as I did but I didn't know better since it's my first time using it. Wood glue is surprisingly strong, and it turns transparent when dry.

<img src="/assets/images/box_glued_front.jpg" class="thumbnail">

<img src="/assets/images/box_glued_side.jpg" class="thumbnail">

### 3. Set up the software

Once the box is assembled, I set up the Raspberry Pi Zero to display a looping 3D animation.

<iframe width="560" height="315" src="https://www.youtube.com/embed/wp7WiBWxDok" frameborder="0" allowfullscreen></iframe>

This is just a stock video I found on Youtube for now. If anyone has any interesting ideas of what I can 3D model to achieve the same effect, let me know. I chose to use a Raspberry Pi Zero because it is 5 bucks a pop and I have plenty of experience with it. To connect the Raspberry Pi to the 3.5 inch TFT LCD screen, a special driver has to be used which is linked [here](https://www.waveshare.com/wiki/3.5inch_RPi_LCD_\(A\)#Driver). A simpler solution would be to download the [pre-installed image](https://www.waveshare.com/wiki/3.5inch_RPi_LCD_\(A\)#Image) and flash the Raspberry Pi with it. Another advantage of using the pre-installed image is that a piece of necessary software named *fbcp*, which redirects HDMI output to the 3.5inch LCD screen, is pre-installed and automatically starts upon startup. This is extremely convenient as we would otherwise have to manually clone and make the [fbcp repository](https://github.com/tasanakorn/rpi-fbcp), then set up crontab to run it upon startup.

A small tip for anyone trying to start a video on the Raspberry Pi upon startup is to use the a Desktop entry to start the video within a terminal. This has two benefits. First, you gain access to the terminal from within the video is started. If you don't do this, the video will fill up your entire screen, and you have no way to terminate it because it is started as a background process. The second benefit is that the video will only start when the Desktop has loaded, which eliminates potential timing problems with the video attempting to start before any rendering modules has loaded.

A sample Desktop entry is shown below. You just have to save this file as `<task_name>.desktop` under `/home/<user_name>/.config/autostart`.

```
[Desktop Entry]
Encoding=UTF-8
Name=<Task Name>
Comment=<Task Description>
Exec=lxterminal -e omxplayer --no-osd --win 0,0,480,320 -o both /path/to/video/file.avi --loop
```

### 4. Applying finish

Finally, polyutherane is used to finish the wood. This protects the wood and gives it a shiny exterior. Being a total beginner, I had to apply and remove the finish several times before I could get the surface to be kind of even. Generally, the guide is to apply one coat, let it dry, sand over the surface, and then repeat this process three or four times. I read that you should avoid going over the same spot to fix mistakes in the same coat, but I found that it doesn't really matter if I oversaturate the surface and kind of let the excess distribute itself when drying. I know this is probably not ideal but it seems to give me the best results. The most important thing is to brush slowly and avoid air bubbles from forming. Once done, the box will have a shiny and beautiful surface. If needed, you can polish over the surface using a random orbit sander.

<img src="/assets/images/box_finished_side.jpg" class="thumbnail">

<img src="/assets/images/box_finished_top.jpg" class="thumbnail">

That's it! I hope you learnt something reading this and don't be afraid to share the cool stuff you've made!