const Sorter = require('./Sorter.js');
const Buscas = require('./Buscas.js');

// Gerar um vetor de 10.000.000 números aleatórios etre 0 e 10.000.000
const tamanho_vetor = 10000000;
const vetor = Array.from({ length: tamanho_vetor }, () => Math.floor(Math.random() * tamanho_vetor));

console.log(" Tamanho do Vetor: ", vetor.length);

const posicao_aleatoria = Math.floor(Math.random() * tamanho_vetor);
console.log(" \n Posição aleatória sorteada: ", posicao_aleatoria);

let valor_procurado = vetor[posicao_aleatoria];
console.log(" \Valor procurado: ", valor_procurado);

let vetor_organizado = [];

console.log(" \n --------------- BUBBLE SORT --------------- ");
console.time("BubbleSort");
vetor_organizado = Sorter.bubbleSort(vetor);
console.timeEnd("BubbleSort");

console.time("BubbleSortSequencial");
Buscas.sequencial(vetor_organizado, valor_procurado);
console.timeEnd("BubbleSortSequencial");

console.time("BubbleSortBinario");
Buscas.binaria(vetor_organizado, valor_procurado);
console.timeEnd("BubbleSortBinario");

console.time("BubbleSortInterpolacao");
Buscas.interpolacao(vetor_organizado, valor_procurado);
console.timeEnd("BubbleSortInterpolacao");