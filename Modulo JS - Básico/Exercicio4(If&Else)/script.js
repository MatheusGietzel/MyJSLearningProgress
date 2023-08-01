const atacante = prompt("Qual é o nome do personagem atacante?")
let poderDeAtaque = parseFloat(prompt("Qual é o seu poder de ataque?"))

let defensor = prompt("Qual é nome do personagem defensor?")
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"))
let poderDeDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"))
let possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
    danoCausado = poderDeAtaque - poderDeDefesa
  } else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
  } else (danoCausado = 0)
  
  pontosDeVida -= Danocausado (atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
  alert(
    atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
    defensor + "\nPontos de vida: " + pontosDeVida +
    "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
  )