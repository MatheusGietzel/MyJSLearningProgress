function normalSum(a,b){
    return a + b
}
console.log(`Soma normal: ${normalSum(2,2)}`)


const anonymousSUM = function(a,b){
    return a + b
}
console.log(`Soma anônima: ${anonymousSUM(2,2)}`)


const arrowSum = (a,b) => {
    return a + b
}
console.log(`Soma arrow: ${arrowSum(2,2)}`)


const subtraction = (a,b) => a - b
console.log(`Subtração: ${subtraction(5,2)}`)


const double = n => `O dobro de ${n} é ${n * 2}`
const number = 21
console.log(double(number))


const towns = ["São Paulo","Paraná","Paraiba","Pindamonhangaba","Espirito Santo","Jerusalém","Pintópolis"]
const começaComP = towns.filter(town => town[0] === "P" && town.length > 7)
console.log(começaComP)

