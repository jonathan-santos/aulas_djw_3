var canvas = document.getElementById("Game");
var contexto = canvas.getContext("2d");

//Outras vars
    var mov = 5;
    var tamanho = 50;

//Dilma
    var dilma = new Image();
    dilma.src = "dilma.png";    
    var xD = 10;
    var yD = 10;

//Cunha
    var cunha = new Image();
    cunha.src = "cunha.png";
    var xC = canvas.width - tamanho - 10;
    var yC = canvas.height - tamanho - 10;

//Controles
    var btnSetaDire = false;
    var btnSetaEsqu = false;
    var btnSetaCima = false;
    var btnSetaBaixo = false;

    var btnD = false;
    var btnA = false;
    var btnW = false;
    var btnS = false;

setInterval(update,1000 / 30);

function update()
{
    contexto.clearRect(0,0,canvas.width,canvas.height);
    
    document.addEventListener("keydown", function(e)
    { 

        if(e.keyCode == 65)
        { 
            btnA = true;
        }
        
        if(e.keyCode == 87)
        {
            btnW = true;
        }
        
        if(e.keyCode == 68)
        {
            btnD = true;
        }
        
        if(e.keyCode == 83)
        {
            btnS = true;
        }
        
        if(e.keyCode == 37){ 
            btnSetaEsqu = true;
        }
        
        if(e.keyCode == 38)
        {
            btnSetaCima = true;
        }
        
        if(e.keyCode == 39)
        {
            btnSetaDire = true;
        }
        
        if(e.keyCode == 40)
        {
            btnSetaBaixo = true;
        }
        
    }); 
    
    document.addEventListener("keyup",function(e)
    {        
        
        if(e.keyCode == 65)
        {
            btnA = false;
        }
        
        else if(e.keyCode == 87)
        {
            btnW = false;
        }
        
        else if(e.keyCode == 68)
        {
            btnD = false;
        }
        
        else if(e.keyCode == 83)
        {
            btnS = false;
        }
        
        //Cunha
        
        else if(e.keyCode == 37)
        {
            btnSetaEsqu = false;
        }
        
        else if(e.keyCode == 38)
        {
            btnSetaCima = false;
        }
        
        else if(e.keyCode == 39)
        {
            btnSetaDire = false;
        }
        
        else if(e.keyCode == 40)
        {
            btnSetaBaixo = false;
        } 
        
        
    });
    
    verificarBtns();
    
    contexto.drawImage(dilma,xD,yD,tamanho,tamanho);
    contexto.drawImage(cunha,xC,yC,tamanho,tamanho);

}

function verificarBtns()
{
    
    //Dilma
    if(btnA == true  && xD > 0)
    {
        xD -= mov;
    }
    
    if(btnW == true && yD > 0)
    {
        yD -= mov;
    }
    
    if(btnD == true && xD + tamanho < canvas.width)
    {
        xD += mov;
    }
    
    if(btnS == true  && yD + tamanho < canvas.height)
    {
        yD += mov;
    }
    
    //Cunha
    
    if(btnSetaEsqu == true && xC > 0)
    {
        xC -= mov;
    }
    
    if(btnSetaCima == true && yC > 0)
    {
        yC -= mov;
    }
    
    if(btnSetaDire == true && xC + tamanho < canvas.width)
    {
        xC += mov;
    }
    
    if(btnSetaBaixo == true && yC + tamanho < canvas.height)
    {
        yC += mov;
    }
    
    
}

function colisao()
{
    if(xD < xC + tamanho &&
       xD + tamanho > xC &&
       yD < yC + tamanho &&
       yD + tamanho > yC
    )
    {
        return true;
    }
    
    else
    {
        return false;
    }
}