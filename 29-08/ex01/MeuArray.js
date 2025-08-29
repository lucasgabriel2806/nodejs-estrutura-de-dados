class MeuArray {

    constructor() {

        // Criando um array vazio
        this.items = [];

        // Tamanho do array
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

    // Remove o último elemento do array
    remover() {

        // Se o array estiver vazio, não há o que remover
        if (this.tamanho === 0) {
            return undefined;
        }

        // Armazena o último item
        const ultimoItem = this.items[this.tamanho - 1];

        // Remove o último item do array
        delete this.items[this.tamanho - 1];

        // Decrementa o tamanho
        this.tamanho--;

        // Retorna o item removido
        return ultimoItem; 

    }

    // Acessa o elemento em um índice específico
    obterElemento(indice) {

        if (indice < 0 || indice >= this.tamanho) {

            // Se o índice estiver fora do alcance,
            // retorna undefined
            return undefined;

        }

        // Retorna o item no índice solicitado
        return this.items[indice];

    }

    // Retorna o tamanho do array
    tamanhoArray() {

        return this.tamanho;

    }

    // Remove todos os elementos do array
    limpar() {

        // Limpa o objeto
        this.items = [];

        // Reinicializa o tamanho
        this.tamanho = 0;

    }

    editar(indice, novoValor) {}

    obterIndice() {}

}

module.exports = MeuArray;