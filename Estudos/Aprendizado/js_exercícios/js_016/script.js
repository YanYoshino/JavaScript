function contar(){
    let inicio = document.querySelector("#txti");
    let fim = document.querySelector("#txtf");
    let passo = document.querySelector("#txtp");
    let res = document.querySelector("#res");



    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("Falta dados");
    }else{
        res.innerHTML = `Contando `
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value); 

        if(i < f){
            for(let c = i; c < f; c +=p){
                res.innerHTML += ` ${c} \u{1F449}`
            }

        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F481}`
    }
}