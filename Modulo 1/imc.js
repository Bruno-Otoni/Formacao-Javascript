


class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura)
    }

    classificarImc() {
        const imc = this.calcularImc()

        if (imc < 18.50) {
            return ('esta Abaixo do Peso')
        } else if (imc >= 18.50 && imc < 25) {
            return ('esta no seu Peso Normal')
        } else if (imc >= 25 && imc <= 30) {
            return ('esta com Sobrepeso')
        } else if (imc >= 30 && imc < 40) {
            return ('esta Obeso')
        } else {
            return ('Você esta com Obesidade Grave')
        }
    }
}

const jose = new Pessoa ('Jose', 70, 1.75)
console.log(`${jose.nome} tem um IMC = ${jose.calcularImc().toFixed(2)} e ${jose.classificarImc()}`)

const bruno = new Pessoa ('Bruno', 135, 1.90)
console.log(`${bruno.nome} tem um IMC = ${bruno.calcularImc().toFixed(2)} e ${bruno.classificarImc()}`)

const sara = new Pessoa ('Sara', 82.5, 1.62)
console.log(`${sara.nome} tem um IMC = ${sara.calcularImc().toFixed(2)} e ${sara.classificarImc()}`)
