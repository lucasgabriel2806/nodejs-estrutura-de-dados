const Pilha = require('./Pilha.js');

const feiticos = new Pilha();

feiticos.adicionar('feitiços de gelo');
feiticos.adicionar('feitiços de raio');
feiticos.adicionar('feitiços de fogo');

console.table("Removendo: " + feiticos.remover());

console.table("Topo: " + feiticos.topo());

console.log("Está vazio? " + feiticos.estaVazia());