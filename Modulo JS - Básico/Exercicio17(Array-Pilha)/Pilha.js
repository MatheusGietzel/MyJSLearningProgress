const cartas = [
    'Ás de Paus', '2 de Paus', '3 de Paus', '4 de Paus', '5 de Paus', '6 de Paus', '7 de Paus', '8 de Paus', '9 de Paus', '10 de Paus', 'Valete de Paus', 'Dama de Paus', 'Rei de Paus' +
    'Ás de Copas', '2 de Copas', '3 de Copas', '4 de Copas', '5 de Copas', '6 de Copas', '7 de Copas', '8 de Copas', '9 de Copas', '10 de Copas', 'Valete de Copas', 'Dama de Copas', 'Rei de Copas' +
    'Ás de Espadas', '2 de Espadas', '3 de Espadas', '4 de Espadas', '5 de Espadas', '6 de Espadas', '7 de Espadas', '8 de Espadas', '9 de Espadas', '10 de Espadas', 'Valete de Espadas', 'Dama de Espadas', 'Rei de Espadas' +
    'Ás de Ouros', '2 de Ouros', '3 de Ouros', '4 de Ouros', '5 de Ouros', '6 de Ouros', '7 de Ouros', '8 de Ouros', '9 de Ouros', '10 de Ouros', 'Valete de Ouros', 'Dama de Ouros', 'Rei de Ouros'
]

let pergunta = ""

do{
    pergunta = prompt(" Bem vindo ao JackBlack da Blaze!!!" +
            "\n Para dar inicio, selecione uma das opções abaixo:" +
            "\n 1.)Adicionar uma carta" +
            "\n 2.)Puxar uma carta" +
            "\n 3.)Checar as cartas da sequencia" +
            "\n 4.)Encerrar o cassino 100% legalizado fechadão com o Neymar e Felipe neto.jpeg")

    switch(pergunta){
    case "1":
        cartaAdicionada = prompt("Adicione a carta")
        cartas.unshift(cartaAdicionada)
        alert("A carta a seguir foi adicionada: " + cartaAdicionada)
        break;
    case "2":
        cartaRetirada = cartas.shift()
        alert("A carta retirada foi a: " + cartaRetirada)
        break;
    case "3":
        alert("As cartas disponiveis são: \n" + cartas)
        break;
    case "4":
        alert("Encerrando o programa 100% legalizado da Blaze")
        alert("Adeus e até a proxima, que o nosso senhor todo poderoso Neymar te guie")
        break;
    default: alert("Opção inválida")
    }
}while(pergunta !== "4")