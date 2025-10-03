const produtos = {};

produtos[1] = { nome: 'Camisa', preco: 50 };
produtos[2] = { nome: 'Calça', preco: 70 };
produtos[3] = { nome: 'Blusa', preco: 100 };
produtos[4] = { nome: 'Boné', preco: 10 };
produtos[5] = { nome: 'Tênis', preco: 60 };

for (const produto in produtos) {

    if (produtos[produto].preco > 50) {
        console.log(`${produto}: ${produtos[produto].nome}`);
    }

}