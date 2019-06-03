var canvas = document.getElementById("canvas1");
var contexto = canvas.getContext("2d");

console.log("Tudo certo!");

var quad;
var quadX = 1;
var quadY = 1;
var quadTamanho = 50;
var movX = 1;
var movY = 1;

function loop()
{
    contexto.clearRect(0,0,canvas.width,canvas.height);
    
    if(quadX < 0)
    {
        movX *= -1;
    }
    
    if(quadTamanho + quadX > canvas.width)
    {
        movX *= -1;
    }
    
    if(quadY < 0)
    {
        movY *= -1;
    }
    
    if(quadTamanho + quadY > canvas.height)
    {
        movY *= -1;
    }
    
    quad = contexto.fillRect(quadX,quadY,quadTamanho,quadTamanho);
    
    quadX += movX;
    quadY += movY;
}

setInterval(loop, 15);