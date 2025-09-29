console.log("\n=== EXERCÍCIO 1 ===\n");
console.log("OBJETO DE ALUNOS\n");

// Objeto para armazenar informações de alunos
const alunos = {};

// Adicionando 3 alunos
alunos[1] = "Lucas";
alunos[2] = "Rafael";
alunos[3] = "Leticia";

// exibindo os nomes iterando sobre as chaves
for (const aluno in alunos) {
    console.log(`${aluno}: ${alunos[aluno]}`);
}