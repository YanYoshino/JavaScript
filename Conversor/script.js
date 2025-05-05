let lista = []
let soma = 0
function adcionar(){
    let numero = document.getElementById("numero");
    let res = document.getElementById("analisador");
    let num = Number(numero.value);
    if(numero.value.length == 0 || num < 1 || num > 100 ){
        window.alert("Tente novamente, algo está errado");
    }else if(lista.includes(num)){
        window.alert("Já tem esse número")
    }else{
        let item = document.createElement("option");
        item.text = `O número ${num} foi adcionado.`
        res.appendChild(item)
        lista.push(num)
        soma += num 
    }
    numero.value = "";
    numero.focus();
}
function finalizar(){
    let mostra = document.getElementById("mostrar")
    let organiza = lista.sort((a,b) => a - b);
    let quantidade = lista.length
    if(lista.length == 0){
        window.alert("Adcione valor")
    }else{
        mostra.innerHTML = `Ao todo, temos ${quantidade} cadastrados. <br>
        O maior valor informado foi ${lista[quantidade - 1]} <br>
        O menor valor informado foi ${lista[0]} <br>
        Somando todos os valores, temos ${soma} <br>
        A média dos valores digitados é ${soma/quantidade}`
    }
}
