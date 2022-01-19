const express = require('express');

const router = express.Router();

const Checklist = require('../models/checklist');

//criar rota
router.get('/',async(req,res) => {
    try{
        let checklist = await Checklist.find({});
        res.status(200).render('checklists/index',{checklist: checklist});
    }catch(error){
        res.status(200).render('pages/error',{error: 'Erro ao exibir as Listas'});
    }
})

router.get('/new',async(req,res) => {
    try{
        let checklist = new Checklist();
        res.status(200).render('checklist/new',{checklist: checklist});
    }catch(error){
        res.status(500).render('pages/error',{errors: 'Erro ao carregar o formulário'});
    }
})

router.get('/:id/edit',async(req,res) => {
    try{
        let checklist = await Checklist.findById(req.params.id).populate('tasks');
        res.status(200).render('checklists/edit',{checklist: checklist})
    }catch(error){
        res.status(200).render('pages/error',{error: 'Erro ao exibir a edição de listas de tarefas'});
    }
})

router.post('/',async(req,res) => {
    let {name} = req.body.checklist;
    let checklist = new Checklist({name});

    try{
        let checklist = await Checklist.save();
        res.redirect('/checklists');
    }catch(error){
        res.status(422).render('checklists/new',{checklist: {...checklist,error}})
    }
})

//:id -> receber o parametro id na url
router.get('/:id',async(req,res) => {
    try{
        let checklist = await Checklist.findById(req.params.id);
        res.status(200).render('checklist/show',{checklist: checklist})
    }catch(error){
        res.status(200).render('pages/error',{error: 'Erro ao exibir as Listas'});
    }
})

//rota put (atualizar)
router.put('/:id',async(req,res) => {
    let{name} = req.body.checklist;
    let checklist = await Checklist.findById(req.params.id);

    try{
        await Checklist.update({name});
        res.redirect('/checklists');
    }catch(error){
        let errors = error.erros;
        res.status(422).render('checklists/edit',{checklist: {...checklist,errors}});
    }
})

//rota delete (deletar)
router.delete('/:id',async(req,res) => {
    try{
        let checklist = await Checklist.findByIdAndRemove(req.params.id);
        res.redirect('/checklists');
    }catch(error){
        res.status(500).render('pages/error',{error: 'Erro ao deletar a lista de tarefas'});
    }
})

module.exports = router;