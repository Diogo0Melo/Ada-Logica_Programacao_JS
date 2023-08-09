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
        nascimento: pegarIdade(),
        notas: pegarNotas(),
        ativo: true,
    };
    if (turmas.find(t => t.idTurma == aluno.turma)) {
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
        const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1)
        return nomeFormatado;
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
function pegarIdade() {
    for (let i = 0; i <= 3; i++) {
        if (i === 3 || tentativas) {
            console.log(`Excesso de tentativas, encerrando o programa.`);
            tentativas = true
            return
        }
        const dia = +prompt("Informe o dia do nascimento do aluno");
        const mes = +prompt('Informe o mês do nascimento do aluno');
        const ano = +prompt('Informe o ano do nascimento do aluno');
        if (isNaN(dia) || isNaN(mes) || isNaN(ano) || dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 1900 || ano > new Date().getFullYear()) {
            alert(`A data de nascimento ${dia + " " + mes + " " + ano} é inválida.\nTente novamente.`);
            continue;
        }
        const idade = new Date().getFullYear() - ano
        if (idade < 16) {
            alert("O aluno precisa ter ao menos 16 anos para ser cadastrado.");
            continue
        }
        const idadeFormatada = (dia + "/" + mes + "/" + ano)
        return idadeFormatada;
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

function removerAluno() {
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
                console.log("Opção inválida. Encerrando o programa.");
                return
        }
    }
    else alert(`Turma ${idTurma} ou email do aluno ${email} inexistente.`)
}
function atualizarCadastroAluno() {
    const idTurma = +prompt("Informe o ID da turma do aluno");
    const email = prompt("Informe o email do aluno");
    if (turmas.find(t => t.idTurma == idTurma)) {
        const aluno = turmas[turmas.findIndex(t => t.idTurma == idTurma)].alunos.find(a => a.email == email)
        console.log(`Informações do aluno:\nNome Completo: ${aluno.nome + " " + aluno.sobrenome}\nEmail: ${aluno.email}\nTurma: ${aluno.turma}\nData de nascimento: ${aluno.nascimento}\nNotas: ${aluno.notas}`);
        const opcao = +prompt(`Deseja atualizar o aluno ${aluno.nome + " " + aluno.sobrenome} cujo o email é ${aluno.email} ? 1 - Sim 2 - Não`);
        switch (opcao) {
            case 1:
                const opcao = +prompt(`Qual informação do aluno deseja atualizar? 1 - Nome 2 - Sobrenome 3 - Email 4 - Turma 5 - Data de nascimento 6 - Notas 7 - Ativo 8 - Sair`);
                switch (opcao) {
                    case 1:
                        const nome = pegarNome();
                        return aluno.nome = nome;
                    case 2:
                        const sobrenome = pegarSobrenome();
                        return aluno.sobrenome = sobrenome;
                    case 3:
                        const email = pegarEmail();
                        return aluno.email = email;
                    case 4:
                        const turma = pegarTurma();
                        return aluno.turma = turma;
                    case 5:
                        const nascimento = pegarIdade();
                        return aluno.nascimento = nascimento;
                    case 6:
                        const notas = pegarNotas();
                        return aluno.notas = notas;
                    case 7:
                        const ativo = +prompt("O aluno está ativo? 1 - Sim 0 - Não");
                        if(isNaN(ativo) || ativo !== 1 && ativo !== 0) {
                            alert("Opção inválida. Encerrando o programa.");
                            return
                        }
                        return aluno.ativo = !!ativo;
                    default:
                        alert("Opção inválida. Encerrando o programa.");
                        return

                }
            case 2:
                console.log("Programa encerrado.")
                return
            default:
                alert("Opção inválida.")
        }
    } else alert(`Turma ${idTurma} ou email do aluno ${email} inexistente.`)
}



const turmasCadastradas = [2]
const turmas = [{ idTurma: 2, alunos: [{ nome: "Eder", sobrenome: "dos Santos", email: "edesvon@gmail.com", turma: 2, nascimento: "01/01/2000", notas: [5, 5, 5, 5, 5] }, { nome: "Eder", sobrenome: "dos Santos", email: "eder@gmail.com", turma: 2, nascimento: "01/01/2000", notas: [5, 5, 5, 5, 5] }] }]
let tentativas = false