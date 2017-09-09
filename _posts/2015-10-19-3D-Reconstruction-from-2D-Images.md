---
layout: post
title: 3D Reconstruction from 2D Images
categories: [projects, hacking]
tags: [3D, reconstruction, photogrammetry, multi-view stereo]
fullview: true
---

As part of our orbital project, my friend Lee Kai Yi and I created a web service which will reconstruct 3D models from a collection of 2D images, also known as photogrammetry.

Simply upload multiple photos of an object from different angles, and a 3D model of that object will be reconstructed. 

The more photos you upload, the better the quality of reconstruction. Quality also depends on setting, such as lighting, angle, etc. It is recommended that photos be taken with large overlaps so the resulting model will be more accurate.

Based on [Bundler](http://www.cs.cornell.edu/~snavely/bundler/), an open source photogrammetry project.

[Source](http://github.com/changchuming/3dscanbot)

![Components]({{ site.BASE_PATH }}/assets/images/3dify1.jpg)
![Components]({{ site.BASE_PATH }}/assets/images/3dify2.jpg)
![Components]({{ site.BASE_PATH }}/assets/images/3dify3.jpg)