/*
- Informar o nome da nave
- Velocidade inicial = 0
- Exibir um menu para o usuário escolher as seguintes opções:
    1- Acelerar a nave em 5km/s
    2- Desacelerar em 5km/s
    3- Imprimir dados de bordo
    4- Sair do programa
*/

let spaceshipName = prompt("Digite o nome da nave: ")
let spaceshipVelocity = 0
let chosenOption

function showMenu(){
    let option

    while(option!="1" && option!="2" && option!="3" && option!="4"){
        option = prompt("O que deseja fazer?\n" +
                        "\n1- Acelerar a nave em 5km/s" + 
                        "\n2- Desacelerar a nave em 5km/s" + 
                        "\n3- Imprimir dados de bordo" + 
                        "\n4- Sair do programa")
    }

    return option
}

function speedUp(velocity){
    let newVelocity = velocity + 5
    return newVelocity
}

function slowDown(velocity){
    let newVelocity = velocity - 5

    if(newVelocity<0){
        newVelocity = 0
    }

    return newVelocity
}

function printSpaceshipBoardData(name,velocity){
    alert("Espaçonave: " + name + "\nVelocidade: " + velocity + "km/s")
}

do{
    chosenOption = showMenu()

    switch(chosenOption){
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity)
            break
        case "2":
            spaceshipVelocity = slowDown(spaceshipVelocity)
            break
        case "3":
            printSpaceshipBoardData(spaceshipName,spaceshipVelocity)
            break
        default:
            alert("Encerrando o programa de bordo")
            break
    }
}while(chosenOption!="4")