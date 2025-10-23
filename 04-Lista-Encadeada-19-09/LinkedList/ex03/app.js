const LinkedList = require('./../LinkedList_prototipo.js');

const lista_poderes = new LinkedList();

// Inserindo
console.log("\n---------------------");
console.log('\x1b[32m%s\x1b[0m', 'Inserindo um poder no início da lista:');
lista_poderes.insertAtBeginning('Raio Congelante');
lista_poderes.toString(); 

console.log("\n---------------------");
console.log('\x1b[32m%s\x1b[0m', 'Inserindo um poder no fim da lista:');
lista_poderes.insertAtEnd('Escudo de fogo');
lista_poderes.toString();

// Removendo
console.log("\n---------------------");
console.log('\x1b[31m%s\x1b[0m', 'Removendo um poder:');
lista_poderes.removeByValue('Raio Congelante');
lista_poderes.toString(); 

// Encontrar 
console.log("\n---------------------");
console.log('\x1b[34m%s\x1b[0m', 'Procurando um poder:');
let node = lista_poderes.find('Escudo de fogo');
console.log(node ? `Poder encontrado: ${node.value}` : "Poder não encontrado");

// Exibir
console.log("\n---------------------");
console.log('\x1b[32m%s\x1b[0m', 'Exibindo a lista:');
lista_poderes.toString();
console.log(`Tamanho da lista: ${lista_poderes.size()}`);