function greetPilot(){
    alert("Bom dia, Piloto!")
}

greetPilot()

function speedUp(velocity,acceleration){
    let newVelocity = velocity + acceleration
    console.log("Nova velocidade: " + newVelocity)

    return newVelocity
}

velocity = speedUp(100,20)

function pilot(name, message="Ola"){
    alert(message + ", " + name)
}

pilot()

function speed(velocity,unit = "km/s",acceleration){
    let newVelocity = velocity + acceleration
    alert("Nova velocidade: " + newVelocity + unit)
}

speed(50,20)