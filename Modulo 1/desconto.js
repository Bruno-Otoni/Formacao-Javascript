/* Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal na 
etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calcúlo
adequado para a compra.

Código Condição de Pagamento
1 - Debito à vista = 10% de desconto
2 - Dinheiro ou PIX = 15% de desconto
3 - Crédito Parcelado em até 2x = preço normal sem juros
4 - Crédito Parcelado acima de 3x = preço normal com juros de 10%
*/

function aplicarDesconto(valor, desconto){
    return (valor - (valor *(desconto / 100)))
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)))
}

let precoProduto = 100;
let formaPagamento = 2;

if (formaPagamento === 1) {
    console.log("O valor final da transação é de " + aplicarDesconto(precoProduto, 10))
} else if (formaPagamento === 2) {
    console.log("O valor final da transação é de " + aplicarDesconto(precoProduto, 15))
} else if (formaPagamento === 3) {
    console.log("O valor final da transação é de " + precoProduto)
} else {
    console.log("O valor final da transação é de " + aplicarJuros(precoProduto, 10))
}
