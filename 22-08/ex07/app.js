const Funcionario = require('./Funcionario');
const Desenvolvedor = require('./Desenvolvedor');
const Gerente = require('./Gerente');

const funcionario = new Funcionario('João', 0);
const desenvolvedor = new Desenvolvedor();
const gerente = new Gerente();

console.log(funcionario.calcularBonus());
console.log(desenvolvedor.calcularBonus());
console.log(gerente.caulcularBonus());