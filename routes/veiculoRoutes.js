const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');

// Home page
router.get('/', veiculoController.home);

// Rotas para Veículos
router.get('/veiculos', veiculoController.listagemVeiculos);
router.get('/cadastro', veiculoController.cadastroVeiculo);
router.post('/veiculos/salvar', veiculoController.salvarVeiculo);
router.post('/veiculos/excluir/:id', veiculoController.excluirVeiculo);
router.post('/veiculos/editar/:id', veiculoController.editarVeiculo);

module.exports = router;