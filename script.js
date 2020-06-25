let pipes = [];
let time = 0;
let gravity = 1;
let speed = 1;

window.onload = function() {
    setBackground();
    setup();
    document.addEventListener("keydown", keyPress);
    setInterval(draw, 1000 / 100);
}

function setup() {
    cnv = document.querySelector("#game");
    width = cnv.width = 600;
    height = cnv.height = 600;
    cnv.style.backgroundColor = "black";
    ctx = cnv.getContext("2d");
    bird = new Bird();
}

function draw() {

    width = cnv.width = 600 * (1 + 0.1 * speed);

    let preGrav = gravity;
    gravity = document.querySelector("#gravity").value;
    document.querySelector("#showGravity").innerHTML = gravity;

    speed = document.querySelector("#speed").value;
    document.querySelector("#showSpeed").innerHTML = speed;

    if ((gravity != preGrav)) {
        setup();
    }
    bird.show();
    bird.update();

    if (time == 0) {
        pipes.push(new Pipe());
        time = -Math.floor(200 / speed);
    }
    if (pipes.length > 7) {
        pipes.shift();
    }
    for (let i = 0; i < pipes.length; i++) {
        pipes[i].show();
        pipes[i].update();
        if (((bird.y - bird.radius < pipes[i].top) || (bird.y + bird.radius > (height - pipes[i].bottom))) &&
            (bird.x > pipes[i].x - bird.radius && bird.x - bird.radius < pipes[i].x + pipes[i].width)) {
            ctx.beginPath();
            ctx.rect(pipes[i].x, height, pipes[i].width, -pipes[i].bottom);
            ctx.rect(pipes[i].x, 0, pipes[i].width, pipes[i].top);
            ctx.fillStyle = "red";
            ctx.fill();
        }
    }
    time++;
}

function keyPress(e) {
    if (e.keyCode == 38) {
        bird.up();
    }
}

function setBackground() {
    back = document.querySelector("#background");
    back.width = screen.width;
    back.height = screen.height;
    back.style.backgroundColor = "black";
    backctx = back.getContext("2d");

    backctx.beginPath();

    backctx.moveTo(0, back.height * 1 / 6);
    backctx.lineTo(back.width, back.height * 1 / 6);
    backctx.moveTo(0, back.height * 2 / 6);
    backctx.lineTo(back.width, back.height * 2 / 6);
    backctx.moveTo(0, back.height * 3 / 6);
    backctx.lineTo(back.width, back.height * 3 / 6);
    backctx.moveTo(0, back.height * 4 / 6);
    backctx.lineTo(back.width, back.height * 4 / 6);
    backctx.moveTo(0, back.height * 5 / 6);
    backctx.lineTo(back.width, back.height * 5 / 6);

    backctx.moveTo(back.width * 1 / 6, 0);
    backctx.lineTo(back.width * 1 / 6, back.height);
    backctx.moveTo(back.width * 2 / 6, 0);
    backctx.lineTo(back.width * 2 / 6, back.height);
    backctx.moveTo(back.width * 3 / 6, 0);
    backctx.lineTo(back.width * 3 / 6, back.height);
    backctx.moveTo(back.width * 4 / 6, 0);
    backctx.lineTo(back.width * 4 / 6, back.height);
    backctx.moveTo(back.width * 5 / 6, 0);
    backctx.lineTo(back.width * 5 / 6, back.height);

    backctx.strokeStyle = "rgb(20, 90,90)";
    backctx.stroke();
    backctx.beginPath();

    backctx.moveTo(0, back.height * 1 / 12);
    backctx.lineTo(back.width, back.height * 1 / 12);
    backctx.moveTo(0, back.height * 3 / 12);
    backctx.lineTo(back.width, back.height * 3 / 12);
    backctx.moveTo(0, back.height * 5 / 12);
    backctx.lineTo(back.width, back.height * 5 / 12);
    backctx.moveTo(0, back.height * 7 / 12);
    backctx.lineTo(back.width, back.height * 7 / 12);
    backctx.moveTo(0, back.height * 9 / 12);
    backctx.lineTo(back.width, back.height * 9 / 12);
    backctx.moveTo(0, back.height * 11 / 12);
    backctx.lineTo(back.width, back.height * 11 / 12);

    backctx.moveTo(back.width * 1 / 12, 0);
    backctx.lineTo(back.width * 1 / 12, back.height);
    backctx.moveTo(back.width * 3 / 12, 0);
    backctx.lineTo(back.width * 3 / 12, back.height);
    backctx.moveTo(back.width * 5 / 12, 0);
    backctx.lineTo(back.width * 5 / 12, back.height);
    backctx.moveTo(back.width * 7 / 12, 0);
    backctx.lineTo(back.width * 7 / 12, back.height);
    backctx.moveTo(back.width * 9 / 12, 0);
    backctx.lineTo(back.width * 9 / 12, back.height);
    backctx.moveTo(back.width * 11 / 12, 0);
    backctx.lineTo(back.width * 11 / 12, back.height);

    backctx.strokeStyle = "rgb(10, 120,120)";
    backctx.stroke();
}