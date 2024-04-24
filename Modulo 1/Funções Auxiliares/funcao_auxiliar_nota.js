/* script de função auxiliar para o exercicio 1 de calcular a media
de uma aluno*/

const entradas = [5.5]
let i = 0

function gets() {
    const valor = entradas[i];
    i++
    return valor;
}
function print(texto) {
    console.log(texto);
}
module.exports = { gets, print };
