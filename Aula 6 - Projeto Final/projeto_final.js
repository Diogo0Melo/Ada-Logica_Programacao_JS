function cadastrarTurma() {
    for (let i = 0; i <= 3; i++) {
        if (i === 3) return console.error(`Excesso de tentativas, programa encerrado!\n Nenhuma turma foi cadastrada`);

        const idTurma = +prompt("Informe o ID da turma. [Entre 1 e 10]");
        if (!idTurma) return console.error(`Nenhuma turma foi cadastrada. Programa encerrado!`);
        else if (isNaN(idTurma) || idTurma < 1 || idTurma > 10) {
            console.warn(`A turma ${idTurma} é inválida.\nTente novamente.`);
            continue;
        } else if (turmas.find((t) => t.idTurma == idTurma)) {
            console.warn(`A turma ${idTurma} já foi cadastrada.\nTente novamente.`);
            continue;
        }

        const maximoDeAlunos = +prompt(`Informe o número máximo de alunos para a turma ${idTurma}. [Entre 5 e 10]`);
        if (!maximoDeAlunos) return console.error(`Nenhuma turma foi cadastrada. Programa encerrado!`);
        else if (isNaN(maximoDeAlunos) || maximoDeAlunos < 5 || maximoDeAlunos > 10) {
            console.warn(`O máximo de alunos ${maximoDeAlunos} para a turma ${idTurma} é inválido.\nTente novamente.`);
            continue;
        }
        console.log(`Turma ${idTurma} foi cadastrada com sucesso.`);
        return turmas.push({ idTurma: idTurma, maximoDeAlunos: maximoDeAlunos, alunos: [] });
    }
}
function mostrarTurmas() {
    console.log(
        `Turmas cadastradas: Turma ${turmas
            .sort((a, b) => a.idTurma - b.idTurma)
            .map((t) => t.idTurma)
            .filter(Boolean)
            .join(", ")}`
    );
    if (turmas.find((t) => t.maximoDeAlunos == t.alunos.length)) {
        const turmasCheias = [];
        turmas.map((t) => {
            t.maximoDeAlunos == t.alunos.length ? turmasCheias.push(t.idTurma) : "";
        });
        if (turmasCheias.length == 1) console.log(`A turma ${turmasCheias.join()} está cheia.`);
        else console.log(`As turmas ${turmasCheias.join(", ")} estão cheias.`);
    }
    const opcao = +prompt("Deseja ver a quantidade de alunos de alguma turma especifica ?\n1 - Sim 2 - Não");
    if (opcao == 1) {
        const idTurma = +prompt("Informe o ID da turma");
        const turma = turmas.find((t) => t.idTurma == idTurma);
        if (!turma) return console.warn(`A turma ${idTurma} não existe.`);
        else if (turma.alunos.length > 0) {
            console.log(`A turma ${idTurma} possui ${turma.alunos.length} alunos de um máximo de ${turma.maximoDeAlunos} alunos.`);
            const opcao = +prompt("Deseja ver os dados dos alunos da turma ?\n1 - Sim 2 - Não");
            if (opcao == 1) {
                let j = 0;
                console.log(`Turma ${turma.idTurma}:\n`);
                turma.alunos.map((aluno) => {
                    console.log(`Aluno ${(j += 1)}:`);
                    console.log(`Nome Completo: ${aluno.nome} ${aluno.sobrenome} `);
                    console.log(`Email: ${aluno.email}`);
                    console.log(`Turma: ${aluno.turma}`);
                    console.log(`Classificação: ${aluno.classificacao}`);
                    console.log(`Data de nascimento: ${aluno.nascimento}`);
                    console.log(`Notas: ${aluno.notas}`);
                    console.log(`Ativo: ${aluno.ativo}`);
                    console.log("\n");
                });
            }
            return;
        }
    }
    return;
}
function atualizarTurma() {
    const idTurma = +prompt("Informe o ID da turma que deseja atualizar.\n[Entre 1 e 10 que possua cadastro]");
    if (!idTurma) return console.error("Nenhuma turma foi atualizada. Programa encerrado!");
    else if (turmas.find((t) => t.idTurma == idTurma)) {
        let confirmacao;
        if (turmas[turmas.findIndex((t) => t.idTurma == idTurma)].alunos.length > 0) {
            confirmacao = +prompt(`A turma ${idTurma} possui alunos, deseja atualizar mesmo assim?\n1 - sim 2 - não [Os alunos também serão atualizados]`);
            if (confirmacao > 1 || confirmacao < 1 || isNaN(confirmacao)) return console.warn(`A turma ${idTurma} não foi atualizada.`);
        }
        const opcao = +prompt("Qual item da turma deseja atualizar?\n1 - ID 2 - Máximo de alunos");
        switch (opcao) {
            case 1:
                const novoIdTurma = +prompt(`Informe o novo ID da turma ${idTurma}. [Entre 1 e 10]`);
                if (turmas.find((t) => t.idTurma == novoIdTurma)) return console.warn(`A turma ${novoIdTurma} já possui cadastro. `);
                else if (isNaN(novoIdTurma) || novoIdTurma < 1 || novoIdTurma > 10) return console.warn(`A turma ${novoIdTurma} é inválida.`);
                else if (confirmacao === 1) turmas[turmas.findIndex((t) => t.idTurma == idTurma)].alunos.map((a) => (a.turma = novoIdTurma));

                console.log(`A turma ${idTurma} foi atualizada com sucesso para a turma ${novoIdTurma}.`);
                return (turmas[turmas.findIndex((t) => t.idTurma == idTurma)].idTurma = novoIdTurma);
            case 2:
                const novomaximoDeAlunos = +prompt(`Informe o novo número máximo de alunos para a turma ${idTurma}. [Entre 5 e 10]`);
                if (isNaN(novomaximoDeAlunos) || novomaximoDeAlunos < 5 || novomaximoDeAlunos > 10) return console.warn(`O máximo de alunos ${novomaximoDeAlunos} para a turma ${idTurma} é inválido.`);
                else if (turmas[turmas.findIndex((t) => t.idTurma == idTurma)].alunos.length > novomaximoDeAlunos) return console.error(`O número máximo de alunos ${novomaximoDeAlunos} para a turma ${idTurma} é menor que o número de alunos na turma.`);

                console.log(`A turma ${idTurma} foi atualizada com sucesso o novo máximo de alunos é ${novomaximoDeAlunos}.`);
                return (turmas[turmas.findIndex((t) => t.idTurma == idTurma)].maximoDeAlunos = novomaximoDeAlunos);
            default:
                return console.error("Opção inválida.");
        }
    } else if (idTurma < 1 || idTurma > 10) return console.warn(`A turma ${idTurma} é inválida.`);
    else return console.warn(`A turma ${idTurma} não foi cadastrada.`);
}
function removerTurma() {
    const idTurma = +prompt("Informe o ID da turma que deseja remover.\n[Entre 1 e 10 que possua cadastro]");
    if (!idTurma) return console.error("Programa encerrado! Nenhuma turma foi removida.");
    else if (turmas.find((t) => t.idTurma === idTurma)) {
        if (turmas[turmas.findIndex((t) => t.idTurma == idTurma)].alunos.length > 0) return console.warn(`A turma ${idTurma} não pode ser removida pois possui alunos.`);
        console.log(`A turma ${idTurma} foi removida com sucesso.`);
        return turmas.splice(turmas.findIndex((t) => t.idTurma == idTurma), 1);
    } else return console.warn(`A turma ${idTurma} não foi cadastrada.`);
}
function cadastrarAluno() {
    const aluno = {
        nome: pegarNome(),
        sobrenome: pegarSobrenome(),
        email: pegarEmail(),
        turma: pegarTurma(),
        classificacao: undefined,
        nascimento: pegarIdade(),
        notas: pegarNotas(),
        ativo: true,
    };
    aluno.classificacao = pegarClassificacao(aluno.turma);
    if (tentativas) {
        tentativas = false;
        console.error(`Excesso de tentativas, programa encerrado!\nNenhum aluno foi cadastrado.`);
        return;
    }
    console.log(`O aluno ${aluno.nome} ${aluno.sobrenome} foi cadastrado com sucesso.`);
    return turmas.find((t) => t.idTurma == aluno.turma).alunos.push(aluno);
}
function pegarNome() {
    for (let i = 0; i <= 3; i++) {
        if (i === 3 || tentativas) return (tentativas = true);

        const nome = prompt("Informe o nome do aluno. [Exemplo: Andreo]");
        if (!nome) throw "Programa encerrado!\nNenhum aluno foi cadastrado.";
        else if (
            !nome.length ||
            nome
                .split("")
                .filter(Boolean)
                .find((n) => /\d|\s|[!@#$%ª¹²³£¢¬º§°^&*()_+\-\=\[\]{};':"\\|,.<>\/?]/.test(n))
        ) {
            console.warn(`O nome ${nome} é inválido.\nTente novamente.`);
            continue;
        }
        const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
        console.log(`O nome ${nomeFormatado} foi cadastrado com sucesso.`);
        return nomeFormatado;
    }
}
function pegarSobrenome() {
    for (let i = 0; i <= 3; i++) {
        if (i === 3 || tentativas) return (tentativas = true);

        const sobrenome = prompt("Informe o sobrenome do aluno [Exemplo: Fernades Ferraz de Almeida]");
        if (!sobrenome) throw "Programa encerrado!\nNenhum aluno foi cadastrado.";
        else if (
            !sobrenome.length ||
            sobrenome
                .split("")
                .filter(Boolean)
                .find((n) => /\d|[!@#$%ª¹²³£¢¬º§°^&*()_+\-\=\[\]{};':"\\|,.<>\/?]/.test(n))
        ) {
            console.warn(`O sobrenome ${sobrenome} é inválido.\nTente novamente.`);
            continue;
        }
        const sobrenomeFormatado = sobrenome.trim().toLowerCase().replace(/\s+/g, " ");
        console.log(`O sobrenome ${sobrenomeFormatado} foi cadastrado com sucesso.`);
        return sobrenomeFormatado;
    }
}
function pegarEmail() {
    for (let i = 0; i <= 3; i++) {
        if (i === 3 || tentativas) return (tentativas = true);

        const email = prompt("Informe o email do aluno [Exemplo: andreo@example.com]");
        if (!email) throw "Programa encerrado!\nNenhum aluno foi cadastrado.";
        else if (
            !email.length ||
            email
                .split("")
                .filter(Boolean)
                .find((n) => /\s|[!#$%~ª¹²³£¢¬º§°´`^&*()+\=\[\]{};':"\\|,<>\/?]/.test(n))
        ) {
            console.warn(`O email ${email} é inválido.\nTente novamente.`);
            continue;
        } else if (!email.includes("@") || !email.includes(".")) {
            console.warn(`O email precisa incluir um '@' e um '.'!\nTente novamente.`);
            continue;
        } else if (turmas[turmas.findIndex((t) => t.alunos)].alunos.find((a) => a.email == email)) {
            console.warn(`O email ${email} já foi cadastrado.\nTente novamente.`);
            continue;
        }
        console.log(`O email ${email} foi cadastrado com sucesso.`);
        return email;
    }
}
function pegarTurma() {
    for (let i = 0; i <= 3; i++) {
        if (i === 3 || tentativas) return (tentativas = true);

        const turma = +prompt("Informe a turma do aluno [Entre 1 e 10 que possua cadastro]");
        if (!turma) throw "Programa encerrado!\nNenhum aluno foi cadastrado.";
        else if (isNaN(turma) || turma < 1 || turma > 10) {
            console.warn(`A turma ${turma} é inválida.\nTente novamente.`);
            continue;
        } else if (!turmas.find((t) => t.idTurma === turma)) {
            console.warn(`A turma ${turma} não foi cadastrada.\nTente novamente.`);
            continue;
        } else if (turmas.find((t) => t.maximoDeAlunos == turmas[turmas.findIndex((t) => t.idTurma == turma)].alunos.length)) {
            console.warn(`A turma ${turma} está cheia.\nTente novamente.`);
            continue;
        }
        console.log(`A turma ${turma} foi cadastrada com sucesso.`);
        return turma;
    }
}
function pegarClassificacao(turma, classificacaoTurma) {
    for (let i = 0; i <= 3; i++) {
        if (i === 3 || tentativas) return (tentativas = true);

        let classificacaoPergunta = classificacaoTurma;
        if (!classificacaoTurma) {
            classificacaoPergunta = prompt("Informe a classificação do aluno [Entre A, B, C ou D]");
            if (!classificacaoPergunta) throw "Programa encerrado!\nNenhum aluno foi cadastrado.";
        }
        const classificacao = classificacaoPergunta.toUpperCase().trim();
        if (classificacao !== "A" && classificacao !== "B" && classificacao !== "C" && classificacao !== "D") {
            console.warn(`A classificação ${classificacao} é inválida.\nTente novamente.`);
            continue;
        } else if ((classificacao === "A" && turmas[turmas.findIndex((t) => t.idTurma == turma)].alunos.find((c) => c.classificacao == "B" || c.classificacao == "C")) || (classificacao === "D" && turmas[turmas.findIndex((t) => t.idTurma == turma)].alunos.find((c) => c.classificacao == "B" || c.classificacao == "C"))) {
            console.warn(`Alunos com classificação ${classificacao} não podem estar na mesma turma que alunos com a classifição B ou C.\nTente novamente.`);
            continue;
        } else if ((classificacao === "B" && turmas[turmas.findIndex((t) => t.idTurma == turma)].alunos.find((c) => c.classificacao == "A" || c.classificacao == "D")) || (classificacao === "C" && turmas[turmas.findIndex((t) => t.idTurma == turma)].alunos.find((c) => c.classificacao == "A" || c.classificacao == "D"))) {
            console.warn(`Alunos com classificação ${classificacao} não podem estar na mesma turma que alunos com a classifição A ou D.\nTente novamente.`);
            continue;
        }
        console.log(`A classificação ${classificacao} foi cadastrada com sucesso.`);
        return classificacao;
    }
}
function pegarIdade() {
    for (let i = 0; i <= 3; i++) {
        if (i === 3 || tentativas) return (tentativas = true);

        const dia = +prompt("Informe o dia do nascimento do aluno. [Entre 1 e 31]");
        if (!dia) throw "Programa encerrado!\nNenhum aluno foi cadastrado.";
        const mes = +prompt("Informe o mês do nascimento do aluno. [Entre 1 e 12]");
        if (!mes) throw "Programa encerrado!\nNenhum aluno foi cadastrado.";
        const ano = +prompt("Informe o ano do nascimento do aluno. [A partir de 1900]");
        if (!ano) throw "Programa encerrado!\nNenhum aluno foi cadastrado.";
        else if (isNaN(dia) || isNaN(mes) || isNaN(ano) || dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 1900 || ano > new Date().getFullYear()) {
            console.warn(`A data de nascimento ${dia + "/" + mes + "/" + ano} é inválida.\nTente novamente.`);
            continue;
        }
        const idade = new Date().getFullYear() - ano;
        if (idade < 16) {
            console.warn("O aluno precisa ter ao menos 16 anos para ser cadastrado.");
            continue;
        }
        const idadeFormatada = `${String(dia).padStart(2, "0")}/${String(mes).padStart(2, "0")}/${ano}`;
        console.log(`Data de nascimento ${idadeFormatada} foi cadastrada com sucesso.`);
        return idadeFormatada;
    }
}
function pegarNotas() {
    for (let i = 0; i <= 3; i++) {
        if (i === 3 || tentativas) return (tentativas = true);

        const notas = [];
        for (let i = 0; i < 5; i++) {
            let nota = prompt(`Informe a ${i + 1}º nota do aluno. [Entre 0 e 10]`);
            if (!nota) throw "Programa encerrado!\nNenhum aluno foi cadastrado.";
            nota = +nota;
            if (isNaN(nota) || nota < 0 || nota > 10) {
                console.warn(`A nota informada é inválida.\nTente novamente.`);
                i--;
                continue;
            }
            notas.push(nota);
        }
        console.log(`As notas ${notas} foram cadastradas com sucesso.`);
        return notas;
    }
}
function mostrarAlunos(opcaoParametro) {
    turmas.sort((a, b) => a.idTurma - b.idTurma);
    let opcao;
    if (!opcaoParametro) {
        opcao = +prompt("Quais alunos deseja ver?\n1 - Todos 2 - Ativos 3 - Inativos 4 - Na média 5 - Abaixo da média 6 - Quantidade de alunos");
    }
    switch (opcao || opcaoParametro) {
        case 1:
            for (let i = 0; i < turmas.length; i++) {
                console.log(`Turma ${turmas[i].idTurma}:\n `);
                for (let j = 0; j < turmas[i].alunos.length; j++) {
                    console.log(`Aluno ${j + 1}:`);
                    console.log(`Nome Completo: ${turmas[i].alunos[j].nome} ${turmas[i].alunos[j].sobrenome} `);
                    console.log(`Email: ${turmas[i].alunos[j].email}`);
                    console.log("\n");
                }
            }
            break;
        case 2:
            for (let i = 0; i < turmas.length; i++) {
                let j = 0;
                const ativo = turmas[i].alunos.find((a) => a.ativo == true);
                if (!!ativo) console.log(`Turma ${turmas[i].idTurma}:\n `);
                turmas[i].alunos.map((aluno) => {
                    if (aluno.ativo) {
                        console.log(`Aluno ${j + 1}:`);
                        console.log(`Nome Completo: ${aluno.nome} ${aluno.sobrenome} `);
                        console.log(`Email: ${aluno.email}`);
                        console.log(`Ativo: ${aluno.ativo}`);
                        console.log("\n");
                    }
                });
            }
            break;
        case 3:
            for (let i = 0; i < turmas.length; i++) {
                let j = 0;
                const ativo = turmas[i].alunos.find((a) => a.ativo == false);
                if (!!ativo) console.log(`Turma ${turmas[i].idTurma}:\n `);
                turmas[i].alunos.map((aluno) => {
                    if (!aluno.ativo) {
                        console.log(`Aluno ${(j += 1)}:`);
                        console.log(`Nome Completo: ${aluno.nome} ${aluno.sobrenome} `);
                        console.log(`Email: ${aluno.email}`);
                        console.log(`Ativo: ${aluno.ativo}`);
                        console.log("\n");
                    }
                });
            }
            break;
        case 4:
            for (let i = 0; i < turmas.length; i++) {
                let j = 0;
                const media = turmas[i].alunos.find((a) => a.notas.reduce((acc, curr) => acc + curr, 0) / 5 >= 6);
                if (!!media) console.log(`Turma ${turmas[i].idTurma}:\n `);
                turmas[i].alunos.map((aluno) => {
                    if (aluno.notas.reduce((acc, curr) => acc + curr, 0) / 5 >= 6) {
                        console.log(`Aluno ${(j += 1)}:`);
                        console.log(`Nome Completo: ${aluno.nome} ${aluno.sobrenome} `);
                        console.log(`Email: ${aluno.email}`);
                        console.log(`Notas: ${aluno.notas}`);
                        console.log(`Média do aluno: ${aluno.notas.reduce((acc, curr) => acc + curr, 0) / 5}`);
                        console.log("\n");
                    }
                });
            }
            break;
        case 5:
            for (let i = 0; i < turmas.length; i++) {
                let j = 0;
                const media = turmas[i].alunos.find((a) => a.notas.reduce((acc, curr) => acc + curr, 0) / 5 < 6);
                if (!!media) console.log(`Turma ${turmas[i].idTurma}:\n `);
                turmas[i].alunos.map((aluno) => {
                    if (aluno.notas.reduce((acc, curr) => acc + curr, 0) / 5 < 6) {
                        console.log(`Aluno ${(j += 1)}:`);
                        console.log(`Nome Completo: ${aluno.nome} ${aluno.sobrenome} `);
                        console.log(`Email: ${aluno.email}`);
                        console.log(`Notas: ${aluno.notas}`);
                        console.log(`Média do aluno: ${aluno.notas.reduce((acc, curr) => acc + curr, 0) / 5}`);
                        console.log("\n");
                    }
                });
            }
            break;
        case 6:
            let qtdeAlunos = 0;
            for (let i = 0; i < turmas.length; i++) {
                qtdeAlunos += turmas[i].alunos.length;
            }
            console.log(`A quantidade total de alunos cadastrados é: ${qtdeAlunos}`);
            break;
        default:
            console.error("Opção inválida. Encerrando o programa.");
    }
}
function atualizarAluno() {
    const idTurma = +prompt("Informe o ID da turma do aluno");
    if (!idTurma) return console.error("Programa encerrado!\nNenhum aluno foi modificado.");
    const email = prompt("Informe o email do aluno");
    if (!email) return console.error("Programa encerrado!\nNenhum aluno foi modificado.");
    else if (turmas.find((t) => t.idTurma == idTurma) && turmas[turmas.findIndex((t) => t.idTurma == idTurma)].alunos.find((a) => a.email == email)) {
        const aluno = turmas[turmas.findIndex((t) => t.idTurma == idTurma)].alunos.find((a) => a.email == email);
        buscarAluno(idTurma, email);
        const opcao = +prompt(`Deseja atualizar o aluno ${aluno.nome + " " + aluno.sobrenome} com o email ${aluno.email} ? 1 - Sim 2 - Não`);
        switch (opcao) {
            case 1:
                const opcao = +prompt(`Qual informação do aluno deseja atualizar?\n1 - Nome 2 - Sobrenome 3 - Email 4 - Turma\n5 - Data de nascimento 6 - Notas 7 - Ativo 8 - Sair`);
                switch (opcao) {
                    case 1:
                        const nome = pegarNome();
                        console.log(`O nome ${aluno.nome} do aluno foi alterado com sucesso para ${nome}.`);
                        return (aluno.nome = nome);
                    case 2:
                        const sobrenome = pegarSobrenome();
                        console.log(`O sobrenome ${aluno.sobrenome} do aluno foi alterado com sucesso para ${sobrenome}.`);
                        return (aluno.sobrenome = sobrenome);
                    case 3:
                        const email = pegarEmail();
                        console.log(`O email ${aluno.email} do aluno foi alterado com sucesso para ${email}.`);
                        return (aluno.email = email);
                    case 4:
                        const turma = pegarTurma();
                        const classificacao = pegarClassificacao(turma, aluno.classificacao);
                        if (classificacao == "A" || classificacao == "D" || classificacao == "B" || classificacao == "C") {
                            tentativas = false;
                            console.log(`A turma do aluno foi alterada com sucesso de ${aluno.turma} para ${turma}.`);
                            aluno.turma = turma;
                            const alunoIndex = turmas[turmas.findIndex((t) => t.idTurma == idTurma)].alunos.findIndex((a) => a.email == email);
                            turmas[turmas.findIndex((t) => t.idTurma == idTurma)].alunos.splice(alunoIndex, 1);
                            return turmas.find((t) => t.idTurma == aluno.turma).alunos.push(aluno);
                        }
                        return (tentativas = false);
                    case 5:
                        const nascimento = pegarIdade();
                        console.log(`A data de nascimento ${aluno.nascimento} do aluno foi alterada com sucesso para ${nascimento}.`);
                        return (aluno.nascimento = nascimento);
                    case 6:
                        const notas = pegarNotas();
                        console.log(`As notas ${aluno.notas} do aluno foram alteradas com sucesso para ${notas}.`);
                        return (aluno.notas = notas);
                    case 7:
                        const ativo = +prompt("O aluno está ativo? 1 - Sim 0 - Não");
                        if (isNaN(ativo) || (ativo !== 1 && ativo !== 0)) return console.error("Opção inválida. Encerrando o programa.\nO aluno não foi modificado.");

                        console.log(`O aluno ${aluno.nome + " " + aluno.sobrenome} foi alterado com sucesso para ${!!ativo ? "ativo" : "inativo"}.`);
                        return (aluno.ativo = !!ativo);
                    case 8:
                    case 0:
                        return console.warn("Programa encerrado!");
                    default:
                        console.error("Opção inválida. Encerrando o programa!");
                        return;
                }
            case 2:
                console.warn("Programa encerrado.");
                return;
            default:
                console.error("Opção inválida. Encerrando programa! ");
        }
    } else console.error(`Turma ${idTurma} ou email do aluno ${email} estão incorretos!\nVerifique as infomações e tente novamente.\nPrograma encerrado.`);
}
function removerAluno() {
    const idTurma = +prompt("Informe o ID da turma do aluno");
    if (!idTurma) return console.error("Programa encerrado!\nNenhum aluno foi removido.");
    const email = prompt("Informe o email do aluno");
    const aluno = turmas[turmas.findIndex((t) => t.idTurma == idTurma)].alunos.find((a) => a.email == email);
    if (!email) return console.error("Programa encerrado!\nNenhum aluno foi removido.");
    else if (turmas.find((t) => t.idTurma == idTurma) && !!aluno) {
        const opcao = +prompt(`Deseja remover o aluno ${aluno.nome + " " + aluno.sobrenome} com o email ${aluno.email} ? 1 - Sim 2 - Não`);
        switch (opcao) {
            case 1:
                const alunoIndex = turmas[turmas.findIndex((t) => t.idTurma == idTurma)].alunos.findIndex((a) => a.email == email);
                console.log(`O aluno ${aluno.nome} ${aluno.sobrenome} com o email ${aluno.email} foi removido com sucesso.`)
                return turmas[turmas.findIndex((t) => t.idTurma == idTurma)].alunos.splice(alunoIndex, 1);
            case 2:
                return console.warn("Programa encerrado!");
            default:
                return console.error("Opção inválida. Encerrando o programa.");
        }
    } else console.warn(`Turma ${idTurma} ou email do aluno ${email} inexistentes.\nPrograma encerrado!`);
}
function buscarAluno(idTurmaParametro, emailParametro) {
    let idTurma, email;
    if (!idTurmaParametro || !emailParametro) {
        idTurma = +prompt("Informe o ID da turma do aluno");
        if (!idTurma) return console.error("Programa encerrado!");
        email = prompt("Informe o email do aluno");
        if (!email) return console.error("Programa encerrado!");
    }
    const aluno = turmas[turmas.findIndex((t) => t.idTurma == idTurma || t.idTurma == idTurmaParametro)].alunos.find((a) => a.email == email || a.email == emailParametro);
    if (aluno) {
        console.log("Aluno encontrado.");
        console.log(`Informações do aluno:\nNome Completo: ${aluno.nome + " " + aluno.sobrenome}\nEmail: ${aluno.email}\nTurma: ${aluno.turma}\nClassificação: ${aluno.classificacao}\nData de nascimento: ${aluno.nascimento}\nNotas: ${aluno.notas}\nAtivo: ${aluno.ativo}`);
    } else return console.warn(`Aluno não encontrado. Verifique o email informado ${email} e tente novamente.`);
}
function gerarRelatorio() {
    mostrarAlunos(6);
    console.log(`A quantidade total de turmas cadastradas é: ${turmas.length}`);
    console.log("\n");
    console.log("Os alunos abaixo estão com a nota na média esperada:");
    console.log("\n");
    mostrarAlunos(4);
    console.log("Os alunos abaixo estão com a nota abaixo da média esperada:");
    console.log("\n");
    mostrarAlunos(5);
}

let tentativas = false;
const turmas = [
    {
        idTurma: 2,
        maximoDeAlunos: 5,
        alunos: [
            { nome: "Eder", sobrenome: "dos santos", email: "edesvon@gmail.com", turma: 2, classificacao: "A", nascimento: "01/01/2000", notas: [5, 5, 5, 5, 5], ativo: true },
            { nome: "Eder", sobrenome: "de Almeida", email: "eder@gmail.com", turma: 2, classificacao: "D", nascimento: "01/01/2000", notas: [5, 5, 5, 5, 5], ativo: true },
            { nome: "Eder", sobrenome: "de bragança", email: "ede@gmail.com", turma: 2, classificacao: "D", nascimento: "01/01/2000", notas: [5, 5, 10, 10, 5], ativo: false },
            { nome: "Eder", sobrenome: "da silva", email: "edersantos@gmail.com", turma: 2, classificacao: "A", nascimento: "01/01/2000", notas: [5, 10, 5, 6, 5], ativo: false },
        ],
    },
];