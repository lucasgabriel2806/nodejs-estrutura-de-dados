const Funcionario = require('./Funcionario');
const Gerente = require('./Gerente');
const Desenvolvedor = require('./Desenvolvedor');

const gerente = new Gerente();
const desenvolvedor = new Desenvolvedor();
const funcionario = new Funcionario('João', 0);


console.log(desenvolvedor.calcularBonus());

console.log(gerente.caulcularBonus());

// ex05, ex06, ex07