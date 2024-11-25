import Ball from "./Balls";
import GameObject from "./GameObject";
import Input from "./Input";
import Player from "./Player";
import Enemy from "./Enemy"; 

export default class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.input = new Input(this);
    this.player = new Player(0, 0, 60, 60, "green", this);
    this.enemies = []; 
    this.spawnInterval = 2000; 
    this.lastSpawnTime = 0; 

    console.log("ny instans av game", this.width);
    this.box = new GameObject(40, 40, 200, 200, "purple");
    this.ball = new Ball(100, 200, 100, 100, "green");
  }

  update(deltaTime) {
    this.box.update(deltaTime);
    this.ball.update(deltaTime);
    this.player.update(deltaTime);

    this.lastSpawnTime += deltaTime;
    if (this.lastSpawnTime >= this.spawnInterval) {
      const enemy = new Enemy(Math.random() * this.width, Math.random() * this.height, 25, 25, "red", this.player);
      this.enemies.push(enemy);
      this.lastSpawnTime = 0; 
    }

    for (const enemy of this.enemies) {
      enemy.update();
    }
  }

  draw(ctx) {
    this.box.draw(ctx);
    this.ball.draw(ctx);
    this.player.draw(ctx);

    for (const enemy of this.enemies) {
      enemy.draw(ctx);
    }
  }
}