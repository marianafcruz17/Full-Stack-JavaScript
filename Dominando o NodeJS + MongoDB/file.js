const fs = require('fs');

//sobreescreve o arquivo inteiro
fs.writeFile('test.txt','Olá NodeJS',err => {
    console.log(err);
})

//acrescenta algo no arquivo existente
fs.appendFile('test.txt','Olá NodeJS',err => {
    console.log(err);
})

fs.rename('test.txt','test2.txt',err => {
    console.log(err);
})

//remove um arquivo
fs.unlink('test2.txt',err => {
    console.log(err);
})

console.log(__dirname);