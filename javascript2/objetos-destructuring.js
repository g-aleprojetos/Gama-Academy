const pessoa = {
    nome:"Alexandre",
    idade: 43,
    cidade:"Suzano"
}

//Notação de ponto
console.log(pessoa.nome)

//Notação de colchetes
console.log(pessoa["idade"])

//Como desestruturar Objetos
const {nome, idade,cidade} = pessoa

console.log(nome)
console.log(idade)
console.log(cidade)

console.log("****************************")

const filmes = [
    {
        id:1,
        titulo:"Dilema das Redes",
        descricao:"Um documentario sobre tecnologia",
        duracao:120
    },
    {
        id:2,
        titulo:"US",
        descricao:"Um filme de terror legal demais",
        duracao:129
    },
    {
        id:3,
        titulo:"Corra",
        descricao:"Um filme de suspense bem demais",
        duracao:129
    }
]

const {id, titulo, descricao, duracao} = filmes

filmes.map(filme => console.log(filme.descricao))