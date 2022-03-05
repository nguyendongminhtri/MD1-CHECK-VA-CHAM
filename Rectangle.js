class Rectangle {
    constructor(x,y,width,height,colors) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.colors = colors;
    }
    drawRectangle(ctx){
        console.log('this.colors = ', this.colors)
        ctx.stroke();
        ctx.fillStyle = this.colors;
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.fill();
    }
    moveLeft(){
        this.x -= 20;
    }
    moveRight(){
        this.x +=20;
    }
    moveUp(){
        this.y -= 20;
    }
    moveDown(){
        this.y += 20;
    }
}
