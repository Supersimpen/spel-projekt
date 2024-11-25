import GameObject from "./GameObject";

export default class Enemy extends GameObject {
  constructor(x, y, width, height, color, player) {
    super(x, y, width, height, color);
    this.player = player; 
    this.speed = 0.05; 
  }

  update() {
    if (this.x < this.player.x) {
      this.x += this.speed;
    } else if (this.x > this.player.x) {
      this.x -= this.speed;
    }

    if (this.y < this.player.y) {
      this.y += this.speed;
    } else if (this.y > this.player.y) {
      this.y -= this.speed;
    }
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}