function cadastrarTurma() {
    for (let i = 0; i <= 3; i++) {
        if (i === 3 || tentativas) {
            console.log(`Excesso de tentativas, encerrando o programa.`);
            tentativas = true
            return
        }
        const idTurma = +prompt("Informe o ID da turma");

        if (isNaN(idTurma) || idTurma < 1 || idTurma > 10 || turmasCadastradas.find(t => t == idTurma)) {
            alert(`A turma ${idTurma} é inválida.\nTente novamente.`);
            continue;
        }

        alert(`Turma ${idTurma} cadastrada com sucesso.`);
        return turmasCadastradas.push(idTurma);
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
    if (turmas.find(t => t.idTurma == aluno.turma)){
        return turmas.find(t => t.idTurma == aluno.turma).alunos.push(aluno);
    }
    else return turmas.push({ idTurma: aluno.turma, alunos: [aluno] });
}

function pegarNome() {

    for (let i = 0; i <= 3; i++) {
        if (i === 3 || tentativas) {
            console.log(`Excesso de tentativas, encerrando o programa.`);
            tentativas = true
            return
        }
        const nome = prompt("Informe o nome do aluno").trim();
        if (!nome.length || nome.split("").filter(Boolean).find((n) => /\d|\s/.test(n))) {
            alert(`O nome ${nome} é inválido.\nTente novamente.`);
            continue
        }

        return nome;
    }
}
function pegarSobrenome() {
    for (let i = 0; i <= 3; i++) {
        if (i === 3 || tentativas) {
            console.log(`Excesso de tentativas, encerrando o programa.`);
            tentativas = true
            return
        }
        const sobrenome = prompt("Informe o sobrenome do aluno").trim();
        if (!sobrenome.length || sobrenome.split("").filter(Boolean).find((n) => /\d/.test(n))) {
            alert(`O nome ${sobrenome} é inválido.\nTente novamente.`);
            continue;
        }

        return sobrenome;
    }
}
function pegarEmail() {
    for (let i = 0; i <= 3; i++) {
        if (i === 3 || tentativas) {
            console.log(`Excesso de tentativas, encerrando o programa.`);
            tentativas = true
            return
        }
        const email = prompt("Informe o email do aluno [Exemplo: andreo@example.com]").trim();
        if (!email.length || email.split("").filter(Boolean).find((n) => /\s/.test(n)) || !email.includes("@") || !email.includes(".") || turmas[turmas.findIndex(t => t.alunos)].alunos.find(a => a.email == email)) {
            alert(`O email ${email} é inválido.\nTente novamente.`);
            continue;
        }

        return email;
    }

}
function pegarTurma() {
    for (let i = 0; i <= 3; i++) {
        if (i === 3 || tentativas) {
            console.log(`Excesso de tentativas, encerrando o programa.`);
            tentativas = true
            return
        }
        const turma = +prompt("Informe a turma do aluno");
        if (isNaN(turma) || turma < 1 || turma > 10 || !turmasCadastradas.find(t => t === turma)) {
            alert(`A turma ${turma} é inválida.\nTente novamente.`);
            continue
        }

        return turma
    }

}
function pegarNascimento() {
    for (let i = 0; i <= 3; i++) {
        if (i === 3 || tentativas) {
            console.log(`Excesso de tentativas, encerrando o programa.`);
            tentativas = true
            return
        }
        const nascimento = prompt("Informe a data de nascimento do aluno [Exemplo: 01/01/2000]").trim();
        if (!nascimento.length || nascimento.split("").filter(Boolean).find((n) => /[a-zA-Z]|\s/.test(n))) {
            alert(`A data de nascimento ${nascimento} é inválida.\nTente novamente.`);
            continue;
        }
        return nascimento;
    }

}
function pegarNotas() {
    for (let i = 0; i <= 3; i++) {
        if (i === 3 || tentativas) {
            console.log(`Excesso de tentativas, encerrando o programa.`);
            tentativas = false
            return
        }
        const notas = [];
        for (let i = 0; i < 5; i++) {
            const nota = +prompt(`Informe a ${i + 1}º nota do aluno`);
            if (isNaN(nota) || nota < 0 || nota > 6) {
                alert(`A nota informada é inválida.\nTente novamente.`);
                i--;
                continue;
            }
            notas.push(nota);
        }
        return notas;
    }
}

function removerAluno(){
        const idTurma = +prompt("Informe o ID da turma do aluno");
        const email = prompt("Informe o email do aluno");
        if (turmas.find(t => t.idTurma == idTurma)) {
            const aluno = turmas[turmas.findIndex(t => t.idTurma == idTurma)].alunos.find(a => a.email == email)
            const opcao = +prompt(`Deseja remover o aluno ${aluno.nome + " " + aluno.sobrenome} cujo o email é ${aluno.email} ? 1 - Sim 2 - Não`);
            switch (opcao) {
                case 1:
                    return turmas[turmas.findIndex(t => t.idTurma == idTurma)].alunos.pop(aluno)
                case 2:
                    return
                default:
                    console.log("Opção inválida.")
            }
        }
        
    }



const turmasCadastradas = [2]
const turmas = [{idTurma: 2, alunos: [{nome: "Eder", sobrenome: "dos Santos", email: "edesvon@gmail.com", turma: 2, nascimento: "01/01/2000", notas: [5, 5, 5, 5, 5]}, {nome: "Eder", sobrenome: "dos Santos", email: "eder@gmail.com", turma: 2, nascimento: "01/01/2000", notas: [5, 5, 5, 5, 5]}]}]
let tentativas = false



