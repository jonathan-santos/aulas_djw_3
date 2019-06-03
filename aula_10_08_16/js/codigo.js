console.log("Carregado.");

var nome_da_variavel;
nome_da_variavel = "Oi";
nome_da_variavel = 250;


var canvas, contexto;

canvas = document.getElementById("game");

console.log(canvas);

contexto = canvas.getContext("2d");

contexto.fillRect(0,5,200,200);
contexto.strokeRect(250,5,200,200);