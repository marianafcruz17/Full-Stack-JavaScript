const process = require('process');

//console.log(process.argv);
process.stdout.write("Qual o seu nome?");
console.log('Digite seu nome: ');

process.stdin.on('data',(keyboard) => {
    process.stdout.write('Texto do usuário: ${keyboard}');
    process.exit();
})