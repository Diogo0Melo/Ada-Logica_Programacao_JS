/*
Exercício: Calculadora de Índice de Massa Corporal (IMC)

Descrição: A tarefa é criar uma calculadora de IMC usando variáveis. O IMC é uma medida que relaciona o peso e a altura de uma pessoa para avaliar se ela está abaixo do peso, no peso normal, com sobrepeso ou obesa. A fórmula do IMC é: IMC = peso / (altura * altura).

Instruções:

Peça ao usuário que informe seu peso (em kg) e sua altura (em metros).

Utilize variáveis para armazenar esses valores.

Calcule o IMC usando a fórmula fornecida.

Com base no resultado, informe ao usuário em qual faixa de IMC ele se encontra, de acordo com a tabela abaixo:

Abaixo do peso: IMC < 18.5 Peso normal: 18.5 <= IMC < 24.9 Sobrepeso: 25 <= IMC < 29.9 Obesidade: IMC >= 30
*/

const input = require('readline-sync')
let validador = true
do{
    const peso = input.question('Informe seu peso em kg: ').replace(',','.')
    const altura = input.question('Informe sua altura em metros: ').replace(',','.')
    const imc = Number(peso / (altura * altura))

    if (imc < 18.5){
        console.log(`Seu IMC é ${imc.toFixed(2)}`)
        console.log('Você está abaixo do peso !!')
        break
    }
    else if(18.5 <= imc){
        console.log(`Seu IMC é ${imc.toFixed(2)}`)
        console.log('Você está no peso normal !')
        break
    }
    else if(imc < 24.9){
        console.log(`Seu IMC é ${imc.toFixed(2)}`)
        console.log('Você está com sobrepeso !!')
        break
    }
    else if (imc >= 30) {
        console.log(`Seu IMC é ${imc.toFixed(2)}`)
        console.log('Você está em um caso de obesidade !!!')
        break
    }
    else {
        console.log('Você não informou caracteres válidos.')
        console.log('Gostaria de tentar novamente ?\nDigite S (para sim) e N (para nao)')
        const opcao = input.question('').toUpperCase()
        switch (opcao) {
            case 'S':
                break
            case 'N':
                console.log('Entendido, encerrando o programa.')
                validador = false
                break
            default:
                console.log('Opção inválida.\nO programa será encerrado devido a uma interpretação incorreta por parte do usuário e à impaciência/preguiça do programador, que não quis/soube lidar com todos os erros do código/usuário :D.')
                validador = false
        }
    }
}while(validador)


