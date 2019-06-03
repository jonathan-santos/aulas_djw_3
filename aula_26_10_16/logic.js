var canvas = document.getElementById("Game");
var contexto = canvas.getContext("2d");

var frame = 0;
var cont = 9;

setInterval(update,1000/30);

//Método executado repetidamente no setInterval
    function update()
    {
        //Limpa o canvas
            contexto.clearRect(0, 0, canvas.width, canvas.height);
        
        contexto.font = "150px arial";
    
        contexto.fillText(cont, 400 - 150 / 4, 300 + 150 / 4);
        
        if(frame > 33)
        {
            atualizarTexto();        
        }
            
        frame++;
        
    }//Fim do método update

//Método executado para desenhar o cont no meio da tela
    function atualizarTexto()
    {
        
        if(cont > 0) { cont--; }
        frame = 0;
        
    }