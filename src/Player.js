import GameObject from "./GameObject"

export default class Player extends GameObject {
  constructor(x, y, width, height, color, game) {
    super(x, y, width, height, color)
    this.game = game

    this.image = new Image()
    this.image.src = "./src/assets/DinoSprites - doux.png"


    this.frameWidth = 24
    this.frameHeight = 24
    this.frameX = 0
    this.frameY = 0
    this.maxFrames = 10
    this.timer = 0
    this.fps = 20
    this.interval = 1000 / this.fps

    this.speedX = 0
    this.speedY = 0
    this.maxSpeedX = 0.2
    this.jumpspeed = 20
  }

  update(deltaTime) {
    if (this.game.input.keys.has("ArrowLeft")) {
      this.speedX -= this.maxSpeedX
      this.flip = true
    }
    if (this.game.input.keys.has("ArrowRight")) {
      this.speedX += this.maxSpeedX
      this.flip = false
    }
    if (this.game.input.keys.has("ArrowRight") && this.game.input.keys.has("ArrowLeft")) {
      this.speedX = 0
    }
    if (!this.game.input.keys.has("ArrowRight") && !this.game.input.keys.has("ArrowLeft")) {
      this.speedX -= this.speedX
    }

    if (this.game.input.keys.has("ArrowUp")) {
      this.speedY -= this.jumpspeed
      console.log(this.speedY)
    }

    this.y += this.speedY
    this.x += this.speedX



    if (this.y > 320) {
      this.speedY = 0
    } else {
      this.speedY += 5
    }

    this.y += this.speedY
    this.x += this.speedX

    if (this.speedX != 0) {
      this.frameY = 0
      this.maxFrames = 10
    } else {
      this.frameY = 0
      this.maxFrames = 1
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

    if (this.x < 30) {
      this.x = 30
      this.speedX = 0
    }
    if (this.x > 800) {
      this.x = 800
      this.speedX = 0
    }

  }


  draw(ctx) {
    if (this.flip) {
      ctx.save()
      ctx.scale(-1, 1)
    }
    //ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    ctx.drawImage(
      this.image,
      this.frameWidth * this.frameX,
      this.frameHeight * this.frameY,
      this.frameWidth,
      this.frameHeight,
      this.flip ? this.x * -1 - this.width : this.x,
      this.y,
      this.width,
      this.height,
    )
    if (this.flip) {
      ctx.restore()
    }
  }
}