---
title: "Rainbow"
date: 2024-05-28
---

# Rainbow experiment

In this project, we explore methods for creating creative code, paying special attention to the p5. js programming language, in which users can add various particles of various shapes and change their shape without having to reboot or update. The basis or source of inspiration for this work was the example of working with particle systems in the classroom. The goal was to play with visual effects such as particle motion, color variations, and shape distortions in order to truly draw attention to aesthetics and engage the viewer.
The code development process began with the creation of a basic particle system. Depending on the probability depending on the mouse position, the velocity and position of each particle are set randomly. This system can constantly create new particles and move them, many of which disappear over time. In this case, two parameters can be changed using object-oriented scripting to determine the movement of individual particles and the particle system as a whole.
Another creative and rather controversial concept in this project, requiring critical reflection, was the color change. When the lifetime of the particles causes a change in hue, the particles acquire an iridescent hue as soon as they disappear. This was done using the HSB color mode, which is an improved method compared to the basic color mode, since it allows you to bind the color gradient to the lifetime of the particle.
Another feature of this project that requires attention is the morphology, in which particles are depicted in the process of changing shape. Each particle is a convex polygon, the shape of which becomes round/star-shaped when moving. This is made possible by the modified drawMorphingShape function, which draws a circle and a star and uses a sinusoidal function to interpolate between two circles depending on their radii. This interpolation provides a clear transition from one shape to another – as a result, the particles acquire greater depth and attractiveness.

[Try it!](/skills-github-pages/Experiment11/Rainbow1/index.html)
