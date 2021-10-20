class Spaceship{
    //variável estática utilizando get
    static get decelatationRate(){
        return 0.15
    }

    constructor(name){
        this.name = name
        this.currentVelocity = 0
    }

    speedUp(acceletation){
        this.currentVelocity += acceletation * (1 - Spaceship.decelatationRate)
    }
}

let spaceship = new Spaceship("Apollo")

spaceship.speedUp(100)

console.log(spaceship)