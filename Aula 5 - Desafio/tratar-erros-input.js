const input = require('readline-sync')

let aluno = {}

while (!aluno.nome || !aluno.turma || !aluno.notas) { // verifica se todos os campos foram preenchidos


    const nome = input.question('Informe seu nome: ')
    if (!nome.length || !nome.match(/[^0-9]/g)) { // verifica se nome contém números ou seu formato é inválido
        console.log(!nome.length)
        console.log(`O nome ${nome} é invalido.\nTente novamente.`)
        continue
    }
    const turma = input.question('Informe sua turma: ')
    if (!turma.length) {  // verifica se turma não contém caracteres
        console.log(`A turma ${turma} é invalida.\nTente novamente.`)
        continue

    }
    const notas = []
    const qtdeNotas = input.question('Informe a quantidade de notas: ')
    if (!qtdeNotas || qtdeNotas.search(RegExp(/[^a-zA-Z]/))) { // verifica se a quantidade de notas é inválida
        console.log(`A quantidade de notas ${qtdeNotas} é inválida.\nTente novamente.`)
        continue
    }
    for (let i = 0; i < qtdeNotas; i++) {
        const nota = Number(input.question(`Informe a nota ${i + 1}: `))
        if (isNaN || nota < 0 || nota > 10) { // verifica se a nota é inválida
            console.log(`A nota ${nota} é invalida.\nTente novamente.`)
            i--
            continue
        }
        notas.push(nota)
    }
    aluno = {
        nome,
        turma,
        notas: notas.split(',').map(Number)
    }
}

console.log(aluno)