function media(array){
    let soma = 0
    for(let c = 0; c < array.length; c++ ){
        soma += array[c];
    }
    return soma/ array.length
}
console.log(media([1,2,3]))