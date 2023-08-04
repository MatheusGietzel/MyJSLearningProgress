let str = "Olá, teste"
console.log(...str)

let fruits = ["mamão", "banana", "limão", "laranja"]
console.log(...fruits)
console.log(...fruits[0])

const fruitsCopy = fruits

fruitsCopy.pop()
fruitsCopy.pop()
fruitsCopy.push("Abacate")

console.log({ fruits, fruitsCopy})

const fruitsClone = [...fruits]

fruitsClone.push("Toranja")
console.log({ fruits, fruitsClone, fruitsCopy })

const fruitsObj = {...fruits}
const fruitsObjClone = {...fruits}

fruitsObjClone.test = "test"

console.log({ fruitsObj, fruitsObjClone })