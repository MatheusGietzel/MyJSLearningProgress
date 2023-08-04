//Média Aritmética Simples:
function mediaAritmeticaSimples (...numeros){
    const somaTotal = numeros.reduce((accu, atual) => accu + atual, 0)
    return somaTotal / numeros.length
}
console.log(`Média aritmética simples: ${mediaAritmeticaSimples(5, 5, 5, 5, 5,)}`)

//Média Aritmética Ponderada:
const mediaAritmeticaPonderada = (...entradas) => {
    const somaTotal = entradas.reduce((accu, {numero , peso}) => accu + (numero * peso ?? 1), 0)
    const somaPeso = entradas.reduce((accu , entradas) => accu + entradas.peso ?? 1 ,0)
    return somaTotal / somaPeso
}
console.log(`Média aritmética ponderada: ${mediaAritmeticaPonderada({numero: 10, peso:2}, {numero: 60, peso:30})}`)

//Mediana:
const mediana = (...numeros) => {
    const numerosOrdenados = [...numeros].sort((a, b) => a - b)
    const meio = Math.floor(numerosOrdenados.length / 2)
    if (numerosOrdenados.lenght % 2 !== 0) {
        return numerosOrdenados[meio]
    } else{
        const primeiraMediana = numerosOrdenados[meio - 1]
        const segundaMediana = numerosOrdenados[meio]
        return primeiraMediana + segundaMediana / 2
    }
}
console.log(`A mediana será: ${mediana(10,10,10)}`)

//Moda
const moda = (...numeros) => {
    const quantidades = numeros.map(num => [
        num,
        numeros.filter(n => num === n).length
    ])
    quantidades.sort((a, b) => b[1] - a[1])
    return quantidades[0][0]
}
console.log(`A moda será: ${moda(10,4,4)}`)
