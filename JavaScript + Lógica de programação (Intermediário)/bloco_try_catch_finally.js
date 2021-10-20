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

    reload(){
        this.shotsLeft = 5
    }
}

let fenixWeapon = new SpaceshipWeapon(10)

//trata o erro instanciado
try{
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
    fenixWeapon.shoot()
//captura o erro
}catch(e){
    console.log(e.message)
    fenixWeapon.reload()
//ocorre independente de ter erro ou não
}finally{
    console.log("Arma deu bons tiros")
}
    
console.log(fenixWeapon)