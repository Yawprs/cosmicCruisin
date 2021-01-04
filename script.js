let gameBoard = document.getElementById("gameBoard")

let ctx = gameBoard.getContext("2d")

gameBoard.setAttribute("height", getComputedStyle(gameBoard)["height"])
gameBoard.setAttribute("width", getComputedStyle(gameBoard)["width"])


//ship
function Ship(x, y, color, width, height) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    this.render = function () {
        ctx.fillStyle = this.color
        ctx.fillRect (this.x, this.y, this.width, this.height)
    }
}
//asteroids
function Asteroid(x, y, color, width, height) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    this.render = function () {
        ctx.fillStyle = this.color
        ctx.fillRect (this.x, this.y, this.width, this.height)
    }
}
//ship
let ship = new Ship(380, 400, "grey", 60, 65)

//asteroids
let asteroid1 = new Asteroid (100, 50, "brown", 100, 100)
let asteroid2 = new Asteroid (350, 50, "brown", 100, 100)
let asteroid3 = new Asteroid (600, 50, "brown", 100, 100)

// gameloop function
function gameLoop () {
    ctx.clearRect (0, 0, gameBoard.width, gameBoard.height);
    ship.render();
    asteroid1.render();
    asteroid2.render();
    asteroid3.render();
    ship.detectHit()
    // collideship);
    // var collide = detectHit
    // console.log("hit")
}

//game loop
let gameInterval = setInterval (gameLoop, 100,)

// ship movement
// function moveShip (key) {
//     switch (key) {
//         case "w":
//             ship.y -= 2
//             console.log(key)
//             break  
//         case "d":
//             ship.x += 10
//             break   
//         case "s":
//             ship.y += 10
//             break  
//         case "a":
//             ship.x -= 10  
//         }  
        // collide (ship)
// }


document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "w":
            ship.y -= 15
            break  
        case "d":
            ship.x += 15
            break   
        case "s":
            ship.y += 15
            break  
        case "a":
            ship.x -= 15  
            break
        }  
        if (ship.y > gameBoard.height - 65) {
            ship.y = gameBoard.height - 65; 
        }
        if (ship.y < 0) {
             ship.y = 0;
        }
        if (ship.x > gameBoard.width - 60) {
             ship.x = gameBoard.width - 60;
        }
        if (ship.x < 0) {
             ship.x = 0;
        }       
})
// document.addEventListener("keydown", (event) => {
//     event.preventDefault();
//     moveShip(event.code);
 
// })

function collide (ship) {
    if (ship.y > gameBoard.height - 65) {
        ship.y = gameBoard.height - 65; 
     }
     if (ship.y < 0) {
         ship.y = 0;
     }
     if (ship.x > gameBoard.width - 60) {
         ship.x = gameBoard.width - 60;
     }
     if (ship.x < 0) {
         ship.x = 0;
     }
}
// function asteroidFall () {
//     asteroid1.y + 10;
//     asteroid2.y + 10;
//     asteroid3.y + 10;
// }

function detectHit (ship, asteroid1, asteroid2, asteroid3) {
    if (
        ship.x + ship.width >= asteroid1.x &&
        ship.x <= asteroid1.x + asteroid1.width &&
        ship.y <= asteroid1.y + asteroid1.height &&
        ship.y + ship.height >= asteroid1.y
    ) {
        console.log("hit")
        return true
    }
}
