const veiculoModel = require('../models/veiculoModel');

exports.listagemVeiculos = (req, res) => {
    const veiculos = veiculoModel.getAll();
    res.render('veiculos', { veiculos: veiculos });
};

exports.cadastroVeiculo = (req, res) => {
    res.render('cadastro');
};

exports.salvarVeiculo = (req, res) => {
    const { nome, fabricante, data } = req.body;
    if (nome && fabricante && data) {
        veiculoModel.add({ nome, fabricante, data });
    }
    res.redirect('/veiculos');
};

exports.excluirVeiculo = (req, res) => {
    const { id } = req.params;
    veiculoModel.remove(id);
    res.redirect('/veiculos');
};

exports.editarVeiculo = (req, res) => {
    const { id } = req.params;
    const { nome, fabricante, data } = req.body;
    veiculoModel.update(id, { nome, fabricante, data });
    res.redirect('/veiculos');
};

exports.home = (req, res) => {
    const totalVeiculos = veiculoModel.getAll().length;
    res.render('home', { totalVeiculos }); 
};