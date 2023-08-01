let opcao = ""

do {
    opcao = prompt( "Olá, seja bem vindo!" +
                    "\nSelecione uma opção:" +
                    "\n1. opção 1" +
                    "\n2. opção 2" +
                    "\n3. opção 3" +
                    "\n4. opção 4" +
                    "\n5. Encerrar");

    switch (opcao){
        case "1":
            alert( "Você escolheu a primeira opção" );
            break;
        case "2":
            alert("Você escolheu a segunda opção");
            break;    
        case "3":
            alert("Você escolheu a terceira opção");
            break;
        case "4": 
            alert("Você escolheu a quarta opção");
            break;     
        case "5":
            alert("Você escolheu encerrar");
            alert("Encerrando....");
            break;
        default:
                alert("Opção inválida.");
    }
}while (opcao !== "5")