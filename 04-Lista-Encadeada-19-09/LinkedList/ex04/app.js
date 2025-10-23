const LinkedList = require('./../LinkedList_prototipo.js');

const busca_remove = new LinkedList();

// Inserindo
busca_remove.insertAtBeginning(60);
busca_remove.insertAtBeginning(50);
busca_remove.insertAtBeginning(40);
busca_remove.insertAtBeginning(30);
busca_remove.insertAtBeginning(20);
busca_remove.insertAtBeginning(10);
busca_remove.toString();

// Removendo
console.log("\n---------------------");
console.log('\x1b[31m%s\x1b[0m', 'Removendo Itens:');
busca_remove.removeByValue(50);
busca_remove.removeByValue(40);
busca_remove.removeByValue(30);
busca_remove.toString();

// Procurando
console.log("\n---------------------");
console.log('\x1b[34m%s\x1b[0m', 'Procurando um valor:');
let node = busca_remove.find(40);
console.log(node ? `Valor encontrado: ${node.value}` : "Valor não encontrado");