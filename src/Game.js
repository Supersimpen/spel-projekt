import GameObject from "./GameObject"

export default class Game {
  constructor(width, height){
    this.width = width
    this.height = height
    console.log("ny instans av game", this.width)
    this.box = new GameObject(40, 40, 200, 200, "purple")
  }

  update(deltaTime){
    this.box.update(deltaTime)
  }

  draw(ctx){
this.box.draw(ctx)
  }
}