let saldo = prompt("Insira o saldo");
saldo = parseFloat(saldo)
let pergunta = ""

do {
    pergunta = prompt(
    "Saldo disponivel: R$" + saldo + 
    "\n1. Adicionar dinheiro" +
    "\n2. Remover dinheiro" +
    "\n3. Encerrar")

    switch(pergunta){
        case "1":
            saldo += parseFloat(prompt("Insira o valor a ser depositado"));
            break;
        case "2":
            saldo -= parseFloat(prompt("Insira o valor a ser resgatado"));
            break;
        case "3":
            alert("Encerrando o app");
            alert("App encerrado");
            break;
        default: alert("Opção inválida");
    }
} while(pergunta !== "3")