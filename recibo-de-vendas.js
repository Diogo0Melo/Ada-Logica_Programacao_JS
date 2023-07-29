
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

let infosProduto = {}
let listaProdutos = []
let produto = ""
let valor = 0
let cupom = 0
let quantidade = 1
for (var i in reciboDeVenda) {
    let sairLoop = false
    if (reciboDeVenda[i] == "/") {

        produto = produto[0].toUpperCase() + produto.substring(1);
        infosProduto.produto = produto
        produto = ""
        continue
    }
    else if (reciboDeVenda[i] == "=") {
        infosProduto.valor = valor
        valor = 0
        produto = ""
        continue
    }
    else if (reciboDeVenda[i] == ";") {
        infosProduto.cupom = cupom
        infosProduto.quantidade = quantidade
        for (var j = 0; j < listaProdutos.length; j++) {
            if (infosProduto.produto == listaProdutos[j].produto) {
                listaProdutos[j].quantidade += 1
            }
            else {
                continue
            }
            sairLoop = true
            break
        }
        if (sairLoop) {
            cupom = 0
            produto = ""
            continue
        }
        listaProdutos.push({ ...infosProduto })
        cupom = 0
        produto = ""
        continue
    }
    else if (produto == "valor") {
        if (reciboDeVenda[i] == ".") {
            i++
            valor += parseFloat("." + reciboDeVenda[i])

        }
        else {
            valor += +reciboDeVenda[i]
            continue
        }
    }
    else if (produto == "cupom") {
        cupom += +reciboDeVenda[i]
        continue
    }
    produto += reciboDeVenda[i]

}

console.log(infosProduto)
console.log(listaProdutos)

let total = {}
let totalConta = 0
let quantidadeConta = 0
let cupomConta = 0
for (var i in listaProdutos) {
    let subTotalConta = (listaProdutos[i].valor - (listaProdutos[i].valor * (listaProdutos[i].cupom / 100))) * listaProdutos[i].quantidade
    quantidadeConta += listaProdutos[i].quantidade
    cupomConta += listaProdutos[i].cupom
    totalConta += subTotalConta
}

total.valorTotal = totalConta, total.valorTotalDesconto = cupomConta, total.quantidadeDeProdutos = quantidadeConta

console.log(total)


function gerarRecibo() {
    let lista = document.getElementById('lista');
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

    for (var i = 0; i < listaProdutos.length; i++) {
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

    let lista2 = document.getElementById('lista2');
    let tHead2 = document.getElementById("tHead2");
    let tBody2 = document.getElementById("tBody2");
    let th2 = document.createElement("th");
    let tr2 = document.createElement("tr");

    th2.appendChild(document.createTextNode("Valor Total"))

    tHead2.appendChild(th2)

    th2 = document.createElement("th");
    th2.appendChild(document.createTextNode("Desconto Total"))

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