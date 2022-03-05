class Circle {
    constructor(x,y,radius,colors) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.colors = colors;
    }
    drawCircle(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.colors;
        ctx.arc(this.x,this.y, this.radius,0,2*Math.PI);
        ctx.fill();
    }
    moveDown(){
        this.y +=50;
    }
}
