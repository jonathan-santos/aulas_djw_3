var canvas, contexto;
var fundo1, fundo2, fundo3;
var i = 0;
var j = 0;
var k = 0;

canvas = document.getElementById("MeuCanvas");
contexto = canvas.getContext("2d");

Fundo1 = new Image();
Fundo1.src = "../Imagens/Fundo_3.png";

Fundo2 = new Image();
Fundo2.src = "../Imagens/Fundo_1.png";

Fundo3 = new Image();
Fundo3.src = "../Imagens/Fundo_2.png";

function loop()
{
    contexto.clearRect(0,0,800,600);
    
    if(i == -800)
    {
        i = 0;    
    }
    
    if(j == -800)
    {
        j = 0;    
    }
    
    if(k == -800)
    {
        k = 0;    
    }
    
    contexto.drawImage(Fundo1, i, 0);// / 5
    contexto.drawImage(Fundo2, j, 0);// / 1.25
    contexto.drawImage(Fundo3, k, 0);// * 2.0
    
    i-= 0.2;
    j-= 0.5;
    k-= 2;
}

setInterval(loop, 33.33);