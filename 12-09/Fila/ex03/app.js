const Fila = require('./Fila.js');

const brinquedo = new Fila();

setTimeout(() => brinquedo.enqueue("Visitante 1"), 2000);

brinquedo.dequeue();

setTimeout(() => brinquedo.enqueue("Visitante 1"), 2000);


brinquedo.dequeue();

brinquedo.enqueue("Visitante 3");

brinquedo.dequeue();
