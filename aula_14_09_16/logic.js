var canvas = document.getElementById("meuCanvas");
var contexto = canvas.getContext("2d");

//Preciso fazer um sistema de colisão entre duas imagens retangulares

//Imagens
    //Variável que contém o valor dos lados das imagens
        var lado = 100;

    //Dilma
        var dilma = new Image();
        dilma.src = "dilma.png";
        //Variáveis
            var dilma_PosX = aleatorio(1, canvas.width * 0.5);
            var dilma_PosY = aleatorio(1, canvas.height - 50);
            var dilma_AceX = 1;
            var dilma_AceY = 1;

    //Cunha
        var cunha = new Image();
        cunha.src = "cunha.png";
        //Variáveis
            var cunha_PosX = aleatorio(canvas.width * 0.5, canvas.width - 50);
            var cunha_PosY = aleatorio(canvas.height - 50 ,1); 
            var cunha_AceX = 1;
            var cunha_AceY = 1;

        console.log("dilma_PosX = " + dilma_PosX + "\ndilma_PosY = " + dilma_PosY + "\ncunha_PosX = " + cunha_PosX + "\ncunha_PosY = " + cunha_PosY);
        console.log("canvas.width = " + canvas.width + "\ncanvas.height = " + canvas.height);
        console.log("dilma_AceX = " + dilma_AceX + "\ndilma_AceY = " + dilma_AceY +  "\ncunha_AceX = " + cunha_AceX +  "\ncunha_AceY = " + cunha_AceY);
    
setInterval(loop,1);


//Laço de repetição principal
    function loop()
    {
        //Apaga todo o frame anterior
            contexto.clearRect(0,0,canvas.width,canvas.height);
        
        //Detecção de colisão
            colisao();
            
        //Atualiza as posições da Dilma e do Cunha
            atualizaPos();
        
        //Desenhando as imagens nas novas posições
            contexto.drawImage(dilma, dilma_PosX, dilma_PosY,100,100);
            contexto.drawImage(cunha, cunha_PosX, cunha_PosY,100,100);
    
    }//Fim do function loop

//Função para números randômicos
    function aleatorio(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

//Função para atualizar as posições tanto da Dilma quanto do Cunha
    function atualizaPos()
    {
            dilma_PosX += dilma_AceX;
            dilma_PosY += dilma_AceY;
            cunha_PosX += cunha_AceX;
            cunha_PosY += cunha_AceY;
    }

//Função para detectar colisão entre o Cunha e a Dilma
function colisao()
{
    //Colisão entre a Dilma e o Cunha    
        if(dilma_PosX < cunha_PosX + lado &&
           dilma_PosX + lado > cunha_PosX &&
           dilma_PosY < cunha_PosY + lado &&
           dilma_PosY + lado > cunha_PosY
          )
        {
            dilma_AceX *= -1;
            dilma_AceY *= -1;
            cunha_AceX *= -1;
            cunha_AceY *= -1;
            
        }
    
    //Colisão contra parede
        if(dilma_PosX < 0 || dilma_PosX + lado > canvas.width)
        {
            dilma_AceX *= -1;
        }
    
        if(dilma_PosY < 0 || dilma_PosY + lado > canvas.height)
        {
            dilma_AceY *= -1;
        }
    
        if(cunha_PosX < 0 || cunha_PosX + lado > canvas.width)
        {
            cunha_AceX *= -1;
        }
    
        if(cunha_PosY < 0 || cunha_PosY + lado > canvas.height)
        {
            cunha_AceY *= -1;
        }
    
}