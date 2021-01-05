let gameBoard = document.getElementById("gameBoard")

let ctx = gameBoard.getContext("2d")

let start = document.getElementById("start")

let baseSpeed = 20

let title = document.getElementById("title")

let levelCounter = 0

// let newAudio = new Audio("https://soundcloud.com/drzlmusic/high-technology/s-khUppVXqh6c")

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
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
//asteroids
function Asteroid(x, y, color, width, height, speed) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    this.speed = speed
    this.detectHit = function () {
        if (ship.x + ship.width >= this.x &&
            ship.x <= this.x + this.width &&
            ship.y <= this.y + this.height &&
            ship.y + ship.height >= this.y) {
            clearInterval(gameInterval)
            loseGame()
        }
    }
    this.render = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    this.resetPosition = function () {
        if (this.y > gameBoard.height) {
            // this.y = 0 - this.height
            makeAsteroids()
        }
    }
}
//ship
let ship = new Ship(380, 400, "grey", 60, 65)

// let ship = new Ship(shipImage, 50, 50)
// let shipImage = ("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-yklwg&psig=AOvVaw3sx4X2yOD1bV-LVNmI6DeV&ust=1609882221175000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDZkuGcg-4CFQAAAAAdAAAAABAI")

//asteroid array
let asteroids = []

function makeAsteroids() {
    if (levelCounter == 10) {
        clearInterval(gameInterval)
        title.innerText = "Mission Accomplished!"
    } else {
        asteroids = []
        let asteroid1 = new Asteroid(spawnX(), -100, "brown", 100, 100, baseSpeed)
        let asteroid2 = new Asteroid(spawnX(), -100, "brown", 100, 100, baseSpeed)
        let asteroid3 = new Asteroid(spawnX(), -100, "brown", 100, 100, baseSpeed)
        asteroids.push(asteroid1)
        asteroids.push(asteroid2)
        asteroids.push(asteroid3)
        baseSpeed++
        levelCounter++
    }
}

function spawnX() {
    return Math.floor(Math.random() * (gameBoard.width - 100))

}
console.log(spawnX())

// gameloop function
function gameLoop() {
    ctx.clearRect(0, 0, gameBoard.width, gameBoard.height);
    ship.render();
    asteroids.forEach((element) => {
        element.y += element.speed
        element.render()
        element.detectHit()
        element.resetPosition()
    })
}

function loseGame() {
    title.innerText = "You're Dead :("
    console.log("crash")
}

// function playAudio() {
//     audio.play()
// }

let gameInterval

function startGame() {
    title.innerText = "Cosmic Cruisin'"
    baseSpeed = 20
    levelCounter = 0
    // playAudio()
    makeAsteroids()
    gameInterval = setInterval(gameLoop, 100)
}

start.addEventListener("click", startGame)

//game loop

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "w":
            ship.y -= 20
            break
        case "d":
            ship.x += 20
            break
        case "s":
            ship.y += 20
            break
        case "a":
            ship.x -= 20
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
