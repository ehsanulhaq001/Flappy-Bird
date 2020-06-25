function Pipe() {
    this.x = width;
    this.width = 20;
    do {
        this.bottom = Math.floor(Math.random() * height);
        this.top = Math.floor(Math.random() * height);
    }
    while ((height - (this.bottom + this.top)) < 100);

    this.show = function() {
        ctx.beginPath();
        ctx.rect(this.x, height, this.width, -this.bottom);
        ctx.rect(this.x, 0, this.width, this.top);
        ctx.fillStyle = "lime";
        ctx.fill();
    }
    this.update = function() {
        this.x -= 1 * speed;
    }
}