const input = require('readline-sync')

let aluno = {}

const pegarNome = () => { 
    while (true) {
        const nome = input.question('Informe seu nome: ')
        if (!nome.length || nome.split('').filter(Boolean).find(n => /\d/.test(n))) { // verifica se nome contém números ou a string está vazia
            console.log(`O nome ${nome} é inválido.\nTente novamente.`)
            continue
        }
        return nome
    }
}

const pegarTurma = () => {
    while (true) {
        const turma = input.question('Informe sua turma: ')
        if (!turma.length) {  // verifica se a string turma está vazia
            console.log(`A turma ${turma} é inválida.\nTente novamente.`)
            continue
        }
        return turma
    }
}
const pegarNotas = () => {
    while (true) {
        const notas = []
        const qtdeNotas = input.question('Informe a quantidade de notas: ')
        if (!qtdeNotas || isNaN(qtdeNotas)) { // verifica se a quantidade de notas é inválida
            console.log(`A quantidade de notas ${qtdeNotas} é inválida.\nTente novamente.`)
            continue
        }
        for (let i = 0; i < qtdeNotas; i++) {
            const nota = Number(input.question(`Informe a nota ${i + 1}: `))
            if (isNaN(nota) || nota < 0 || nota > 10) { // verifica se a nota é inválida
                console.log(`A nota informada é inválida.\nTente novamente.`)
                i--
                continue
            }
            notas.push(nota)
        }
        return notas
    }
}

aluno.nome = pegarNome()
aluno.turma = pegarTurma()
aluno.notas = pegarNotas()

console.log(aluno)