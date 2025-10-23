const LinkedList = require("./../LinkedList_prototipo.js");

const trilha = new LinkedList();

console.log("\n---------------------");
console.log('\x1b[35m%s\x1b[0m', 'Trilha Inicial');

// Inserindo pontos da trilha
console.log("\n---------------------");
console.log('\x1b[32m%s\x1b[0m', 'Inserindo pontos da trilha no início:');
trilha.insertAtBeginning('Cachoeira');
trilha.toString();
trilha.insertAtBeginning('Mirante');
trilha.toString();

console.log("\n---------------------");
console.log('\x1b[32m%s\x1b[0m', 'Inserindo pontos da trilha no fim:');
trilha.insertAtEnd('Caverna');
trilha.toString();

// Exibindo a lista

console.log("\n---------------------");
console.log('\x1b[32m%s\x1b[0m', 'Exibindo a trilha:');
trilha.toString();

console.log(`Tamanho da lista: ${trilha.size()}`);

// Removendo locais perigosos
console.log("\n---------------------");
console.log('\x1b[31m%s\x1b[0m', 'Removendo locais perigosos:');
// Removendo um valor
trilha.removeByValue('Caverna');
trilha.toString();

// Procurando um local
console.log("\n---------------------");
console.log('\x1b[34m%s\x1b[0m', 'Procurando um local:');
let node = trilha.find('Mirante');
console.log(node ? `Local encontrado: ${node.value}` : "Local não encontrado");