export default class GameObject {
    constructor(width, height, x, y, color){
        this.width = width
        this.height = height
        this.x = x
        this.y = y
        this.color = color
        this.speed = 1
    }



    update(deltaTime){
        this.x += this.speed
    }


    draw(ctx){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}


