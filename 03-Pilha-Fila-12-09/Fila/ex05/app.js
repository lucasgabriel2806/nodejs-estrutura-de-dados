const Fila = require('./Fila.js');

const fila_caixa = new Fila();

fila_caixa.enqueue("--1--");
fila_caixa.enqueue("--2--");
fila_caixa.enqueue("--3--");

fila_caixa.dequeue();
fila_caixa.dequeue();
fila_caixa.dequeue();