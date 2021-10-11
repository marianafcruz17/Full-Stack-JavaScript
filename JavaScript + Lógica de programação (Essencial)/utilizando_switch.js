let distanciaInLY = prompt("Digite a distancia em anos-luz: ")
let chosenOption = prompt("Para qual unidade deseja converter?\n1- Parsec(pc)\n2- Unidade Astonômica\n3- Quilometros(km)\n\n(Digite o número da opção desejada)")

let chosenUnity
let convertedDistance

switch (chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        convertedDistance = distanciaInLY * 0.306601
        break;
    case "2":
        chosenUnity = "Unidade Astronômica"
        convertedDistance = distanciaInLY * 63241.1
        break;
    case "3":
        chosenUnity = "Quilometros"
        //pow -> eleva o 10 a 12
        convertedDistance = distanciaInLY * 9.5 * Math.pow(10,12)
        break;
    default:
        chosenUnity = "Unidade não identificada"
        convertedDistance = "Conversão fora do escopo"
        break;
}

alert("Distancia em anos-luz: " + distanciaInLY + "\n Unidade escolhida: " + convertedDistance + " " + chosenUnity)