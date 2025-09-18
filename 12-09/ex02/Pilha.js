class Pilha 
{

    constructor() 
    {

        this.pilha = [];

        this.tamanho = 0;

    }

    adicionar(elemento) 
    {

        this.pilha[this.tamanho] = elemento;

        this.tamanho++;

    }

    removerUltimo() 
    {

        delete this.pilha[this.tamanho - 1];

    }

    verUltimo() 
    {

        if(this.tamanho < 1)
        {

            return undefined;

        }

        return this.pilha[this.tamanho - 1];

    }

    verBau()
    {

        if(this.tamanho < 1)
        {

            return undefined;

        }

        return this.pilha;

    }

}