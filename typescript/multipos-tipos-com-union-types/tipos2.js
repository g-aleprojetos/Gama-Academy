"use strict";
//union Types
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10');
exibirNota(10);
var funcionarios = [{
        nome: 'Alexandre',
        sobrenome: 'Gonçalves',
        dataNascimento: new Date()
    }, {
        nome: 'Fulano',
        sobrenome: 'Gonçalves',
        dataNascimento: new Date()
    }];
var funcionarios1 = ['Alexandre', 'Fulano', 'Ciclano'];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionário: ,funcionario.nome');
    }
}
