let spaceship = "Elemental"
let velocity = 20

//TABELA VERDADE - AND
console.log(spaceship.length==9 && velocity>15) //V e V = V
console.log(velocity<10 && velocity<19) //V e F = F
console.log(velocity<17 && spaceship=="Elemental") //F e V = F
console.log(spaceship=="Golias" && velocity>21) //F e F = F

//TABELA VERDADE - OR
console.log(spaceship.length==9 || velocity>15) //V ou V = V
console.log(velocity<10 || velocity<19) //V ou F = V
console.log(velocity<17 || spaceship=="Elemental") //F ou V = V
console.log(spaceship=="Golias" || velocity>21) //F ou F = F

//TABELA VERDADE - NOT
console.log(!(velocity>19)) //não V = F
console.log(!(spaceship=="Elemental")) //não V = F
console.log(!(velocity>21)) //não F = V
console.log(!(spaceship=="Golias")) //não F = V

console.let(!(velocity>25 && spaceship=="Elemental") || (velocity-3==17 && spaceship.length+1>15))
//!(20>25 && "Elemental"=="Elemental") || (17==17 && 10>15))
//!(F && V) || (V && F))
//!F || V
//V || F
//V