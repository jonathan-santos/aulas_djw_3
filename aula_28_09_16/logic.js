document.addEventListener('keydown', teclaPressionada);

function teclaPressionada(e)
{
    
    var hadouken = 0;
    
    //console.log(e.keyCode);
    if(e.keyCode == 32){ console.log("*"); }
    else if(e.keyCode == 37){ console.log("<"); }
    else if(e.keyCode == 38){ console.log("^"); }
    else if(e.keyCode == 39){ console.log(">"); }
    else if(e.keyCode == 40){ console.log("v"); }
    
    if(hadouken == 3) { console.log("Hadouken!"); }
}