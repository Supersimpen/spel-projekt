import Ball from "./Balls"
import GameObject from "./GameObject"
import Input from "./Input"
import Player from "./Player"

export default class Game {
  constructor(width, height){
    this.width = width
    this.height = height
    this.input = new Input(this)
    this.player = new Player(0, 0, 25, 25, "green", this)
    console.log("ny instans av game", this.width)
    this.box = new GameObject(40, 40, 200, 200, "purple")
    this.ball = new Ball(100, 200, 100, 100, "red")
  }

  update(deltaTime){
    this.box.update(deltaTime)
    this.ball.update(deltaTime)
    this.player.update(deltaTime)
  }

  draw(ctx){
    this.box.draw(ctx)
    this.ball.draw(ctx)
    this.player.draw(ctx)
  }
}