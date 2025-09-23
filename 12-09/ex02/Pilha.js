class Pilha {

    #items = [];
    #tamanho = 0;

    // Adiciona um elemento para a última posição
    adicionar(elemento) {

        this.#items[this.#tamanho] = elemento;

        this.#tamanho++;

    }

    // Remove o último elemento da pilha
    remover() {

        if(this.#tamanho === 1) {
            return undefined;
        }

        // Fazendo uma cópia do último feitiço
        const ultimoItem = this.#items[this.#tamanho - 1];

        delete this.#items[this.#tamanho - 1];

        this.#tamanho--;

        return ultimoItem;

    }

    topo() {

        if(this.#tamanho === 0) {
            return undefined;
        }

        return this.#items[this.#tamanho - 1];

    }

    limpar() {
        
        this.#items = [];
        this.#tamanho = 0;

    }

    estaVazia = () => this.#tamanho === 0;

    tamanhoPilha = () => this.#tamanho;

    // verFeiticos() {

    //     if(this.pilha < 1) {

    //         return undefined;

    //     }

    //     return this.pilha[this.pilha];

    // }

}

module.exports = Pilha;