class TransportSpaceship{
    constructor(name){
        this.name = name
        this.currentVelocity = 0
    }

    //cria um método para atribuir valor
    set velocity(newVelocity){
        if(newVelocity>120){
            this.currentVelocity = 120
        }else{
            this.currentVelocity = newVelocity
        }
    }
}

let spaceship = new TransportSpaceship("Transportados")

spaceship.velocity = 130

console.log(spaceship)

class RecourceProcessStation{
    constructor(name,monthlyProcessedLoad){
        this.name = name
        this.monthlyProcessedLoad = monthlyProcessedLoad
    }

    get weeklyProcessedLoad(){
        return this.monthlyProcessedLoad/4
    }
}

let recourceProcessor = new RecourceProcessStation("Gaia",500)

console.log(recourceProcessor.weeklyProcessedLoad)

recourceProcessor.monthlyProcessedLoad = 600

console.log(recourceProcessor.weeklyProcessedLoad)