/* Crie um programa que calcule e imprima o salario a ser transferido para um funcionario.
Para realizar o calculo, receba o valor bruto do salario e o adicional dos beneficios.
O salario a ser transferido é calculado da seguinte maneira:

valor bruto do salario - percentual de imposto mediante a faixa salarial + adicional dos beneficios

Para calcular o percentual de imposto, segue as aliquotas:
 - De R$ 0,00 a R$ 1100,00 = 5%
 - De R$ 1100,01 a R$ 2500,00 = 10%
 - Maior que R$ 2500,00 = 15%

 Exemplo:
 Entrada: salario R$ 2000,00 + beneficio R$ 250,00
 Saída: Liquido de R$ 2050,00
 */

const { gets, print } = require('./Funções Auxiliares/funcao_auxiliar_salario')

const salarioBruto = gets();
const beneficio = gets();

function calcularPorcentagemDesconto(valor, percentual) {
    return valor * (percentual / 100);
}
function aliquotaImposto(salario) {
    if (salario >= 0 && salario <= 1100) {
        return 5
    } else if (salario >= 1100.01 && salario <= 2500) {
        return 10
    } else {
        return 15
    }
}

const imposto = aliquotaImposto(salarioBruto)
const desconto = calcularPorcentagemDesconto(salarioBruto, imposto)

const salarioLiquido = salarioBruto - desconto + beneficio

print('Valor a transferir será de: ' + salarioLiquido)
