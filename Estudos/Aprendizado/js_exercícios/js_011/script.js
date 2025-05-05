function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 5 && hora <= 12){
        img.src = 'image/dia.png';
    }else if(hora >= 13 && hora <= 18){
        img.src = 'image/tarde.png';
    }else{
        img.src = 'image/noite.png';
    }    
}
