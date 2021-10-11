/*
- Solicitar o nome da nave
- Perguntar o caractere que deseja substituir
- Perguntar por qual caractere deseja substituir
- Para cada caractere igual ao informado, substituir pelo novo caractere
- Exibir o novo nome da nave
    "O novo nome da nave é <nome da nave>"
*/

let nome_nave = prompt("Digite o nome da nave: ")
let caractere_original = prompt("Digite o caractere que deseja substituir: ")
let novo_caractere = prompt("Digite o novo caractere: ")
let novo_nome_nave = ""

for(let i=0;i<nome_nave.length;i++){
    console.log(nome_nave[i])
    if(nome_nave[i]==caractere_original){
        novo_nome_nave += novo_caractere
    }else{
        novo_nome_nave += nome_nave[i]
    }
}

alert("O novo nome da nave é " + novo_nome_nave)