function modoClaro(){
document.body.style.color = "black";
document.body.style.backgroundColor = "#26d33d";
}

function modoEscuro(){
    document.body.style.color = "aliceblue";
    document.body.style.backgroundColor= "#3a3203";
}

function mudarTema(){
    document.body.classList.toggle("is-light");
    document.body.classList.toggle("is-dark");
}

//document.getElementById('modoClaro').addEventListener('click', modoClaro)
//document.getElementById('modoEscuro').addEventListener('click', modoEscuro)
document.getElementById("mudarTema").addEventListener("click",mudarTema)