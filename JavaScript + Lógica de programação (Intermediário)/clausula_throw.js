class SpaceshipWeapon{
    constructo(identifier){
        this.identifier = identifier
        this.shotsLeft = 5
    }

    shoot(){
        if(this.shotsLeft>0){
            console.long("Bang!")
            this.shotsLeft -=1
        }else{
            throw new Error("Arma" + this.identifier + " sem munição")
        }
    }
}

let fenixWeapon = new SpaceshipWeapon(10)
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
fenixWeapon.shoot()
console.log(fenixWeapon)