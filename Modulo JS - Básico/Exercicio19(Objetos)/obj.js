const eu = { }

const tu = { }  

eu.nome = prompt("Insira seu nome")
eu.sobrenome = prompt("Insira seu sobrenome")
eu.idade = prompt("Insira sua idade")
eu.profissão = prompt("Insira sua profissão")

tu.nome = prompt("Insira o nome dela")
tu.sobrenome = prompt("Insira o sobrenome dela")
tu.idade = prompt("Insira a idade dela")
tu.profissão = prompt("Insira a profissão dela")

console.log(eu)
console.log(tu)

alert(eu.nome)
alert(eu.sobrenome)
alert(eu.idade)
alert(eu.profissão)

alert(tu.nome)
alert(tu.sobrenome)
alert(tu.idade)
alert(tu.profissão)

if(eu.nome === tu.nome){
    alert("O nome é igual")
} else{
    alert("Os nomes são diferentes")
}