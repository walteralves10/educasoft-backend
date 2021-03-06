const express = require('express');
const router = express.Router();
const professoresService = require('../service/professoresService');

router.get('/professores', async function(req, res){
    const professores = await professoresService.getProfessores();
    res.json(professores);
});

router.get('/professores/:id', async function(req, res){
    const id = req.params.id;
    const professores = await professoresService.getUnicoProfessor(id);
    res.json(professores);
});

router.post('/professores', async function(req, res){
    const professor = req.body;
    const novoProfessor = await professoresService.postProfessores(professor);
    res.json(novoProfessor);
});

router.put('/professores/:id', async function(req, res){
    const professor = req.body;
    await professoresService.putProfessores(req.params.id, professor);
    res.end();
});

router.delete('/professores/:id', async function(req, res){
    
});

module.exports = router;
