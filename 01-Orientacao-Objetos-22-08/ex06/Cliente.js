const Endereco = require('./Endereco.js');

class Cliente {

    endereco = new Endereco('Rua X', 123, 'Cidade Y', 'Estado Z');

    constructor(nome, idade, rua, numero, cidade, estado) {

        this.nome = nome;
        this.idade = idade;
        this.rua = endereco.rua;
        this.numero = endereco.numero;
        this.cidade = endereco.cidade;
        this.estado = endereco.estado;

    }

    apresentar() {

        console.log(`Olá, me chamo ${this.nome}, tenho ${this.idade} anos e moro na rua ${this.endereco.rua}, número ${this.endereco.numero}, na cidade de ${this.endereco.cidade}, estado ${this.endereco.estado}.`);

    }

}

module.exports = Cliente;