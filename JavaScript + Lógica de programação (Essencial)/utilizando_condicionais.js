//Perguntar o nome do piloto
//Colocar a velocidade inicial da nave como 0
//Perguntar a que velocidade ele gostaria de acelerar a nave
//Pedir uma confirmação informando que está indo para velocidade X km/s
let nome_piloto = prompt("Qual o nome do piloto? ")
let velocidade = 0
let nova_velocidade = prompt("Que velocidade gostaria de acelerar a nave? ")
let confirm_velocidade = confirm("A aceleração está indo a " + nova_velocidade + " km/s")

if(confirm_velocidade){
    velocidade = nova_velocidade
}

if(velocidade<0){
    alert("Nave está parada. Considere partir e aumentar a velocidade")
}else if(velocidade<40){
    alert("Você está devagar, podemos aumentar mais")
}else if(velocidade>=40 && velocidade<80){
    alert("Parece uma boa velocidade para manter")
}else if(velocidade>=80 && velocidade<100){
    alert("Velocidade alta. Considere diminuir")
}else if(velocidade>=100){
    alert("Velocidade perigosa. Controle automático forçado")
}

alert("Piloto: "+nome_piloto+"\nVelocidade: "+velocidade+"km/s")