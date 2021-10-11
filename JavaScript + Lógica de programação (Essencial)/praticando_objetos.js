/*
1- Faremos um aplicativo que dará o mapeamento de valocidade de uma espaçonave
2- No aplicativo, vamos cadastrar uma espaçonava com seu nome, tipo e velocidade máxima
3- A nave deve partir da velocidade 0km/s
4- Apresentar o menu perguntando se o usuário que acelerar ou parar a nave
    - parar: uma mensagem deve ser exibida com nome e tipo da nave e em que velocidade estava
    - acelerar: deve exibir um prompt para informar o quanto deve acelerar
5- Quando a velocidade for incrementada, deve-se fazer uma verificação para ver se a espaçonave está acima da velocidade máxima
    - se estiver, uma mensagem deve ser exibida informando a velocidade da nave e a velocidade máxima permitida
6- 
*/

let spaceship = {
    velocity: 0,
    speedUp: function(acceleration){
        this.velocity += acceleration
    }
}

function registerSpaceship(){
    spaceship.name = prompt("Informe o nome da nave: ")
    spaceship.type = prompt("Informe o tipo da nave: ")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade máxima da nave (km/s): "))
}

function acelerate(){
    let acceleration = Number(prompt("Quantos km/s você deseja acelerar? "))

    spaceship.speedUp(acceleration)

    if(spaceship.velocity>spaceship.maxVelocity){
        alert("VELOCIDADE MÁXIMA ULTRAPASSADA! \nVelocidade da nave: " + spaceship.velocity + " km/s" + "\nVelocidade máxima da nave: " + spaceship.maxVelocity + " km/s")
    }
}

function stop(){
    alert("Nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da nave: " + spaceship.velocity + "\nVelocidade máxima da nave: " + spaceship.maxVelocity)
    spaceship.velocity = 0
}

function menu(){
    let chosenOption

    do{
        chosenOption = prompt("Você deseja: \n1- Acelerar\n2- Parar")

        switch(chosenOption){
            case "1":
                acelerate()
                break;
            case "2":
                stop()
                break;
            default:
                alert("Opção inválida")
                break;
        }
    }while(chosenOption!="2")
}

registerSpaceship()
menu()