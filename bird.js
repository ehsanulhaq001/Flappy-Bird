function Bird() {
    this.x = 100;
    this.y = height / 2;
    this.radius = 20;
    this.gravity = 0.1 * (1 + gravity / 2);
    this.velocity = 0;
    this.lift = -1 * (gravity) - 5;

    let imgPath = 'bird.png';
    let imgObj = new Image();
    imgObj.src = imgPath;
    imgObj.onload = function() {
        ctx.drawImage(imgObj, this.x, this.y);
    }

    this.show = function() {
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(imgObj, this.x - this.radius, this.y - this.radius);
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
        // ctx.fillStyle = "black";
        // ctx.fill();
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }

    this.up = function() {
        this.velocity += this.lift;
    }
}