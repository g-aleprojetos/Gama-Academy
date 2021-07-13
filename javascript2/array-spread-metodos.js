//array
const alunasGama = ["Paula", "Maria", "Estela", "Clara"]

//Acessar informações num array
console.log(alunasGama[2])//"Estela"
console.log(alunasGama[3])//"Clara"

console.log("*********************************")

//oprador spread(...)
const alunasXp = [...alunasGama,"Simara"]
console.log(alunasXp)

console.log("*********************************")

//Metodos de interação
for(let i = 0; i < alunasXp.length;i++){
    console.log(alunasXp[i])
}
console.log("*********************************")
//map
alunasXp.map(aluna => console.log(aluna))

console.log("*********************************")

//filter
const numeros = [34,45,67,90,55,76]

const numerosImpares = numeros.filter(numero => numero%2 != 0)
console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero%2 == 0)
console.log(numerosPares)

console.log("*********************************")

const produtos = ["geladeira", "fogao", "cama", "mesa"]
//find
const produto1 = produtos.find(produto1 => produto1 === "cama")
console.log(produto1)
const produto2 = produtos.find(produto2 => produto2 === "mesa")
console.log(produto2)

console.log("*********************************")

const numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente)

const numerosOrdenadosDecrescente = numeros.sort((a,b)=>b-a)
console.log(numerosOrdenadosDecrescente)

console.log("*********************************")

//reduce - reduz nosso array a um resultado de uma operação matemática
const numbers = [1, 34, 35]

const soma = numbers.reduce((valorAnterior, valorAtual)=> {
    return valorAnterior + valorAtual
})

console.log(soma)//70