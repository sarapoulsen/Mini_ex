**Mini exercise 6**

The opening page of my program simply features a static gradient background. Then when you press the mouse, a circle is generated. If you click multiple times on the same spot with almost no pause inbetween, a tail of circles is generated that might look sort of like a worm moving around on the page. In screenshot 1 I've done this a bunch of times so eventually the entire pages is filled with worm-looking tails of circles. There are also other options, though. In screenshot 3 I've moved the mouse sporadically around the page and clicked whenever I felt like it, and it generates a very different pattern. This program approaches generativity in the way that in the beginning you as a user are in control of where the circles are drawn, but as they move around the page with a pretty high speed, the pattern quickly changes to something else; a pattern that you might say the program itself generates. 

I wanted to only use one shape in my program and my choice fell on the ellipse (even though I thought it looked very interesting with rectangles also). Anyway, I created a class called Circle that would determine the size, color, speed of movement etc. I used a for-loop to be able to show and move the class of circles and a mousePressed function. Initially I wanted this mousePressed function make use of a conditional statement where there would be an ellipse in the middle of the page and ONLY IF you clicked the mouse inside of that circle, it would generate new circles. However I ended up doing something more simple which is just printing the circles at the x- and y-coordinates of the mouse. 

I think there would be other and smarter ways to create my program the way I wanted it to be. Maybe I could've had replaced the mousePressed function with something that would generate a lot of circles when you pressed down the mouse for a longer time and then would stop generating circles when you released. 

I want to say that I had some difficulties with making this program as I, in previous mini exercises, had been very sure of the result that i wanted, whereas here I had to think of some rules first without really knowing what the program would end up generating. Now, I started off with basic rules like, what kind of shapes and colors did I want, but I found it hard to know which different functions or syntaxes I could use that would generate more than one shape. So basically the starting-completely-from-scratch approach was difficult for me. 

URL link to my program: https://rawgit.com/sarapoulsen/Mini_ex/master/mini_ex6/empty-example/index.html
no. 1
![ScreenShot](https://github.com/sarapoulsen/Mini_ex/blob/master/mini_ex6/Sk%C3%A6rmbillede%202018-03-18%20kl.%2013.55.35.png)
no. 2
![ScreenShot](https://github.com/sarapoulsen/Mini_ex/blob/master/mini_ex6/Sk%C3%A6rmbillede%202018-03-18%20kl.%2013.56.11.png)
no. 3
![ScreenShot](https://github.com/sarapoulsen/Mini_ex/blob/master/mini_ex6/Sk%C3%A6rmbillede%202018-03-18%20kl.%2013.57.01.png)
