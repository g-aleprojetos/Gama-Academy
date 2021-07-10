var num = 1
num = 5

if(num === 1){
console.log("num é igual a 1")
}else if(num === 2){
    console.log("num é igual a 2")
}else{
    console.log("num é igual a 5")  
}

var mes = "janeiro"

switch(mes){

    case"março":
    console.log("Março é o mes 3");
    break;

    case"fevereiro":
    console.log("Fevereiro é o mes 2");
    break;

    case"janeiro":
    console.log("Janeiro é o mes 1");
    break;

    default:
        console.log("nenhum dos casos acima foi atendido");
}