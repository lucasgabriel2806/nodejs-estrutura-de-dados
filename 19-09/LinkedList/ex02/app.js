const LinkedList = require('./../LinkedList_prototipo.js');

const fila_tartaruga = new LinkedList();

// Inserindo
console.log("\n---------------------");
console.log('\x1b[32m%s\x1b[0m', 'Inserindo tartaruga no início da fila:');
fila_tartaruga.insertAtBeginning('Lenta');
fila_tartaruga.toString(); 

console.log("\n---------------------");
console.log('\x1b[32m%s\x1b[0m', 'Inserindo tartaruga no fim da fila:');
fila_tartaruga.insertAtEnd('Veloz');
fila_tartaruga.toString();

// Removendo
console.log("\n---------------------");
console.log('\x1b[31m%s\x1b[0m', 'Removendo tartaruga:');
fila_tartaruga.removeByValue('Lenta');
fila_tartaruga.toString(); 

// Encontrar 
console.log("\n---------------------");
console.log('\x1b[34m%s\x1b[0m', 'Procurando uma tartaruga:');
let node = fila_tartaruga.find('Veloz');
console.log(node ? `Tartaruga encontrada: ${node.value}` : "Tartaruga não encontrada");

// Exibir
console.log("\n---------------------");
console.log('\x1b[32m%s\x1b[0m', 'Exibindo a lista:');
fila_tartaruga.toString();
console.log(`Tamanho da lista: ${fila_tartaruga.size()}`);