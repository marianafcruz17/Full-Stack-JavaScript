let spaceship = "Helmet"
let newSpaceship = ""

for(let i=0;i<spaceship.length;i++){
    console.log(spaceship[i])
    //substitui o caractere e por i
    if(spaceship[i]=="e"){
        newSpaceship += "i"
    }else{
        newSpaceship += spaceship[i]
    }
}

console.log("NewSpaceship: " + newSpaceship)