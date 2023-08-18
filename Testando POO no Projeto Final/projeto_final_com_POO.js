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
    }
    cadastrarAluno(){
        const mensagemDeErro = "Programa encerrado!\nNenhum aluno foi cadastrado.";
        const nome = prompt("Informe o nome do aluno");
        if(validacoes({nome: nome}) === null) throw mensagemDeErro;
        console.log(`O nome ${nome} foi cadastrado com sucesso.`);
        const sobrenome = prompt("Informe o sobrenome do aluno").replace(/\s+/g, " ");
        if(validacoes({sobrenome: sobrenome}) === null) throw mensagemDeErro;
        console.log(`O sobrenome ${sobrenome}foi cadastrado com sucesso.`);
    }
}
function localizarTurma() {
    const idTurma = +prompt("Informe o ID da turma");
    const turma = turmas.find((t) => t.idTurma == idTurma);
    if (turma === undefined) throw "Turma não encontrada";
    return turma;
}
function validacoes({ idTurma, maximoDeAlunos, nome, sobrenome, email, turma, classificacao, nascimento, notas, ativo }) {
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
        if (regex.test(nome) && nome !== null){
            const nomeFormatado = nome.slice(0, 1).toUpperCase() + nome.slice(1).toLowerCase();
            return nomeFormatado;
        }
        else return null
    } else if (sobrenome !== undefined) {
        const regex = /^[a-zA-Z' 'éáàçõãúíÉÁÀÇÕÃÚÍ]+$/g;
        if (regex.test(sobrenome) && sobrenome !== null){
            const sobrenomeFormatado = sobrenome.toLowerCase();
            return sobrenomeFormatado;
        }
    } else if (email !== undefined) {
        return email;
    } else if (turma !== undefined) {
        return turma;
    } else if (classificacao !== undefined) {
        return classificacao;
    } else if (nascimento !== undefined) {
        return nascimento;
    } else if (notas !== undefined) {
        return notas;
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
