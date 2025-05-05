function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.getElementById("res");
    var idade = ano - Number(fano.value)
    var fsex = document.getElementsByName("radsex")
    var img = document.createElement("img")
    img.setAttribute("id", "foto")
    document.querySelector


    if(fano.value.length == 0 || Number(fano.value) > ano){
        res.innerHTML = "Não foi possível, tente novamente!"
    }else{
        if(idade < 12){
            if(fsex[0].checked){
                img.setAttribute("src", "image/1.png")
                res.innerHTML = `É uma criança do sexo Masculino`
            }else{
                img.setAttribute("src", "image/2.png")
                res.innerHTML = `É uma criança do sexo Feminino`
            }
        }else if(idade < 17){
            if(fsex[0].checked){
                img.setAttribute("src", "image/3.png") 
                res.innerHTML = `É uma Adolescente do sexo Masculino`
            }else{
                img.setAttribute("src", "image/4.png")
                res.innerHTML = `É uma Adolescente do sexo Feminino`
            }
        }else if(idade < 50){
            if(fsex[0].checked){
                img.setAttribute("src", "image/5.png") 
                res.innerHTML = `É uma Adulto do sexo Masculino`
            }else{
                img.setAttribute("src", "image/6.png")
                res.innerHTML = `É uma Adulto do sexo Feminino`
            }
        }else{
            if(fsex[0].checked){
                img.setAttribute("src", "image/7.png") 
                res.innerHTML = `É uma Idoso do sexo Masculino`
            }else{
                img.setAttribute("src", "image/8.png")
                res.innerHTML = `É uma Idoso do sexo Feminino`
            }
        }

        img.appendChild(img);
    } 

}