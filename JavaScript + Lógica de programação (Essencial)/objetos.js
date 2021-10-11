let spaceship = {
    name: "Fenix",
    crewQuantity: 7,
    type: "Batalha"
}

console.log(spaceship)
console.log(spaceship.type)
console.log(spaceship[name])

spaceship.isHitched = false
spaceship["shieldLevel"] = 100

console.log(spaceship["isHitched"])
console.log(spaceship.shieldLevel)

let spacialStation = {
    name: "Fox",
    platformaQuantity: 10
}

console.log(spacialStation["name"])
console.log(spacialStation.name)