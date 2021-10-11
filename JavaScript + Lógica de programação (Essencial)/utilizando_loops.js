/*
- Solicitar o nome da nave
- Utilizar uma estrutura de repetição para inverter o nome da nave
- Durante a inversão, procurar pelo caractere proibido
- Caso encontre, a inversão deve ser parada onde estiver
- O nome invertido deve ser impresso
- Exibir o nome original e após a ocultação
    "Nome original da nave: "
    "Nome após ocultação: "
*/

let spaceshipName = prompt("Qual é o nome da nave?")

let invertedName = ""

for(let i = spaceshipName.length - 1; i >= 0; i--) {
    if(spaceshipName[i] == "e") {
        break
    }
    invertedName += spaceshipName[i]
}

alert("Nome original da nave: " + spaceshipName + "\nNome após ocultação: " + invertedName)