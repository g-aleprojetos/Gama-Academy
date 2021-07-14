//union Types
const nota: string | number = 5;

function exibirNota(nota: number | string){
    console.log(`A nota é ${nota}`);
}

exibirNota('10')
exibirNota(10)

//Alias
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

const funcionarios: Funcionario[] = [{
    nome:'Alexandre',
    sobrenome: 'Gonçalves',
    dataNascimento: new Date()
},{
    nome:'Fulano',
    sobrenome: 'Gonçalves',
    dataNascimento: new Date()
}];


type Funcionarios1 = Array<string>;
const funcionarios1: Funcionarios1 = ['Alexandre', 'Fulano', 'Ciclano']

function tratarFuncionarios(funcionarios: Funcionario[]){
    for(let funcionario of funcionarios){
        console.log('Nome do funcionário: ,funcionario.nome')
    }
}

//valores nulos
let altura: number | null = 1.6;
altura = null;

type Contatos = {
    nome: string;
    telefone1: string;
    telefone2?: string; //? indica que é opcional
}

const contato: Contatos = {
    nome: 'Alexandre',
    telefone1: '123456789',
}

//Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();
//(<number>minhaIdade).toString();

const input = document.getElementById("numero1") as HTMLInputElement;
console.log(input.value);

const input1 = <HTMLInputElement>document.getElementById("numero2");
console.log(input1.value);