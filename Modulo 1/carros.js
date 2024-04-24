/* Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilometro rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor gasto em
reais para realizar um determinado percurso.
*/

class Carros {

    constructor(_proprietario, marca, cor, ano, gastoMedio) {
        this.proprietario = _proprietario;
        this.marca = marca;
        this.cor = cor;
        this.ano = ano;
        this.gastoMedio = gastoMedio;
    }

    calcularCustoDePercurso(distancia, precoCombustivel) {
        return distancia * this.gastoMedio * precoCombustivel;
    }
}

const symbol = new Carros('Bruno', 'Renault Symbol', 'Prata', 2010, 1 / 10);
console.log(`O veículo de ${symbol.proprietario} é um ${symbol.marca} da cor ${symbol.cor}, ano ${symbol.ano} e irá realizar o percurso com um custo médio de ${symbol.calcularCustoDePercurso(100, 5.40).toFixed(2)}`);

const corsa = new Carros('Sara', 'Chevrolet Corsa', 'Verde', 1997, 1 / 13);
console.log(`O veículo de ${corsa.proprietario} é um ${corsa.marca} da cor ${corsa.cor}, ano ${corsa.ano} e irá realizar o percurso com um custo médio de ${corsa.calcularCustoDePercurso(100, 5.40).toFixed(2)}`);
