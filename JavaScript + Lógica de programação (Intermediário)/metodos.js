class Spaceship{
    constructor(name){
        this.name = name
        this.velocity = 0
    }

    //definir um método
    speedUp(acceleration){
        this.velocity += acceleration
    }
}

let artemis = new Spaceship("Ártemis")

console.log(artemis)

artemis.speedUp(10)
artemis.speedUp(15)

console.log(artemis)