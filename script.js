let gameBoard = document.getElementById("gameBoard")

let ctx = gameBoard.getContext("2d")

gameBoard.setAttribute("height", getComputedStyle(gameBoard)["height"])
gameBoard.setAttribute("width", getComputedStyle(gameBoard)["width"])



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

let ship = new Ship(400, 460, "pink", 30, 35)


function gameLoop () {
    ctx.clearRect (0, 0, gameBoard.width, gameBoard.height)
    ship.render()
}

let gameInterval = setInterval (gameLoop, 100)


let moveShip = (e) => {
    console.log(e.key)
}

document.addEventListener("keydown", moveShip)