/*
1- Considerem que a nave está a 150km/s
2- Criar uma função para desacelerar 20km/s a cada segundo
    - cada iteração de um laço de repetição é 1s
3- A função deve ser uma HOP e deve imprimir cada atualização que houver na 
velocidade da nave
4- Exibir uma mensagem informando que a nave está parada e as comportas podem ser abertas
*/

function slowDown(velocity, printer){
    let deceleration = 20

    while(velocity>0){
        printer(velocity)
        velocity -= deceleration
        
    }
    alert("Nave parada. As comportas podem ser abertas")
}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity,function(velocity){
    console.log("Velocidade atual: " + velocity)
})