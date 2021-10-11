let nome_nave = prompt("Digite o nome da nave: ")
let dobra_espacial = prompt("Deseja entrar em dobra espacial? \n1- Sim\n2- Não\n\n(Digite o número da opção desejada)")
let cont_dobra = 0

while(dobra_espacial==1){
    cont_dobra++

    dobra_espacial = prompt("Deseja realizar a próxima dobra?\n1- Sim\n2- Não\n\n(Digite o número da opção desejada)")
}

alert("Nome da nave: " + nome_nave + "\nNúmero de vezes seguidos que a dobra espacial foi realizada: " + cont_dobra)