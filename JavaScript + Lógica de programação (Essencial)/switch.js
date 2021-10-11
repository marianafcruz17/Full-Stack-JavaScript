let velocity = 80

switch(velocity*2){
    case 100:
        console.log("Sua velocidade é 100km/s")
        break
    case 160:
        console.log("Sua velocidade é 160km/s")
        break
    default:
        console.log("Velocidade não identificada")
        break
}

switch(velocity){
    case 80:
    case 90:
    case 100:
        console.log("Valocidade aceitável")
        break
    case 110:
        console.log("Velocidade alta, mas aceitável")
        break
    default:
        console.log("Velocidade não identificada")
        break
}

let spaceship = "Elemental"

switch(spaceship){
    case "Golias":
        console.log("Nave mais resistente")
        break
    case "Raptor":
        console.log("Nave mais rápida")
        break
    case "Enterprise":
        console.log("Nave a Frota Estelar")
        break
    default:
        console.log("Nave comum")
        break
}
