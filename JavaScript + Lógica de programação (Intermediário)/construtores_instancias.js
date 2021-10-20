class SpacialStation{
    constructor(name,platformsQuantity){
        this.name = name
        this.platformsQuantity = platformsQuantity
    }
}

//instancia a classe com o método construtor
let observatory = new SpacialStation("Observatório",40)

console.log(observatory)

class Spaceship{
    constructor(name,type="Descoberta"){
        this.name = name
        this.type = type
    }
}

let darwin = new Spaceship("Darwin")
let helmet = new Spaceship("Helmet","Batalha")

console.log(darwin)
console.log(helmet)