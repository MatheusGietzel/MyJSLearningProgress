let pergunta = ""

function calculoGeometrico (a , b){
    const conta = a * b
    return conta
}

do{ pergunta = 
    prompt("Olá, bem vindo à calculadora Geometrica 1.0" +
    "\nPara dar segmento, selecione o tipo de calculo a ser desenvolvido: " +
    "\n1.) Calcular a área de um Triângulo"+
    "\n2.) Calcular a área de um Retangulo" +
    "\n3.) Calcular a área de um Quadrado " +
    "\n4.) Calcular a área de um Trapézio" +
    "\n5.) Calcular a área de um Cículo" +
    "\n6.) Encerrar aplicação"
            )
switch(pergunta){
    case "1":
        a = parseFloat(prompt("Insira o valor da base"))
        b = parseFloat(prompt("Insira o valor da altura"))
            resultado = calculoGeometrico(a , b) / 2
        alert("O resultado da conta é " + resultado)
        break;
   
        case "2":
        a = parseFloat(prompt("Insira o valor da base"))
        b = parseFloat(prompt("Insira o valor da altura"))
            resultado = calculoGeometrico(a , b)
        alert("O resultado da conta é " + resultado)
        break;
    
        case "3":
        a = parseFloat(prompt("Insira o valor dos lados"))
            resultado = calculoGeometrico(a , a)
        alert("O resultado da conta é " + resultado)
        break;
    
        case "4":
        a = parseFloat(prompt("Insira o valor da base maior")) +
             parseFloat(prompt("Insira o valor da base menor"))
        b = parseFloat(prompt("Insira o valor da altura"))
            resultado = calculoGeometrico(a , b) / 2
        alert("O resultado da conta é " + resultado)
        break;

        case "5":
        a = "3.14"
        b = parseFloat(prompt("Insira o valor do raio"))
            resultado = a * (b*b)
        alert("O resultado da conta é " + resultado)
        break;

        case "6":
            alert("Encerrando o app")
            alert("....")           
            alert("App encerrado")
        break
}
} while(pergunta !== "6")