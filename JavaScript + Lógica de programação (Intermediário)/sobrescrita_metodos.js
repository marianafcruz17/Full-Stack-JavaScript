class Spaceship{
    constructor(name,maxCrew,maxRecommendedVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration){
        this.currentVelocity += acceleration

        if(this.currentVelocity > this.maxRecommendedVelocity){
            alert("VELOCIDADEMÁXIMA ULTRAPASSADA!!\nDiminua ou poderá provocar danos à nave")
        }
    }
}

//Reimplementar a classe Spaceshipe -> pode redefinir as próprias características
class TransportSpaceship extends Spaceship{
    speedUp(){
        alert("Naves de transporte só aumentam a velocidade em 1km/s")
        this.currentVelocity += 1
    }
}

let transportSpaceship = new TransportSpaceship("Transportadora",4,100)

transportSpaceship.speedUp()

console.log(transportSpaceship)