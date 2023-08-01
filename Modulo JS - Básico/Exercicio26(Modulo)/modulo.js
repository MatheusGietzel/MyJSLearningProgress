let pessoa = {
    nome: "Matheus",
    idade: 23,
    dizerOla(){
        console.log("Olá, Mundo! meu nome é " + this.nome);
    }
}

console.log(pessoa);

pessoa.dizerOla()