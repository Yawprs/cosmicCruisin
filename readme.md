                            ~~~~ Cosmic Cruisin' ~~~~


~~~~Instructions~~~~
You're chillin', five-star laid-back, flying your spaceship thru the cosmos when all of the sudden a goddamn flock of asteroids comes outta no where!! 
Dodge this evil space junk using 'wasd'. 

~~~~HTML/CSS~~~~
I used html and css to create my webpage and canvas, the background of the canvas if styled with css.

~~~~JS~~~~
JavaScript controls everything on this page. First I rendered the spaceship and implemented movement using a "keydown" event listener. I created a boundary so the ship stays on the canvas. Next I added asteroids but at first they were just rendered onto the canvas in a static position. 

I used constructors for the ship and asteroids. Within the asteroid constructor I used a makeAsteroid function which uses MAth.random to change the x coordinate spawn of the asteroids. Also in the asteroid constructor I used collision detection to check if an asteroid hits the ship.

levelSpeed increases the speed at which the asteroids fall with each pass they do. levelCounter counts how many waves you have been through. 

I have a gameLoop running to track the movement of the pieces. It checks for changes, then clears, then re-renders everything on the canvas every 100 milliseconds. 

Lastly, I have a start button, with an eventListener which on click begins the game (via function). The button also acts as a reset button.