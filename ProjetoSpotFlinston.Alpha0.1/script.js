const musicas = [
    { nome: "Bohemian Rhapsody", duracao: "5:55", album: "A Night at the Opera" },
    { nome: "Imagine", duracao: "3:01", album: "Imagine" },
    { nome: "Smells Like Teen Spirit", duracao: "4:38", album: "Nevermind" },
    { nome: "Stairway to Heaven", duracao: "8:02", album: "Led Zeppelin IV" },
    { nome: "Like a Rolling Stone", duracao: "6:13", album: "Highway 61 Revisited" },
];

const playlist = []


//Função de mostrar a sequencia da playlist
function mostrarPlaylist (){

  if (playlist.length === 0){
    alert("Não há músicas na Playlist")
    
    }
    else{
      let sequenciaPlaylist = [];
      playlist.forEach(( musica, index ) => {
        sequenciaPlaylist += "Posição " + (index + 1);
        sequenciaPlaylist += "\n";
        sequenciaPlaylist += "Nome: " + musica.nome;
        sequenciaPlaylist += "\n";
        sequenciaPlaylist += "Album: " + musica.album;
        sequenciaPlaylist += "\n";
        sequenciaPlaylist += "Duração: " + musica.duracao;
        sequenciaPlaylist += "\n\n";
        });
      alert(sequenciaPlaylist);
      return sequenciaPlaylist
    }
} 


//Função de mostrar o conteúdo da biblioteca de músicas
function mostrarMusicas() {
  let conteudoMusica = "";

  musicas.forEach( musica => {
    conteudoMusica += "Nome: " + musica.nome;
    conteudoMusica += "\n";
    conteudoMusica += "Album: " + musica.album;
    conteudoMusica += "\n";
    conteudoMusica += "Duração: " + musica.duracao;
    conteudoMusica += "\n\n";
  });

  alert(conteudoMusica);
  return conteudoMusica
}


//Função de adicionar uma nova música à biblioteca de músicas
function adicionarMusica(){
    const nome = prompt("Adicione o nome da música")
    const duracao = prompt("Adicione a duração da música")
    const album = prompt("Adicione o album da música")

    const confirmacao = confirm("Adicionar música?"+ "\nNome - "+ nome + "\nDuração - " + duracao + "\nAlbum - " + album)

    if(confirmacao){
        const adicionarMusica = {nome, duracao, album, musica: [ ]}
        musicas.push(adicionarMusica)
        alert("Musica adicionada à biblioteca")
    } else{
        alert("Retornando")
                return}
}


//Função de adicionar uma música da biblioteca na playlist
function adicionarMusicaPlayList(){
    const musicaEscolhida = prompt("Insira a música escolhida")
    const musicaEncontrada = musicas.find(musica => musica.nome == musicaEscolhida)

    if (musicaEncontrada){
        const confirmar = confirm("Desde adicionar a música: "+ musicaEscolhida + "?")
        
        if(confirmar){
            playlist.push(musicaEncontrada)
        alert("Musica Adicionada à playlist")
        }  else{return}
    } else {
        alert("Música não encontrada")
    }
}

//Função de mostrar a musica atual (A primeira música da playlist)
function musicaAtual() {
  if (playlist.length === 0) {
    alert("Ops, aparentemente não há músicas na playlist no momento.");
    return;
  }

  alert("Tocando: " + playlist[0].nome);
}

//Função de passar a música da Playlist
function passarMusica() {
 if(playlist.length === 0) {
  alert("Não há musicas na queue");
 }
 else{
  const proxMusica = playlist.shift().nome; 
  alert("A música " + proxMusica + " foi excluída.");

  return proxMusica;
 }
}

//Função de mostrar o menu
function exibirMenu() {
    const opcao = prompt(
      "Ispoti Fai" +
      "\n\nEscolha uma das opções" +
      "\n1. Mostrar musicas da Playlist" +
      "\n2. Mostrar musicas da Biblioteca" +
      "\n3. Adicionar musica à Biblioteca" +
      "\n4. Adicionar musica à Playlist" +
      "\n5. Mostrar musica atual" +
      "\n6. Próxima musica" +
      "\n7. Encerrar APP"
    )  
    return opcao}

//Função que executa o programa
function executar() {
    let opcao = ""
  
    do {
      opcao = exibirMenu()
  
      switch (opcao) {
        case "1":
          mostrarPlaylist()
          break
        case "2":
          mostrarMusicas()
          break
        case "3":
          adicionarMusica()
          break
        case "4":
          adicionarMusicaPlayList()
          break
        case "5":
          musicaAtual()
          break
        case "6":
          passarMusica()
          break
        case "7":
            alert("Encerrando o app")
          break;
        default:
          alert("Opção inválida.")
      }
  
    } while (opcao !== "7");
  }
  
  executar()