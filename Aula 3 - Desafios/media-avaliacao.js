/*
Média das Avaliações de um Fast-Food
 
Em uma empresa de fast-food, após a refeição, os clientes fazem uma avaliação da loja, com nota de 1 a 5 estrelas. Em determinado dia, foram atendidos exatamente 100 clientes, e as notas obtidas foram:

Avaliação   | Total de Clientes
----------- | -----------
1 estrela   | 2
2 estrelas  | 15
3 estrelas  | 18
4 estrelas  | 25
5 estrelas  | 40
 
- Após o fechamento do expediente, o gerente decidiu calcular a nota média das avaliações naquele dia; retorne o valor da nota média considerando o valor fixo de 100 clientes. 
*/

const avaliacoes = [
    {estrelas : 1, avaliacoes: 2},
    {estrelas : 2, avaliacoes: 15},
    {estrelas : 3, avaliacoes: 18},
    {estrelas : 4, avaliacoes: 25},
    {estrelas : 5, avaliacoes: 40}
]

const media = avaliacoes.reduce((acc, value) => acc + ((value.estrelas * value.avaliacoes) / (avaliacoes.reduce((acc, value) => acc + value.avaliacoes, 0))), 0)

console.log(`A nota média das avaliações da empresa feita no dia é ${media.toFixed(2)}`)