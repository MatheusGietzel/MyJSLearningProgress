const numero = parseFloat(prompt("Insira o valor a ser multiplicado"))
let resultado = " " 

for( let fator= 1 ; fator <= 20 ; fator++ ){
    resultado += ("Multiplicando o valor " + numero + " x " + fator + " teremos: " + (numero * fator) + "\n")
console.log("o resultado da tabela será:\n" + resultado)
}