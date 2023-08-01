const palavra = prompt("Insira a palavra a ser verificada:")

let palavraInvertida = ""

for (let i = palavra.length - 1; i >= 0 ; i--){
    palavraInvertida += palavra[i]
}
if (palavraInvertida === palavra){
    alert("A palavra " + palavra + " é um palindromo\n" +
    palavra + "=" + palavraInvertida)
} else{
    alert("A palavra " + palavra + " não é um palindromo, já que: " +
    palavra + " !== " + palavraInvertida)
}