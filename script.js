let gameBoard = document.getElementById("gameBoard")

let ctx = gameBoard.getContext("2d")

gameBoard.setAttribute("height", getComputedStyle(gameBoard)["height"])
gameBoard.setAttribute("width", getComputedStyle(gameBoard)["width"])


//ship
function Ship(x, y, color, width, height, image) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    // this.image = image
    this.render = function () {
        // ctx.drawImage(this.image, this.x, this.y)
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
    this.detectHit = function () {
        if (ship.x + ship.width >= this.x && 
            ship.x <= this.x + this.width &&
            ship.y <= this.y + this.height &&
            ship.y + ship.height >= this.y) {
            clearInterval(gameInterval)
        }
    }
    this.render = function () {
        ctx.fillStyle = this.color
        ctx.fillRect (this.x, this.y, this.width, this.height)
    }
    this.resetPosition = function() {
        if (this.y > gameBoard.height) {
            this.y = 0 - this.height
        }
    }
}
//ship
let ship = new Ship(380, 400, "grey", 60, 65)

// let ship = new Ship(shipImage, 50, 50)
// let shipImage = ("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-yklwg&psig=AOvVaw3sx4X2yOD1bV-LVNmI6DeV&ust=1609882221175000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDZkuGcg-4CFQAAAAAdAAAAABAI")

//asteroids

//asteroid array
const asteroids = []
let asteroid1 = new Asteroid (100, -100, "brown", 100, 100)
let asteroid2 = new Asteroid (350, -100, "brown", 100, 100)
let asteroid3 = new Asteroid (600, -100, "brown", 100, 100)
asteroids.push(asteroid1)
asteroids.push(asteroid2)
asteroids.push(asteroid3)

// gameloop function
function gameLoop () {
    ctx.clearRect (0, 0, gameBoard.width, gameBoard.height);
    ship.render();
    asteroids.forEach((element) => {
        element.y += 20
        element.render()
        element.detectHit()
        element.resetPosition()
    }) 
}


//game loop
let gameInterval = setInterval(gameLoop, 100)


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

// function collide (ship) {
//     if (ship.y > gameBoard.height - 65) {
//         ship.y = gameBoard.height - 65; 
//      }
//      if (ship.y < 0) {
//          ship.y = 0;
//      }
//      if (ship.x > gameBoard.width - 60) {
//          ship.x = gameBoard.width - 60;
//      }
//      if (ship.x < 0) {
//          ship.x = 0;
//      }
// }

// function detectHit (ship, asteroid1) {
//     if (
//         ship.x + ship.width >= asteroid1.x &&
//         ship.x <= asteroid1.x + asteroid1.width &&
//         ship.y <= asteroid1.y + asteroid1.height &&
//         ship.y + ship.height >= asteroid1.y
//     ) {
//         console.log("hit")
//         return true
//     }
// }


