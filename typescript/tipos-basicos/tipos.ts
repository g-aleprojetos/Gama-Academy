//Boolean
const contaPaga: boolean = false;

//Number
const idade: number = 23;
const avaliacao: number = 4.5;

//String
const nome: string = 'Alexandre';

//Array
const idades: number[] = [23, 28, 45, 32];
const idades2: Array<number> = [23,345, 456, 46];

//Tuple
let jogadores: [string, number, boolean];
jogadores = ['Alexandre', 3, true];

//Enum
enum StatusAprovacao{
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any
const retornoDaAPI: any[] = [123, 'Alexandre, false'];
const retornoDaAPI2: any = {
    //...
}

//void
function printarNaTela(msn:string): void{
    console.log(msn);
}

//Null e Undefined
const u: undefined = undefined;
const n: null = null;

//object
function criar(objecto: object){
    //...
}
criar({
    propriedade:1,
})
//criar('Alexandre')//Dá erro - tipop string

//never
function loopInfinito(): never{
    while(true){}
}

function erro(mensagem: string): never{
    throw new Error(mensagem);
}

function falha(){
    return erro('Algo fahou');
}

