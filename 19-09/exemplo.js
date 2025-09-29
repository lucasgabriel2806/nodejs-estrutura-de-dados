const LinkedList = require('./LinkedList_prototipo.js');

const lista = new LinkedList();

console.log("\n---------------------");
console.log('\x1b[35m%s\x1b[0m', 'Lista Inicial');
lista.isEmpty() ? console.log("A lista está vazia.") : console.log("A lista não está vazia");


console.log("\n---------------------");
console.log('\x1b[32m%s\x1b[0m', 'Inserindo no início:');
lista.insertAtBeginning(30);
lista.toString(); // Saída: 30 -> undefined
lista.insertAtBeginning(20);
lista.toString(); // Saída: 20 -> 30 -> undefined
lista.insertAtBeginning(10);
lista.toString(); // Saída: 10 -> 20 -> 30 -> undefined
console.log(`Tamanho da lista: ${lista.size()}`); // Saída: Tamanho da lista: 3


console.log("\n---------------------");
console.log('\x1b[32m%s\x1b[0m', 'Inserindo no fim:');
lista.insertAtEnd(40);
lista.toString() // Saída: 10 -> 20 -> 30 -> 40 -> undefinded
lista.insertAtEnd(50);
lista.toString() // Saída: 10 -> 20 -> 30 -> 40 -> 50 -> undefinded
console.log(`Tamanho da lista: ${lista.size()}`); // Saída: Tamanho da lista: 5


console.log("\n---------------------");
console.log('\x1b[32m%s\x1b[0m', 'Exibindo a lista:');
lista.toString(); // Saída: 10 -> 20 -> 30 -> 40 -> 50 -> undefined

console.log("\n---------------------");
console.log('\x1b[31m%s\x1b[0m', 'Removendo Itens:');