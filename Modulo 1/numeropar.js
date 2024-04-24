// Crie um programa que seja capaz de percorre uma lista de números e imprima cada número par encontrado

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (let i = 0; i < numeros.length; i++) {
    const isnumeropar = numeros[i]

    if (isnumeropar % 2 === 0) {
        console.log(isnumeropar + ' é um número PAR')
    }

}