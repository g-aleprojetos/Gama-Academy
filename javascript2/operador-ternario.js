

var valorIdade = 19;

// if .. else
function calculeIdade1(idade){
    if(idade >= 18){
        return 'Maior de idade'
    }else{
        return 'Menor de idade'
    }
}
console.log(calculeIdade1(valorIdade))

//operador ternário
function calculeIdade2(idade){
   return  idade >=18 ? "Maior de idade" : "Menor de idade"
}
console.log(calculeIdade2(valorIdade))
