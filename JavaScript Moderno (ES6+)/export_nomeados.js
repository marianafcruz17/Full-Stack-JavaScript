import Spaceship from "./spaceship";
import armamentKind from "./armaments";
import { laserDefenses } from "./defenses";
import basicDefenses from "./defenses";

const spaceship = new Spaceship("USS Enterprise","James Tiberius Kirk",armamentKind.laser,laserDefenses)
const basicSpaceShip = new Spaceship("Nave Básica","Astronauta Zin",[],basicDefenses)

console.log(spaceship)
console.log(basicSpaceShip)