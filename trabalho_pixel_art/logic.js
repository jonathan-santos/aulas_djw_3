var canvas = document.getElementById("game");

var context = canvas.getContext("2d");

//Bordas pretas
    //Cor preta
        context.fillStyle = "#000000";

    //Grandes faixas
        for(var i = 50; i < 325; i+= 25)
        {
            context.fillRect(i,0,25,25);
            context.fillRect(i,350,25,25);
            context.fillRect(0,i,25,25);
            context.fillRect(350,i,25,25);
        }

    //Pequenos quadrados
        context.fillRect(25,25,25,25);
        context.fillRect(325,25,25,25);
        context.fillRect(25,325,25,25);
        context.fillRect(325,325,25,25);


//Bordas amarelas escuras
    //Cor amarela escuro
        context.fillStyle = "#cd950c";

    //Grandes faixas amarelas
        for(var i = 50; i < 325; i+= 25)
        {
            context.fillRect(i,25,25,25);
            context.fillRect(i,325,25,25);
            context.fillRect(25,i,25,25);
            context.fillRect(325,i,25,25);
        }

//Caixa amarelas
    //Cor amarela
        context.fillStyle = "#ffd700";

    //Enchendo com varias faixas
        for(var i = 50; i < 325; i+= 25)
        {
            for(var j = 50; j < 325; j+= 25)
            {
                context.fillRect(i,j,25,25);
                context.fillRect(j,i,25,25);
            }
        }

//Bordas do ponto de interrogação
    //Cor preta
        context.fillStyle = "#000000";

    //Centro
        fazerQuadrado(150,125);

    //Pequenas faixas horizontais
        fazerFaixaHorizontal(150,225);
        fazerFaixaHorizontal(175,225);
        fazerFaixaHorizontal(150,300);
        fazerFaixaHorizontal(175,300);
        fazerFaixaHorizontal(75,150);
        fazerFaixaHorizontal(225,200);
        //parte de cima
        fazerFaixaHorizontal(100,50);
        fazerFaixaHorizontal(150,50);
        fazerFaixaHorizontal(200,50);
        fazerFaixaHorizontal(225,50);

    //Pequenas faixas verticais
        fazerFaixaVertical(50,100);
        fazerFaixaVertical(300,100);
        fazerFaixaVertical(300,125);
        fazerFaixaVertical(125,175);
        fazerFaixaVertical(125,250);
        fazerFaixaVertical(225,250);

        

    //Pequenos quadrados
        context.fillRect(75,75,25,25);
        context.fillRect(275,75,25,25);
        context.fillRect(275,175,25,25);
        context.fillRect(125,150,25,25);
    


//Ponto de interrogação branco
    //Cor preta
        context.fillStyle = "#ffffff";

    //parte blanca
        fazerQuadrado(75,100);
        fazerQuadrado(100,75);
        fazerQuadrado(150,75);
        fazerQuadrado(200,75);
        fazerQuadrado(225,100);
        fazerQuadrado(225,125);
        fazerQuadrado(150,175);
        fazerQuadrado(150,250);

    //Pequena parte blanca
        context.fillRect(225,175,25,25);
        context.fillRect(250,175,25,25);
        


//funcao para seis quadrados

function fazerQuadrado(x, y)
{
    for(var i = 0; i < 51; i+= 25)
    {
        context.fillRect(x + i, y, 25, 25);
        context.fillRect(x + i, y + 25, 25, 25);
    }
}

function fazerFaixaHorizontal(x,y)
{
    for(var i = 0; i < 26; i+= 25)
    {
        context.fillRect(x + i,y,25,25);
    }
}

function fazerFaixaVertical(x,y)
{
    for(var i = 0; i < 26; i+= 25)
    {
        context.fillRect(x,y + i,25,25);
    }
}

//Pequenas faixas pretas
    //Cor preta
        context.fillStyle = "#000000";
        
    for(var i = 25; i < 300; i+= 25)
    {
        for(var j = 25; j < 350; j+= 25)
        {
            context.moveTo(i,j);
            context.lineTo(i + 75,j);
            context.stroke();

            context.moveTo(j,i);
            context.lineTo(j,i + 75);
            context.stroke();
        }
    }
