let spacialStation = {
    name: "Receptora",
    platformsQuantity: 15,
    shape: "Esférica"
}

console.log(spacialStation.name.toUpperCase())

let spaceshipNames = ["Fenix","Puller","Golias"]

console.log(spaceshipNames[0].toUpperCase())

//array dentro de um objeto
let spaceship = {
    name: "Supernova",
    type: "Batalha",
    crew: ["Cap. Silva","Ana Júlia","Thiago"]
}

spaceship.crew.push("Ten. Fernanda")

console.log(spaceship)

//objeto dentro de um array
let spaceships = [
    {name: "Elemental", crewQuantity: 10},
    {name: "Colossus", crewQuantity: 8},
    {name: "Helmet", crewQuantity: 15},
]

console.log(spaceships[0].name)
console.log(spaceships[1].crewQuantity)

spaceships.forEach(spaceships => {
    alert(spaceships.name + " tem " + spaceships.crewQuantity + " tripulantes")
})

//objeto dentro de um objeto
let spaceship_ = {
    name: "Golias",
    maxCrew: 20,
    captain: {
        name: "Hugo Trent",
        age: 37
    }
}

console.log(spaceship_.captain.name)