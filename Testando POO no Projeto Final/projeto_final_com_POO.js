class Turma {
    constructor(idTurma, maximoDeAlunos) {
        if (idTurma === undefined && maximoDeAlunos === undefined) {
            var [idTurma, maximoDeAlunos] = this.cadastrarTurma();
        }
        this.idTurma = idTurma;
        this.maximoDeAlunos = maximoDeAlunos;
        this.alunos = [];
    }

    cadastrarTurma() {
        const idTurma = +prompt("Informe o ID da turma");
        if (validacoes({ idTurma: idTurma }) === null) throw "Programa encerrado!";
        const maximoDeAlunos = +prompt(`Informe o número máximo de alunos para a turma ${idTurma}. [Entre 5 e 10]`);
        if (validacoes({ maximoDeAlunos: maximoDeAlunos }) === null) throw "Programa encerrado!";
        return [idTurma, maximoDeAlunos];
    }
    mostrarTurma() {
        const turmasCadastradas = [];
        turmas.map((t) => {
            turmasCadastradas.push(t.idTurma);
        });
        console.log(`Turmas cadastradas: ${turmasCadastradas.length > 1 ? "Turmas:" : "Turma"} ${turmasCadastradas.sort((a, b) => a - b).join(", ")}`);
        console.log(`ID da turma: ${this.idTurma}\nNúmero máximo de alunos: ${this.maximoDeAlunos}\nAlunos:`);
        this.alunos.forEach((a) => console.log(`Nome completo: ${a.nome} ${a.sobrenome}\nEmail: ${a.email}`));
    }
    atualizarTurma() {
        const opcao = +prompt("Qual item da turma deseja atualizar?\n1 - ID 2 - Máximo de alunos");
        switch (opcao) {
            case 1:
                const novoIdTurma = +prompt(`Informe o novo ID da turma ${this.idTurma}. [Entre 1 e 10]`);
                if (validacoes({ idTurma: novoIdTurma }) === null) throw "Programa encerrado!";
                this.idTurma = novoIdTurma;
                break;
            case 2:
                const novoMaximoDeAlunos = +prompt(`Informe o novo número máximo de alunos para a turma ${this.idTurma}. [Entre 5 e 10]`);
                if (validacoes({ maximoDeAlunos: novoMaximoDeAlunos }) === null) throw "Programa encerrado!";
                this.maximoDeAlunos = novoMaximoDeAlunos;
                break;
            default:
                return console.error("Opção inválida.");
        }
    }
    removerTurma() {
        const turmaIndex = turmas[turmas.findIndex((t) => t.idTurma == this.idTurma)];
        if (this.alunos.length > 0) throw `A turma ${this.idTurma} não pode ser removida pois possui alunos.`;
        turmas.splice(turmaIndex, 1);
    }
}
class Aluno {
    constructor() {
        const [nome, sobrenome, email, turma, classificacao, nascimento, notas, ativo] = this.cadastrarAluno();
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.turma = turma;
        this.classificacao = classificacao;
        this.nascimento = nascimento;
        this.notas = notas;
        this.ativo = ativo;
        turmas[turmas.findIndex((t) => t.idTurma == turma)].alunos.push(this);
    }
    cadastrarAluno() {
        const mensagemDeErro = "Programa encerrado!\nNenhum aluno foi cadastrado.";

        let nome = prompt("Informe o nome do aluno. [Exemplo: Silva]");
        nome = validacoes({ nome: nome });
        if (nome === null) throw mensagemDeErro;
        console.log(`O nome ${nome} foi atribuído com sucesso.`);

        let sobrenome = prompt("Informe o sobrenome do aluno. [Exemplo: silva da silva");
        sobrenome = validacoes({ sobrenome: sobrenome });
        if (sobrenome === null) throw mensagemDeErro;
        console.log(`O sobrenome ${sobrenome} foi atribuído com sucesso.`);

        let email = prompt("Informe o email do aluno. [Exemplo: example@example.com]");
        email = validacoes({ email: email });
        if (email === null) throw mensagemDeErro;
        console.log(`O email ${email} foi atribuído com sucesso.`);

        let turma = +prompt("Informe o ID da turma. [Entre 1 e 10 que possua cadastro]");
        turma = validacoes({ turma: turma });
        if (turma === null) throw mensagemDeErro;
        console.log(`A turma ${turma} foi atribuída com sucesso.`);

        let classificacao = prompt("Informe a classificação do aluno. [A, B, C ou D]");
        classificacao = validacoes({ classificacao: classificacao, turma: turma });
        if (classificacao === null) throw mensagemDeErro;
        console.log(`A classificação ${classificacao} foi atribuída com sucesso.`);

        let nascimento = prompt("Informe a data de nascimento do aluno. [Exemplo: 01/01/2000]");
        nascimento = validacoes({ nascimento: nascimento });
        if (nascimento === null) throw mensagemDeErro;
        console.log(`A data de nascimento ${nascimento} foi atribuída com sucesso.`);

        const notas = [];
        for (let i = 0; i < 5; i++) {
            let nota = +prompt(`Informe a ${i + 1}º nota do aluno. [De 0 a 10]`);
            nota = validacoes({ nota: nota });
            if (nota === null) throw mensagemDeErro;
            notas.push(nota);
        }
        console.log(`As notas ${notas} foram atribuídas com sucesso.`);

        const ativo = true;

        return [nome, sobrenome, email, turma, classificacao, nascimento, notas, ativo];
    }
}
function localizarTurma() {
    const idTurma = +prompt("Informe o ID da turma");
    const turma = turmas.find((t) => t.idTurma == idTurma);
    if (turma === undefined) throw "Turma não encontrada";
    return turma;
}
function validacoes({ idTurma, maximoDeAlunos, nome, sobrenome, email, turma, classificacao, nascimento, nota, ativo }) {
    if (idTurma !== undefined) {
        if (isNaN(idTurma) || idTurma < 1 || idTurma > 10) {
            console.warn(`A turma ${idTurma} é inválida.`);
            return null;
        } else if (turmas.find((t) => t.idTurma === idTurma)) {
            console.warn(`A turma ${idTurma} já foi cadastrada.`);
            return null;
        } else return idTurma;
    } else if (maximoDeAlunos !== undefined) {
        if (isNaN(maximoDeAlunos) || maximoDeAlunos < 5 || maximoDeAlunos > 10) {
            console.warn(`O máximo de alunos ${maximoDeAlunos} para a turma é inválido.`);
            return null;
        } else return maximoDeAlunos;
    } else if (nome !== undefined) {
        const regex = /^[a-zA-ZéáàçõãúíÉÁÀÇÕÃÚÍ]+$/g;
        if (regex.test(nome) && nome !== null) {
            const nomeFormatado = nome.slice(0, 1).toUpperCase() + nome.slice(1).toLowerCase();
            return nomeFormatado;
        } else return null;
    } else if (sobrenome !== undefined) {
        const regex = /^[a-zA-Z' 'éáàçõãúíÉÁÀÇÕÃÚÍ]+$/g;
        if (regex.test(sobrenome) && sobrenome !== null) {
            const sobrenomeFormatado = sobrenome.toLowerCase().replace(/\s+/g, " ").trim();
            return sobrenomeFormatado;
        } else return null;
    } else if (email !== undefined) {
        const regex = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;
        if (regex.test(email) && email !== null) {
            return email;
        } else return null;
    } else if (turma !== undefined && classificacao === undefined) {
        const turmaLocal = turmas.find((t) => t.idTurma === turma);
        if (isNaN(turma) || turma < 1 || turma > 10) {
            console.warn(`A turma ${turma} é inválida.`);
            return null;
        } else if (turmaLocal === undefined) {
            console.warn(`A turma ${turma} não possui cadastro.`);
            return null;
        } else if (turmaLocal.maximoDeAlunos === turmaLocal.alunos.length) {
            console.warn(`A turma ${turma} está lotada.`);
            return null;
        } else return turma;
    } else if (classificacao !== undefined) {
        const turmaLocal = turmas.find((t) => t.idTurma === turma);
        const classificacaoLocal = classificacao.toUpperCase();
        if (classificacaoLocal === "A" || classificacaoLocal === "D") {
            if (turmaLocal.alunos.find((a) => a.classificacao !== "A" && a.classificacao !== "D")) {
                console.warn(`Alunos com classificação ${classificacaoLocal} não podem estar na mesma turma que alunos com classificação A ou D.`);
                return null;
            } else return classificacaoLocal;
        } else if (classificacaoLocal === "B" || classificacaoLocal === "C") {
            if (turmaLocal.alunos.find((a) => a.classificacao !== "B" && a.classificacao !== "C")) {
                console.warn(`Alunos com classificação ${classificacaoLocal} não podem estar na mesma turma que alunos com classificação B ou C.`);
                return null;
            } else return classificacaoLocal;
        }else return null
    } else if (nascimento !== undefined) {
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19\d{2}|20[01][0-9]|2022)$/;
        const anoAtual = new Date().getFullYear();
        const mesAtual = new Date().getMonth() + 1;
        const diaAtual = new Date().getDate();
        if (regex.test(nascimento) && nascimento !== null) {
            const [dia, mes, ano] = nascimento.split("/");
            const idade = anoAtual - ano - (mesAtual < mes || (mesAtual === mes && diaAtual < dia) ? 1 : 0);
            if (idade >= 16) return nascimento;
            else return null;
        } else return null;
    } else if (nota !== undefined) {
        if (isNaN(nota) || nota < 0 || nota > 10) {
            console.warn(`A nota ${nota} é inválida.`);
            return null;
        } else return nota;
    } else if (ativo !== undefined) {
    }
}
const turmas = [new Turma(5, 10)];
console.log(turmas);
turmas[0].alunos.push(
    {
        nome: "Pedro",
        sobrenome: "santos da silva",
        email: "pedro@gmail.com",
        turma: 5,
        classificacao: "A",
        nascimento: "01/01/2000",
        notas: [1, 7, 8, 9, 10],
        ativo: true,
    },
    {
        nome: "Maria",
        sobrenome: "pereira",
        email: "maria@gmail.com",
        turma: 5,
        classificacao: "A",
        nascimento: "01/01/2000",
        notas: [6, 5, 5, 2, 10],
        ativo: true,
    },
    {
        nome: "Joaquim",
        sobrenome: "guilherme ferreira",
        email: "joaquim@gmail.com",
        turma: 5,
        classificacao: "D",
        nascimento: "01/01/2000",
        notas: [1, 7, 3, 5, 2],
        ativo: true,
    },
    {
        nome: "Ana",
        sobrenome: "santos",
        email: "ana@gmail.com",
        turma: 5,
        classificacao: "D",
        nascimento: "01/01/2000",
        notas: [1, 7, 4, 4, 4],
        ativo: true,
    },
    {
        nome: "Pedro",
        sobrenome: "santos da silva",
        email: "pedro2@gmail.com",
        turma: 5,
        classificacao: "A",
        nascimento: "01/01/2000",
        notas: [1, 7, 8, 9, 10],
        ativo: true,
    },
    {
        nome: "Maria",
        sobrenome: "pereira",
        email: "maria2@gmail.com",
        turma: 5,
        classificacao: "A",
        nascimento: "01/01/2000",
        notas: [6, 5, 5, 2, 10],
        ativo: false,
    },
    {
        nome: "Joaquim",
        sobrenome: "guilherme ferreira",
        email: "joaquim2@gmail.com",
        turma: 5,
        classificacao: "D",
        nascimento: "01/01/2000",
        notas: [1, 7, 3, 5, 2],
        ativo: false,
    },
    {
        nome: "Ana",
        sobrenome: "santos",
        email: "ana2@gmail.com",
        turma: 5,
        classificacao: "D",
        nascimento: "01/01/2000",
        notas: [1, 7, 4, 4, 4],
        ativo: false,
    }
);
