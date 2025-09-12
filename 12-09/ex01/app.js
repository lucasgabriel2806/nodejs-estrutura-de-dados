const Pilha = require('./Pilha.js');

const feiticos = new Pilha();

feiticos.adicionar('feitiços de fogo');

console.log(feiticos.pilha[feiticos.tamanho - 1]);