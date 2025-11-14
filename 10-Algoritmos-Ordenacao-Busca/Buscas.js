class Buscas {
    // Busca Sequencial
    static sequencial(arr, valorProcurado) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === valorProcurado) {
                return i;
            }
        }
        return -1;
    }

    // Busca Binária (para array ORDENADO)
    static binaria(arr, valorProcurado) {
        let inicio = 0;
        let fim = arr.length - 1;

        while (inicio <= fim) {
            let meio = Math.flor((inicio + fim) / 2);

            if (arr[meio] === valorProcurado) {
                return meio;
            } else if (arr[meio] < valorProcurado) {
                inicio = meio + 1;
            } else {
                fim = meio - 1;
            }
        }

        return -1;
    }

    // Busca por Interpolação (para array ORDENADO e UNIFORMEMENTE distribuído)
    static interpolacao(arr, valorProcurado) {
        let inicio = 0;
        let fim = arr.length - 1;

        while (
            inicio <= fim && 
            valorProcurado >= arr[inicio] &&
            valorProcurado <= arr[fim]
        ) {
            if (inicio === fim) {
                return arr[inicio] === valorProcurado ? inicio : -1;
            }

            const pos = inicio + Math.floor(
                ((valorProcurado - arr[inicio]) * (fim - inicio)) / 
                (arr[fim]) - arr[inicio]
            );

            if (arr[pos] === valorProcurado) {
                return pos;
            }

            if (arr[pos] < valorProcurado) {
                inicio = pos + 1;
            } else {
                fim = pos - 1;
            }
        }

        return -1;
    }
}

module.exports = Buscas;

/**
const Buscas = require('./Buscas.js');

const dados = [10, 20, 30, 40, 50, 50];

console.log("Sequencial: ", Buscas.sequencial(dados, 40)); // 3
console.log("Binária: ", Buscas.binaria(dados, 40)); // 3
console.log("Sequencial: ", Buscas.interpolacao(dados, 40)); // 3
*/