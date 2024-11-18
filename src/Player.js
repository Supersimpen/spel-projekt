import GameObject from "./GameObject"

export default class Player extends GameObject {
  constructor(x, y, width, height, color, game) {
    super(x, y, width, height, color)
    this.game = game

    this.image = new Image ()
    this.image.src = "./src/assets/IDLE.png"
    this.image2 = new Image ()
    this.image2.src = "./src/assets/RUN.png"

    this.frameWidth = 96
    this.frameHeight = 100
    this.frameX = 0
    this.frameY = 0
    this.maxFrames = 10
    this.timer = 0
    this.fps = 20
    this.interval = 1000 / this.fps

    this.speedX = 0
    this.speedY = 0
    this.maxSpeedX = 0.2
  }

  update (deltaTime) {
    if (this.game.input.keys.has("ArrowLeft")) {
      console.log("pil vänster")
      this.speedX -= this.maxSpeedX
    }
    if (this.game.input.keys.has("ArrowRight")) {
      this.speedX += this.maxSpeedX
    }
    if (this.game.input.keys.has("ArrowRight") && this.game.input.keys.has("ArrowLeft")) {
      this.speedX = 0
    }
    if (!this.game.input.keys.has("ArrowRight") && !this.game.input.keys.has("ArrowLeft")) {
        this.speedX -= this.speedX
      }

    if (this.game.input.keys.has("ArrowUp")) {
      this.speedY -= this.maxSpeedY
    }

    

    console.log(this.y)
    if (this.y > 320) {
      this.speedY = 0
    } else {
      this.speedY += 5
    }

    this.y += this.speedY
    this.x += this.speedX

    if (this.speedX != 0) {
      this.frameY = 3
      this.maxFrames = 9
    } else {
      this.frameY = 0
      this.maxFrames = 7
    }
    if (this.timer > this.interval) {
      this.frameX++
      this.timer = 0
    } else {
      this.timer += deltaTime
    }
    if (this.frameX >= this.maxFrames) {
      this.frameX = 0
    }
  
  }
  

  draw(ctx){
    //ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    ctx.drawImage(
      this.image,
      this.frameWidth * this.frameX,
      this.frameHeight * this.frameY,
      this.frameWidth,
      this.frameHeight,
      this.x,
      this.y,
      this.width * 3,
      this.height * 3,
    )
  }
}