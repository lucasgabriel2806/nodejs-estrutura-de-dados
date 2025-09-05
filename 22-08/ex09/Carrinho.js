class Carrinho {

    constructor () {

        this.lista_produtos = [];

        this.tamanho = 0;

    }

    // Adiciona um elemento no array
    adicionar(elemento) {

        // Adicionando um elemento na posição atual
        this.items[this.tamanho] = elemento;

        // O tamanho é incrementado para adicionar 
        // um elemento em um indice diferente da próxima vez.
        this.tamanho++;

    }

    total() {

        for(let i = 0; i < tamanho; i++) {

            this.lista_produtos[i].preco;

        }


    }

}

module.exports = Carrinho;