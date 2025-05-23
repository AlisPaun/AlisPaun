var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

/*c.fillStyle = 'rgba(255, 0, 0, 0.1)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(231, 18, 203, 0.5)';
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'rgba(23, 199, 239, 0.5)';
c.fillRect(300, 300, 100, 100);

console.log(canvas);

//lines

c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = 'lightblue';
c.stroke();

//arc/circle
//c.beginPath();
//c.arc(300, 300, 30, 0, Math.PI * 2, false);
//c.strokeStyle = 'black';
//c.stroke();

/*for (var i = 0; i < 10; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'pink';
    c.stroke();
}
/*for (var i = 0; i < 10; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'yellow';
    c.stroke();
}
/*for (var i = 0; i < 10; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'red';
    c.stroke();
}*/

var x = 200;
var y = 200;
var dx = 4;
var dy = 4;
var radius = 30;
function animazione() {
    requestAnimationFrame(animazione);
    c.clearRect(0, 0, innerWidth, innerHeight
        );

    c.beginPath();
    c.arc(x, 200, 30, 0, Math.PI * 2, false

        );
    c.strokeStyle = 'red';
    c.stroke();
    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}
animazione();


