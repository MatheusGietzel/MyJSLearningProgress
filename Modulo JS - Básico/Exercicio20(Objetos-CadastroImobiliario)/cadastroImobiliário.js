const casasCadastradas = [ ]
let pergunta = ""
let qntdCasas = 0
do{
    pergunta = prompt(
        "Olá, seja bem vindo ao RealState Imobiliária!" +
        "Atualmente possuimos " + qntdCasas + " casas cadastradas!" +
        "\nPara prosseguir, selecione uma das opções abaixo:" +
        "\n1.) Salvar novo Imóvel" + 
        "\n2.) Mostrar imóveis disponíveis" +
        "\n3.) Encerrar APP"
    )
    switch(pergunta){
        case "1":
            alert("Para salvar um novo imóvel, responda as questões à seguir!")
            const casa = { }
            casa.proprietario = prompt("Insira o nome do proprietário legal do imóvel")
            casa.quartos = prompt("Insira a quantidade de quartos")
            casa.banheiros = prompt("Insira a quantidade de banheiros")
            casa.garagem = prompt("Possui garagem?")
            
            const confirmacao = confirm("Você confirma os dados inseridos?")
            if(confirmacao){
                casasCadastradas.push(casa)
                qntdCasas++
                alert("O imóvel foi inserido!")
            } else{
                alert("Voltando ao menu")
            }
            break;
        case "2":
            for (let i = 0; i < casasCadastradas.length; i++) {
                alert(
                  "Imóvel " + (i + 1) +
                  "\nProprietário: " + casasCadastradas[i].proprietario +
                  "\nQuartos: " + casasCadastradas[i].quartos +
                  "\nBanheiros: " + casasCadastradas[i].banheiros +
                  "\nPossui Garagem? " + casasCadastradas[i].garagem
                )
              }
        break;
        case "3":
                    alert("Encerrando o app")
        break;
        default: alert("Opção inválida")
    }
}while(pergunta !== "3")