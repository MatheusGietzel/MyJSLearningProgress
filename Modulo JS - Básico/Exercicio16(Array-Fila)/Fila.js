const santidades = ["Matheus","Lucas","Gabriel","Antedeguemon","Beuzebub","Deus"]
let opcao;
do{
    opcao = prompt(
    "Olá, seja bem vindo ao sistema de Consulta Jarbas 4.0" +
    "\nSegue abaixo a sequencia de pacientes marcados:" +
    "\n" + santidades +
    "\n1.) Consultar paciente" +
    "\n2.) Adicionar paciente" +
    "\n3.) Encerrar programa");
    
    switch(opcao) {
        case "1":
            alert("O paciente " + santidades[0] + " foi antendido");
            santidades.shift();
            break;
        case "2":
            novoPaciente = prompt("Adicione o nome do paciente");
            santidades.push(novoPaciente);
            alert("O paciente " + novoPaciente + " foi adicionado à fila");
            break;
        case "3":
            alert("Encerrando o app....");
            alert("App encerrado");
            break;
        default: alert("Opção inválida")
    }
}while(opcao !== "3")