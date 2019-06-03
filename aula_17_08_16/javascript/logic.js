var canvas = document.getElementById("game");

console.log(canvas);

var contexto = canvas.getContext("2d");

console.log(contexto);

loop();

var x = 0;

function loop()
{    
    contexto.clearRect(0,0,canvas.width,canvas.height)
    contexto.fillRect(x,0,50,50);
    x++;
}

setInterval(loop, 50);