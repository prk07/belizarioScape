window.addEventListener('load', function(){ // on page load
 
    document.body.addEventListener('touchstart', function(e){
        var x = e.changedTouches[0].pageX;
        var y = e.changedTouches[0].pageY;
        
        var xTela = window.innerWidth;       
        var yTela = window.innerHeight;

     //  alert(x+" "+y);

        if (y<yTela/4 && inicia==false){
            start();        
        }                
        //PLAYER 
        if(((x<xTela/11.2&&y<yTela/1.37&&y>yTela/1.8)) && xPersonagem>xTela/4.1 && inicia == true) {     
            xPersonagem -= velocidade; //move para esquerda     
        }
        if(((x>xTela/6.8&&x<xTela/3.8&&y<yTela/1.35&&y>yTela/1.8)) && xPersonagem<x/1.1+xTela/1.92 && inicia == true) {
            xPersonagem += velocidade; //move para direita
        }
        if((y>yTela/2.5&&y<yTela/1.5&&x<xTela/6.7&&x>xTela/10.8) && yPersonagem>yTela/5 && inicia == true) {
            yPersonagem -= velocidade; //move para cima
        }
        if((y>yTela/1.5&&y<yTela&&x<xTela/6.7&&x>xTela/10.8) && yPersonagem<yTela/1.3 && inicia == true) {
            yPersonagem += velocidade; //move para baixo 
        }
    
    }, false);
 
}, false);

window.onkeydown = pressionaTecla;
function pressionaTecla(e) {
    //alert(e.keyCode);
    if (e.keyCode == 80 && inicia == true){
        pause(context);                      
    }
    if ((e.keyCode == 67 || e.keyCode == 32) && inicia == false){
        start();        
    }                
    //PLAYER 
    if((e.keyCode == 37 || e.keyCode == 65) && xPersonagem>x/4.1 && inicia == true) { 
        xPersonagem -= velocidade; //move para esquerda     
    }
    if((e.keyCode == 39 || e.keyCode == 68) && xPersonagem<x/4.3+x/1.92 && inicia == true) {
        xPersonagem += velocidade; //move para direita
    }
    if((e.keyCode == 38 || e.keyCode == 87)&& yPersonagem>y/5 && inicia == true) {
        yPersonagem -= velocidade; //move para cima
    }
    if((e.keyCode == 40 || e.keyCode == 83) && yPersonagem<y/1.3 && inicia == true) {
        yPersonagem += velocidade; //move para baixo 
    }
}
  