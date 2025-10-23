const Fila = require('./Fila.js');

const brinquedo = new Fila();

brinquedo.enqueue("-- 1 --");
brinquedo.enqueue("-- 2 --");
brinquedo.enqueue("-- 3 --");
brinquedo.enqueue("-- 4 --");
console.log("Desembarcando: " + brinquedo.dequeue());

setTimeout(() => console.log("Desembarcando: " + brinquedo.dequeue()), 3000);

setTimeout(() => console.log("Desembarcando: " + brinquedo.dequeue()), 3000);

setTimeout(() => console.log("Desembarcando: " + brinquedo.dequeue()), 3000);""