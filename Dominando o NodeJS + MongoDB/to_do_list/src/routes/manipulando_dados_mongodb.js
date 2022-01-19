/*Comandos usados no terminal do MongoDB*/

//Inserindo um novo documento
db.checklist.insert({
  name: "Primeiro checklist",
  tasks: [
    { name: "Tarefa 01", done: false },
    { name: "Tarefa 02", done: true }
  ]
})

db.checklist.save({ name: "Segundo checklist" })

//Acessando todos os documentos da collection
db.checklist.find()

//Encontrando um documento
db.checklist.find({ name: "Segundo checklist" })

//Atualizando um documento
db.checklist.update({ name: "Segundo checklist" }, { name: "Minha checklist" })

//Deletando um documento
db.checklist.deleteOne({ name: "Minha checklist" })