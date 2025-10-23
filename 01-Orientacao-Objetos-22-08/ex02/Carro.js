class Carro {

    constructor(modelo, ano, velocidade) {

        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = 0;

    }

    acelerar() {

        this.velocidade += 10;

        console.log(`Velocidade atual: ${this.velocidade} km/h`);

    }

    frear() {

        this.velocidade -= 5;

        console.log(`Velocidade atual: ${this.velocidade} km/h`);

    }
}

module.exports = Carro;