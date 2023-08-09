function cadastrarTurma() {
    console.log("As seguintes turmas ja possuem cadastro: ")
    console.log(turmasCadastradas.forEach(t => console.log("Turma " + t)));
    for (let i = 0; i <= 3; i++) {
        if (i === 3 || tentativas) return console.log(`Excesso de tentativas, encerrando o programa.`);

        const idTurma = +prompt("Informe o ID da turma");
        if (idTurma === 0) return;

        else if (isNaN(idTurma) || idTurma < 1 || idTurma > 10 || turmasCadastradas.find(t => t == idTurma)) {
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
    if (tentativas) {
        tentativas = false
        console.log(`Excesso de tentativas, encerrando o programa.`);
        return alert("Algo inesperado aconteceu.\nO aluno não foi cadastrado.");
    }
    else if (turmas.find(t => t.idTurma == aluno.turma)) return turmas.find(t => t.idTurma == aluno.turma).alunos.push(aluno);

    else return turmas.push({ idTurma: aluno.turma, alunos: [aluno] });
}

function pegarNome() {

    for (let i = 0; i <= 3; i++) {
        if (i === 3 || tentativas) return tentativas = true

        const nome = prompt("Informe o nome do aluno").trim();
        if (!nome.length || nome.split("").filter(Boolean).find((n) => /\d|\s/.test(n))) {
            alert(`O nome ${nome} é inválido.\nTente novamente.`);
            continue
        }
        const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()
        return nomeFormatado;
    }
}
function pegarSobrenome() {
    for (let i = 0; i <= 3; i++) {
        if (i === 3 || tentativas) return tentativas = true

        const sobrenome = prompt("Informe o sobrenome do aluno").toLowerCase().trim();
        if (!sobrenome.length || sobrenome.split("").filter(Boolean).find((n) => /\d/.test(n))) {
            alert(`O nome ${sobrenome} é inválido.\nTente novamente.`);
            continue;
        }
        return sobrenome;
    }
}
function pegarEmail() {
    for (let i = 0; i <= 3; i++) {
        if (i === 3 || tentativas) return tentativas = true

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
        if (i === 3 || tentativas) return tentativas = true

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
        if (i === 3 || tentativas) return tentativas = true

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
        if (i === 3 || tentativas) return tentativas = true

        const notas = [];
        for (let i = 0; i < 5; i++) {
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
                const opcao = +prompt(`Qual informação do aluno deseja atualizar?\n1 - Nome 2 - Sobrenome 3 - Email 4 - Turma 5 - Data de nascimento\n6 - Notas 7 - Ativo 8 - Sair`);
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
                        if (isNaN(ativo) || ativo !== 1 && ativo !== 0) {
                            alert("Opção inválida. Encerrando o programa.");
                            return
                        }
                        return aluno.ativo = !!ativo;
                    case 8:
                    case 0:
                        return
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

function buscarAluno() {
    const idTurma = +prompt("Informe o ID da turma do aluno");
    const email = prompt("Informe o email do aluno");
    const aluno = turmas[turmas.findIndex(t => t.idTurma == idTurma)].alunos.find(a => a.email == email)
    if (aluno) {
        console.log('Aluno encontrado.')
        console.log(`Informações do aluno:\nNome Completo: ${aluno.nome + " " + aluno.sobrenome}\nEmail: ${aluno.email}\nTurma: ${aluno.turma}\nData de nascimento: ${aluno.nascimento}\nNotas: ${aluno.notas}`);
    }
    else return alert(`Aluno não encontrado. Verifique o email informado ${email} e tente novamente.`)
}

function mostrarAlunos() {
    turmas.sort((a, b) => a.idTurma - b.idTurma)
    const opcao = +prompt("Quais alunos deseja ver?\n1 - Todos 2 - Ativos 3 - Inativos 4 - Na média 5 - abaixo da média");
    switch (opcao) {
        case 1:
            for (let i = 0; i < turmas.length; i++) {
                console.log(`Turma ${turmas[i].idTurma}:`)
                for (let j = 0; j < turmas[i].alunos.length; j++) {
                    console.log(`Aluno ${j + 1}:`)
                    console.log(`Nome Completo: ${turmas[i].alunos[j].nome} ${turmas[i].alunos[j].sobrenome} `)
                    console.log(`Email: ${turmas[i].alunos[j].email}`)
                    console.log(`Turma: ${turmas[i].alunos[j].turma}`)
                    console.log(`Data de nascimento: ${turmas[i].alunos[j].nascimento}`)
                    console.log(`Notas: ${turmas[i].alunos[j].notas}`)
                    console.log(`Ativo: ${turmas[i].alunos[j].ativo}`)
                    console.log('\n')
                }
            }
            break
        case 2:
            for (let i = 0; i < turmas.length; i++) {
                turmas[i].alunos.map(aluno => {
                    if (aluno.ativo) {
                        console.log(`Turma ${turmas[i].idTurma}:`)
                        let j = 0
                        console.log(`Aluno ${j + 1}:`)
                        console.log(`Nome Completo: ${aluno.nome} ${aluno.sobrenome} `)
                        console.log(`Email: ${aluno.email}`)
                        console.log(`Turma: ${aluno.turma}`)
                        console.log(`Data de nascimento: ${aluno.nascimento}`)
                        console.log(`Notas: ${aluno.notas}`)
                        console.log(`Ativo: ${aluno.ativo}`)
                        console.log('\n')

                    }
                })
            }
            break
        case 3:
            for (let i = 0; i < turmas.length; i++) {
                let j = 0
                turmas[i].alunos.map(aluno => {
                    if (!aluno.ativo) {
                        console.log(`Turma ${turmas[i].idTurma}:`)
                        console.log(`Aluno ${j += 1}:`)
                        console.log(`Nome Completo: ${aluno.nome} ${aluno.sobrenome} `)
                        console.log(`Email: ${aluno.email}`)
                        console.log(`Turma: ${aluno.turma}`)
                        console.log(`Data de nascimento: ${aluno.nascimento}`)
                        console.log(`Notas: ${aluno.notas}`)
                        console.log(`Ativo: ${aluno.ativo}`)
                        console.log('\n')

                    }
                })
            }
            break
        case 4:
            for (let i = 0; i < turmas.length; i++) {
                let j = 0
                turmas[i].alunos.map(aluno => {
                    if (aluno.notas.reduce((acc, cur) => acc + cur, 0) / 5 > 6) {

                        console.log(`Turma ${turmas[i].idTurma}:`)
                        console.log(`Aluno ${j += 1}:`)
                        console.log(`Nome Completo: ${aluno.nome} ${aluno.sobrenome} `)
                        console.log(`Email: ${aluno.email}`)
                        console.log(`Turma: ${aluno.turma}`)
                        console.log(`Data de nascimento: ${aluno.nascimento}`)
                        console.log(`Notas: ${aluno.notas}`)
                        console.log(`Média do aluno: ${aluno.notas.reduce((acc, cur) => acc + cur, 0) / 5}`)
                        console.log(`Ativo: ${aluno.ativo}`)
                        console.log('\n')
                    }
                })
            }
            break
        case 5:
            for(let i = 0; i < turmas.length; i++){
                let j = 0
                turmas[i].alunos.map(aluno => {
                    if (aluno.notas.reduce((acc, cur) => acc + cur, 0) / 5 < 6) {
                        console.log(`Turma ${turmas[i].idTurma}:`)
                        console.log(`Aluno ${j += 1}:`)
                        console.log(`Nome Completo: ${aluno.nome} ${aluno.sobrenome} `)
                        console.log(`Email: ${aluno.email}`)
                        console.log(`Turma: ${aluno.turma}`)
                        console.log(`Data de nascimento: ${aluno.nascimento}`)
                        console.log(`Notas: ${aluno.notas}`)
                        console.log(`Média do aluno: ${aluno.notas.reduce((acc, cur) => acc + cur, 0) / 5}`)
                        console.log(`Ativo: ${aluno.ativo}`)
                        console.log('\n')
                    }
                })
            }
        default:
            console.log("Opção inválida. Encerrando o programa.");
            return
    }
}

const turmasCadastradas = [2]
const turmas = [{ idTurma: 2, alunos: [{ nome: "Eder", sobrenome: "dos Santos", email: "edesvon@gmail.com", turma: 2, nascimento: "01/01/2000", notas: [5, 5, 5, 5, 5], ativo: true }, { nome: "Eder", sobrenome: "de Almeida", email: "eder@gmail.com", turma: 2, nascimento: "01/01/2000", notas: [5, 5, 5, 5, 5], ativo: true }, { nome: "Eder", sobrenome: "dos Santos", email: "ede@gmail.com", turma: 2, nascimento: "01/01/2000", notas: [5, 5, 10, 10, 5], ativo: false }, { nome: "Eder", sobrenome: "dos Santos", email: "edersantos@gmail.com", turma: 2, nascimento: "01/01/2000", notas: [5, 5, 5, 5, 5], ativo: false }] }]
let tentativas = false