//Desestruturação de Objeto
let spaceship = {
    name: "Colossus",
    crewQuantity: 10,
    isHitched: false 
}

let {name: spaceshipName, crewQuantity} = spaceship

console.log(spaceshipName, crewQuantity)

//Desestruturação de Array
let spaceship = ["Colossus","Ártemis","Fênix"]

let [colossus,artemis] = spaceship

console.log(colossus,artemis)