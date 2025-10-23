class ContaBancaria {

    _saldo = 0;

    depositar(valor) {

        this._saldo += valor;

        console.log(`Depositado: R$ ${valor}`);

    }

    sacar(valor) {

        this._saldo -= valor;

        console.log(`Sacado: R$ ${valor}`);

    }

    verSaldo() {

        console.log(`Saldo atual: R$ ${this._saldo}`);

    }

}

module.exports = ContaBancaria;