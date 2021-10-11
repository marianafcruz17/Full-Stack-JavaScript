let velocity = 80

if(velocity<40){
    console.log("Estamos numa velociadade aceitável")
}else{
    if(velocity<=100){
        console.log("Cuidado! Próximo a velocidade de risco")
    }else{
        console.log("Velocidade de risco")
    }
}

//para comandos pequenos
(velocity>100)?console.log("Velocidade maior que 100"):console.log("Velocidade menor que 100")