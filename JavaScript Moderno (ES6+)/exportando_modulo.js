const Planet = require("./planet")
const solarSystem = require("./solar_system")

const earth = new Planet("Terra",50100000)
earth.rotate()

solarSystem.planets.push(earth)
solarSystem.planets.push(new Planet("Marte",144800000))
solarSystem.planets.push(new Planet("Mercúrio",74800000))
solarSystem.planets.push(new Planet("Saturno",427000000))

console.log(solarSystem)