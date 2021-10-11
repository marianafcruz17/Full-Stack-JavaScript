let hitchedSpaceships = ["Deméter","Darwin","Supernova","Fenix","Puller"]

hitchedSpaceships.forEach(function(currentSpaceship,index){
    console.log("Nave: " + currentSpaceship + "\nIndice: " + index)
})

let upcasedSpaceships = hitchedSpaceships.map(function(currentSpaceship){
    let upcased = currentSpaceship.toUpperCase()
    return upcased
})

console.log(upcasedSpaceships)

let with7Chars = hitchedSpaceships.filter(element => {
   return element.length >= 7 
})

console.log(with7Chars)

let findWith7Chars = hitchedSpaceships.find(element => {
    return element.length >= 7 
 })
 
 console.log(findWith7Chars)