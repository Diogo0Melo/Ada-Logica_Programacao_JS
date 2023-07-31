
// Em um sistema de vendas é emitido um recibo a cada venda, esse recibo está em formato string com a seguinte estrutura: 
// nome-do-produto1/valor33.5=cupom5;nome-do-produto2/valor4.99=cupom0;nome-do-produto3/valor10=cupom0;...
// As vendas são divididas por ; (ponto e virgula)

// Sendo: 
// nome-do-produto1 até a / (barra) o nome do produto
// valor33.5 o valor do produto até o = (igual)
// cupom5 a porcentagem de desconto do produto após o = (igual)


// Precisamos formatar essa string para obter uma lista de objetos com a seguinte estrutura: 

const listaDaVenda = [
    {
        produto: 'Nome do produto formatado', // Nome do produto formatado com a primeira letra maiúscula 
        valor: 99, // Valor do produto
        cupom: 4, // Valor de desconto do produto em porcentagem, nesse caso seria 4%
        quantidade: 1, // A quantidade que esse produto aparece na string
    }
]

// Extra: 
// Totalização da venda
// Além da lista completa formatada da venda, seria interessante obter a totalização dessa venda para apresentar ao cliente final
// Dado essa importância os seguintes dados devem ser apresentado em um objeto: 

const totais = {
    valorTotal: 999, // Valor total da venda
    valorTotalDesconto: 999, // Valor total com desconto
    quantidadeDeProdutos: 999, // Quantidade de produtos na venda
}

const reciboDeVenda = 'régua/valor3=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;estojo/valor8=cupom0;cola/valor4=cupom0;cola/valor4=cupom0;mochila/valor50=cupom10;lápis/valor0.5=cupom0;cola/valor4=cupom0;lápis/valor0.5=cupom0;mochila/valor50=cupom10;tesoura/valor5=cupom0;caneta/valor1=cupom0;cola/valor4=cupom0;estojo/valor8=cupom0;borracha/valor2=cupom0;caderno/valor15=cupom5;lápis/valor0.5=cupom0;lápis/valor0.5=cupom0;tesoura/valor5=cupom0;'

// Boa sorte =D

const infosProduto = {}
const listaProdutos = []
var separators = ['/valor', '=cupom', ';'];
var result = reciboDeVenda.split(RegExp(separators.join('|'), 'g')).filter(element => element);
for (let i = 0; i < result.length; i++) {
    let produto = result[i]
    produto = produto[0].toUpperCase() + produto.substring(1);
    infosProduto.produto = produto
    if (listaProdutos.find(p => p.produto == infosProduto.produto)) {
        listaProdutos[listaProdutos.findIndex(p => p.produto == infosProduto.produto)].quantidade++;
        i += 2
        continue
    }
    infosProduto.valor = +result[i+=1]
    infosProduto.cupom = +result[i+=1]
    infosProduto.quantidade = 1
    listaProdutos.push({ ...infosProduto })

}
console.log(listaProdutos)

const total = {}
let totalConta = 0, quantidadeConta = 0, cupomConta = 0;

for (let i in listaProdutos) {
    totalConta += listaProdutos[i].valor * listaProdutos[i].quantidade
    quantidadeConta += listaProdutos[i].quantidade
    cupomConta += (listaProdutos[i].valor - (listaProdutos[i].valor * (listaProdutos[i].cupom / 100))) * listaProdutos[i].quantidade
}

total.valorTotal = totalConta, total.valorTotalDesconto = cupomConta, total.quantidadeDeProdutos = quantidadeConta

console.log(total)



function gerarRecibo() {
    let tHead = document.getElementById("tHead");
    let tBody = document.getElementById("tBody");
    let th = document.createElement("th");
    let tr = document.createElement("tr");
    th.appendChild(document.createTextNode("Produto"));
    tHead.appendChild(th);
    th = document.createElement("th");
    th.appendChild(document.createTextNode("Valor"));
    tHead.appendChild(th);
    th = document.createElement("th");
    th.appendChild(document.createTextNode("Desconto"));
    tHead.appendChild(th);
    th = document.createElement("th");
    th.appendChild(document.createTextNode("Quantidade"));
    tHead.appendChild(th);

    for (let i = -1; i < listaProdutos.length; i++) {
        for (j in listaProdutos[i]) {
            let item = document.createElement('td');
            item.appendChild(document.createTextNode(listaProdutos[i].produto));
            tr.appendChild(item);

            item = document.createElement('td');
            item.appendChild(document.createTextNode("R$" + listaProdutos[i].valor));
            tr.appendChild(item);

            item = document.createElement('td');
            item.appendChild(document.createTextNode(listaProdutos[i].cupom + "%"));
            tr.appendChild(item);

            item = document.createElement('td');
            item.appendChild(document.createTextNode(listaProdutos[i].quantidade));
            tr.appendChild(item);

            tr = document.createElement("tr");
        }
        tBody.appendChild(tr);
    }

    document.getElementById("botao").style.display = "none";

    let tHead2 = document.getElementById("tHead2");
    let tBody2 = document.getElementById("tBody2");
    let th2 = document.createElement("th");
    let tr2 = document.createElement("tr");

    th2.appendChild(document.createTextNode("Valor Total"))

    tHead2.appendChild(th2)

    th2 = document.createElement("th");
    th2.appendChild(document.createTextNode("Valor Com Desconto"))

    tHead2.appendChild(th2)

    th2 = document.createElement("th");
    th2.appendChild(document.createTextNode("Quantidade Total"))

    tHead2.appendChild(th2)

    th2 = document.createElement("th");

    let item2 = document.createElement("td")
    item2.appendChild(document.createTextNode("R$" + total.valorTotal))
    tr2.appendChild(item2)
    item2 = document.createElement("td")
    item2.appendChild(document.createTextNode("R$" + total.valorTotalDesconto))
    tr2.appendChild(item2)
    item2 = document.createElement("td")
    item2.appendChild(document.createTextNode(total.quantidadeDeProdutos))
    tr2.appendChild(item2)
    item2 = document.createElement("td")
    tBody2.appendChild(tr2)
}