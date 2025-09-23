const Fila = require('./Fila.js');

const atendimento = new Fila();

atendimento.enqueue("Cliente 1");
atendimento.enqueue("Cliente 2");
atendimento.enqueue("Cliente 3");

function atender() 
{

    console.log("Próximo: " + atendimento.front());

    console.log("Atendendo: " + atendimento.dequeue() + "\n");

}

setTimeout(atender, 3000);
setTimeout(atender, 1000);
setTimeout(atender, 4000);

console.log("Tamanho da fila: " + atendimento.tamanho() + "\n");