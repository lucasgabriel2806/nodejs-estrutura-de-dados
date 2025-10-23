const Pilha = require('./Pilha.js');

const tesouros = new Pilha();

tesouros.adicionar('prata');
tesouros.adicionar('ouro');
tesouros.adicionar('diamante');

console.table("Removendo: " + tesouros.remover());

console.table("Topo: " + tesouros.topo());

console.log("Está vazio? " + tesouros.estaVazia());