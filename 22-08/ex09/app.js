const Produto = require("./Produto.js");
const Carrinho = require("./Carrinho.js");

const meuProduto1 = new Produto('pendrive', 20);
const meuProduto2 = new Produto('cd', 10);

const meuCarrinho1 = new Carrinho();

meuCarrinho1.adicionar(meuProduto1);
meuCarrinho1.adicionar(meuProduto2);

console.log(meuCarrinho1);
console.log(meuCarrinho1.total);