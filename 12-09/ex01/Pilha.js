class Pilha {

    constructor() {

        this.pilha = [];

        this.tamanho = 0;

    }

    // Adiciona um elemento para a última posição
    adicionar(elemento) {

        this.pilha[this.tamanho] = elemento;

        this.tamanho++;

    }

    // Remove o último elemento da pilha
    remover() {

        if(this.tamanho < 1) {

            return undefined;

        }

        // Fazendo uma cópia do último feitiço
        const copiaUltimoFeitico = this.pilha[this.tamanho - 1];

        delete this.pilha[this.tamanho - 1];

    }

    verTopo() {

    }

    verFeiticos() {

    }

}

module.exports = Pilha;