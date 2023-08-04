const person = {
    name: "Matheus",
    job: "Developer",
    parents: ["Painho", "Mâinha"]
}

const name = person.name

const {job, parents } = person

console.log(`Olá, meu nome é ${name} e eu sou um ${job}`)

const [father, mother] = parents

console.log(`eu amo meu ${father} e minha ${mother}`)

function criarUsuario ({name , job , parents}){
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        job,
        parents,
    }
}

const Matheus = criarUsuario(person)

console.log(Matheus)