const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

console.log("Comandos de adicionar")
console.log("Adicionar ao fim do array -> push")
arr.push("Boromir")

console.log("Adicionar ao começo do array -> unshift")
arr.unshift("Teste")
console.log(arr)


console.log("Comandos de deletar")
console.log("Deletar ao fim do array -> pop")
const ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

console.log("Deletar ao começo do array -> shift")
arr.shift()
console.log(arr)
console.log(ultimoElemento)


console.log("Comandos de pesquisar um elemento")
console.log("includes: Verifica se um certo elemento está presente no array") 
const inclui = arr.includes("Gandalf")
const inclui2 = arr.includes("Gandalf The Grey Mage")
console.log(inclui)
console.log(inclui2)

console.log("indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array")
const indice = arr.indexOf("Gandalf")
console.log(indice)


console.log("Elementos de cortar e concatenar um array")
console.log("slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original")
const hobbits = arr.slice(0, 4)

console.log("Também pode ser usado com números negativos referenciar o final do array")
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

console.log("concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays")
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)
console.log(hobbits)
console.log(outros)

console.log("splice: Permite remover elementos em qualquer posição do array e substituir por novos")
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(elementosRemovidos)
console.log(sociedade)

console.log("Como iterar elementos")
console.log("Usando o for para percorrer cada elemento do array")
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice]
  console.log(elemento + " se encontra na posição " + indice)
} 