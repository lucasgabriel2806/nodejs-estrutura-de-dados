class Carro {

    constructor (velocidade) {

        this.velocidade = velocidade;

    }

    acelerar(velocidade) {

        this.velocidade += velocidade;

        console.log(`A velocidade atual do carro é ${this.velocidade} km/h`);

    }

}

class Moto {

    constructor (velocidade) {

        this.velocidade = velocidade;

    }

    acelerar(velocidade) {

        this.velocidade += velocidade;

        console.log(`A velocidade atual da Moto é ${this.velocidade} km/h`);

    }

}

module.exports = Carro;
module.exports = Moto;