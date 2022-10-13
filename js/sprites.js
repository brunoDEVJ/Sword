class Sprite {
    constructor({
        position, dimensions
    }) {
        this.position = position
        this.width = dimensions.width
        this.height = dimensions.height
    } 

    draw() {
        ctx.fillStyle = "white"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)

    }
}

const player = new Sprite({
    position: {
       x: 0,
       y: 0 
    }, 
        dimensions: {
            width: 50,
            height: 150
        }
})