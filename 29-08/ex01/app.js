const MeuArray = require('./MeuArray.js');

// let minha_variavel = new MeuArray();

// minha_variavel.adicionar(10);
// console.table(minha_variavel.items);

// minha_variavel.adicionar(20);
// console.table(minha_variavel.items);

// minha_variavel.adicionar(30);
// console.table(minha_variavel.items);

// console.log(minha_variavel.obterElemento(1));
// console.log(minha_variavel.tamanhoArray());

// console.log(minha_variavel.remover());

// console.log(minha_variavel.tamanhoArray());

const tarefas = new MeuArray();

tarefas.adicionar("Tarefa 1");
tarefas.adicionar("Tarefa 2");
tarefas.adicionar("Tarefa 3");
tarefas.adicionar("Tarefa 4");
tarefas.adicionar("Tarefa 5");

console.log(tarefas.items);

tarefas.remover();

tarefas.obterElemento(8);