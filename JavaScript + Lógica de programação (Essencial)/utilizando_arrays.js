/*
1- Filtrar o nome das naves que tem mais de 9 tripulantes
2- Informar o número da plataforma em que está a primeira nave que ainda está com engate pendente
3- Destacar o nome de todas as naves colando-as em caixa alta e exibindo
4- Exibir um alerta com todas estas informações
*/

const hitchedSpaceships = [
    ["Fenix",8,true],
    ["Golias",10,true],
    ["Helmet",5,false],
    ["Elemental",3,true],
    ["Darwin",15,false]
]

let crewGreaterThan9 = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship =>{
    return spaceship[0]
})

let ondoingHitchPlatform = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

let highlitedSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ")
message += "\nPlataform com processo de engate: " + (ondoingHitchPlatform + 1)
message += "\nEspaçonaves destacadas: " + highlitedSpaceships.join(", ")

alert(message)