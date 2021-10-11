alert("Bem vindo! A seguir pediremos que informe alguns dados.")

let name = prompt("Qual o seu nome?")
let age = prompt("Informe a sua idade")

let age_confirmation = confirm("Sua idade é " + age + " anos")

alert("Nome: " + name + "\nIdade: " + age + "\nIdade confirmada: "+age_confirmation)