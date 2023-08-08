function cadastrarTurma() {
    while (true) {
        const idTurma = +prompt('Informe o ID da turma')
        if (idTurma < 1 || idTurma > 10 || turmas.find(t => t == idTurma)) {
            alert(`A turma ${idTurma} é inválida.\nTente novamente.`)
            continue
        }
        alert(`Turma ${idTurma} cadastrada com sucesso.`)
        return idTurma
    }
    
}

function cadastrarAluno() {

    while (true) {
        const nome = prompt('Informe o nome do aluno').trim()
        if (!nome.length || nome.split('').filter(Boolean).find(n => /\d/.test(n)) || /\s/.test(nome)) {
            console.log(`O nome ${nome} é inválido.\nTente novamente.`)
            continue
        }

        const sobrenome = prompt('Informe o sobrenome do aluno').trim()
        if (!sobrenome.length || sobrenome.split('').filter(Boolean).find(n => /\d/.test(n))) {
            console.log(`O nome ${sobrenome} é inválido.\nTente novamente.`)
            continue
        }

        const email = prompt('Informe o email do aluno [Exemplo: andreo@example.com]').trim()
        if (!email.length || email.split('').filter(Boolean).find(n => /\d/.test(n)) || /\s/.test(email) || !email.includes('@') || !email.includes('.')) {
            alert(`O email ${email} é inválido.\nTente novamente.`)
            continue
        }

        const turma = +prompt('Informe a turma do aluno')
        if (isNaN(turma) || turma < 1 || turma > 10) {
            alert(`A turma ${turma} é inválida.\nTente novamente.`)
            continue
        }

        const nascimento = prompt('Informe a data de nascimento do aluno [Exemplo: 01/01/2000]').trim()
        if (!nascimento.length || nascimento.split('').filter(Boolean).find(n => /[a-zA-Z]/.test(n)) || /\s/.test(nascimento)) {
            alert(`A data de nascimento ${nascimento} é inválida.\nTente novamente.`)
            continue
        }

        const notas = []
        const qtdeNotas = +prompt('Informe a quantidade de notas')
        if (!qtdeNotas || isNaN(qtdeNotas) || qtdeNotas < 0 || qtdeNotas > 5) {
            console.log(`A quantidade de notas ${qtdeNotas} é inválida.\nTente novamente.`)
            continue
        }
        for (let i = 0; i < qtdeNotas; i++) {
            const nota = +prompt(`Informe a nota ${i + 1}`)
            if (isNaN(nota) || nota < 0 || nota > 10) {
                alert(`A nota informada é inválida.\nTente novamente.`)
                i--
                continue
            }
            notas.push(nota)
        }

        const aluno = {
            nome,
            sobrenome,
            email,
            turma,
            nascimento,
            notas,
            ativo: true
        }
       
        return aluno
    }
}

turmas.push(idTurma)

console.log(aluno)
console.log('Digite "cadastrarTurma()" para cadastrar uma nova turma.')
