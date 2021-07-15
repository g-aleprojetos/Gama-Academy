class Data{
  // private dia: number;
  // private mes: number;
  // private ano: number;

constructor(public dia: number, public mes:number,public ano:number = 1970){
    
}

   // constructor(dia: number, mes:number, ano:number = 1970){
   //     this.dia = dia;
   //     this.mes = mes;
   //     this.ano = ano;
   // }
}

const data = new Data(14, 7, 2020)

const data2 = new Data(14, 7)