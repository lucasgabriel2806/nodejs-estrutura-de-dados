const ContaBancaria = require('./ContaBancaria.js');

const minhaConta = new ContaBancaria();

minhaConta.depositar(1000);
minhaConta.sacar(500);
minhaConta.verSaldo();