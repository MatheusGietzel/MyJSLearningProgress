const nomeViajante = prompt("Insira seu nome");

const pergunta = prompt("Você já visitou alguma cidade? (S/N)");

var pergunta2 = "";
while (pergunta === "S") {
    var cidade = prompt("Qual cidade?");
    pergunta2 += cidade + "\n";
    var pergunta3 = prompt("Visitou mais alguma? (S/N)");

    if (pergunta3 === "N") {
        break;
    }
    if (pergunta3 !== "S") {
        alert("Resposta inválida. Por favor, responda com 'S' para sim ou 'N' para não.");
    }
}

alert("Olá " + nomeViajante + ", aqui diz que você já viajou para as seguintes localidades:\n" + pergunta2);
