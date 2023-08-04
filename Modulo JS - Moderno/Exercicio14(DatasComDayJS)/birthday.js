const dayjs = require("dayjs")

function birthday(date) {
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears + 1, 'year')
    const daysTo = nextBirthday.diff(today,'day') + 1
    console.log(
    `Idade: ${ageInYears}
    Proximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}
    Faltam ${daysTo} dias para o seu aniversario`)
}

birthday("2000-01-03")