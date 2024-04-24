/* Faça um programa que receba N (quantidade de números) e seu respectivos valores
    Imprima o maior número PAR e o menor número IMPAR.
    Exemplo: 
    Entrada(5,3,4,1,10,8)
    Saída( Maior número par: 10 e Menor número impar: 1)
    */

const { gets, print } = require('./Funções Auxiliares/funcao_auxiliar_par_impar')

const n = gets()
let maiorNumeroPar = null
let menorNumeroImpar = null

for (let i = 0; i < n; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
        if (maiorNumeroPar === null || numero > maiorNumeroPar) {
            maiorNumeroPar = numero
        }
    } else {
        if (menorNumeroImpar === null || numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
    }
}
print('O maior número PAR é: ' + maiorNumeroPar)
print('O menor número IMPAR é: ' + menorNumeroImpar)
