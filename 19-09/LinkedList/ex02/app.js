const LinkedList = require('./../LinkedList_prototipo.js');

const fila = new LinkedList();

// Inserindo
console.log("\n---------------------");
console.log('\x1b[32m%s\x1b[0m', 'Inserindo tartaruga no início da fila:');
lista.insertAtBeginning('Lenta');
lista.toString(); 

console.log("\n---------------------");
console.log('\x1b[32m%s\x1b[0m', 'Inserindo tartaruga no fim da fila:');
lista.insertAtEnd('Média');
lista.toString();

console.log("\n---------------------");
console.log('\x1b[32m%s\x1b[0m', 'Exibindo a lista:');
lista.toString(); // Saída: 10 -> 20 -> 30 -> 40 -> 50 -> undefined


console.log("\n---------------------");
console.log('\x1b[31m%s\x1b[0m', 'Removendo Itens:');
// Removendo um valor
lista.removeByValue(30);
lista.toString(); // Saída: 10 -> 20 -> 30 -> 40 -> 50 -> undefinded

console.log("\n---------------------");
console.log('\x1b[34m%s\x1b[0m', 'Procurando um valor:');
let node = lista.find(40);
console.log(node ? `Valor encontrado: ${node.value}` : "Valor não encontrado");