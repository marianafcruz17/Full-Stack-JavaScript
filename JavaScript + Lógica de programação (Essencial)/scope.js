//scope global
let spaceshipName = "Supernova"

function changeSpaceshipName(){
    spaceshipName = "Elemental"
}

console.log(spaceshipName)
changeSpaceshipName()
console.log(spaceshipName)

//scope local
function startSpaceshipVelocity(){
    let spaceshipVelocity = 0
}

startSpaceshipVelocity()
//não consegue acessar a variável fora da função
console.log(spaceshipVelocity)

//scope local
function setSpaceshioDetails(){
    console.log(spaceshipName)
    console.log(spaceshipType)
    var spaceshipName = "Elemental"
    let spaceshipType = "Discovery"
    console.log(spaceshipName)
    console.log(spaceshipType)
}

setSpaceshioDetails()