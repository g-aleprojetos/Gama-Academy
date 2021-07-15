class Carro{
    velocidadeAtual: number = 0;
    constructor(
        public marca:string,
        public modelo: string,
        private velocidademaxima: number = 220
    ){}

    private alterarVelocidade(delta: number){
    //Faço as validações de aceleração e frenagem
    //this.velocidade = xxx
    }

    acelerar(){
       this.alterarVelocidade(5);
   }

    frear(){
       this.alterarVelocidade(-5);
    }
}

const carro = new Carro('Chevrolet', 'Prisma', 250);
carro.acelerar();
