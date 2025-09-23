const Fila = require('./Fila.js');

const documentos = new Fila();

documentos.enqueue("teste.docx - 1 pag");
documentos.enqueue("agenda.docx - 2 pag");
documentos.enqueue("roteiro.docx - 10 pag");
documentos.enqueue("teste.docx - 1 pag");
documentos.enqueue("agenda.docx - 2 pag");
documentos.enqueue("roteiro.docx - 10 pag");

console.log("Imprimindo: " + documentos.dequeue());

documentos.enqueue("roteiro.docx - 10 pag");

console.log(documentos.tamanho());