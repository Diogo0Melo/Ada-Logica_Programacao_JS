function cadastrarTurma() {
    while (true) {
        const idTurma = +prompt("Informe o ID da turma");
        if (idTurma < 1 || idTurma > 10 || turmas.find((t) => t == idTurma)) {
            alert(`A turma ${idTurma} é inválida.\nTente novamente.`);
            continue;
        }
        alert(`Turma ${idTurma} cadastrada com sucesso.`);
        return turmas.push(idTurma);
    }
}

function cadastrarAluno() {
    const aluno = {
        nome: pegarNome(),
        sobrenome: pegarSobrenome(),
        email: pegarEmail(),
        turma: pegarTurma(),
        nascimento: pegarNascimento(),
        notas: pegarNotas(),
        ativo: true,
    };
    return aluno;
}

function pegarNome() {
    const nome = prompt("Informe o nome do aluno").trim();
    if (!nome.length || nome.split("").filter(Boolean).find((n) => /\d|\s/.test(n))) {
        alert(`O nome ${nome} é inválido.\nTente novamente.`);
        pegarNome();
    }
    return nome;

}
function pegarSobrenome() {

    const sobrenome = prompt("Informe o sobrenome do aluno").trim();
    if (!sobrenome.length || sobrenome.split("").filter(Boolean).find((n) => /\d/.test(n))) {
        alert(`O nome ${sobrenome} é inválido.\nTente novamente.`);
        pegarSobrenome();
    }
    return sobrenome;

}
function pegarEmail() {

    const email = prompt("Informe o email do aluno [Exemplo: andreo@example.com]").trim();
    if (!email.length || email.split("").filter(Boolean).find((n) => /\d\s/.test(n)) || !email.includes("@") || !email.includes(".")) {
        alert(`O email ${email} é inválido.\nTente novamente.`);
        pegarEmail();
    }
    return email;

}
function pegarTurma() {

    const turma = +prompt("Informe a turma do aluno");
    if (isNaN(turma) || turma < 1 || turma > 10 || !turmas.find(t => t === turma)) {
        alert(`A turma ${turma} é inválida.\nTente novamente.`);
        pegarTurma();
    }
    return turma

}
function pegarNascimento() {

    const nascimento = prompt("Informe a data de nascimento do aluno [Exemplo: 01/01/2000]").trim();
    if (!nascimento.length || nascimento.split("").filter(Boolean).find((n) => /[a-zA-Z]\s/.test(n))) {
        alert(`A data de nascimento ${nascimento} é inválida.\nTente novamente.`);
        pegarNascimento();
    }
    return nascimento;

}
function pegarNotas() {

    const notas = [];
    const qtdeNotas = +prompt("Informe a quantidade de notas");
    if (!qtdeNotas || isNaN(qtdeNotas) || qtdeNotas < 0 || qtdeNotas > 5) {
        console.log(`A quantidade de notas ${qtdeNotas} é inválida.\nTente novamente.`);
        pegarNotas();
    }
    for (let i = 0; i < qtdeNotas; i++) {
        const nota = +prompt(`Informe a ${i + 1}º nota do aluno`);
        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert(`A nota informada é inválida.\nTente novamente.`);
            i--;
            continue;
        }
        notas.push(nota);
    }
    return notas;
}


const turmas = []


console.log(aluno);
console.log('Digite "cadastrarTurma()" para cadastrar uma nova turma.');
