const veiculoModel = require('../models/veiculoModel');

const exibirHome = (req, res) => {
    const totalVeiculos = veiculoModel.listarTodos().length;
    res.render('home', { totalVeiculos });
};

const listarVeiculos = (req, res) => {
    const veiculos = veiculoModel.listarTodos();
    res.render('veiculos', { veiculos });
};

const exibirFormularioCadastro = (req, res) => {
    res.render('cadastro', { error: null });
};

const adicionarVeiculo = (req, res) => {
    const { id, nome } = req.body;
    if (!id || !nome) {
        return res.render('cadastro', { error: 'ID e nome são obrigatórios.' });
    }
    veiculoModel.adicionar({ id: parseInt(id), nome });
    res.redirect('/veiculos');
};

const editarVeiculo = (req, res) => {
    const { id, nome } = req.body;
    if (!id || !nome) {
        return res.redirect('/veiculos');
    }
    veiculoModel.editar(parseInt(id), { nome });
    res.redirect('/veiculos');
};

const excluirVeiculo = (req, res) => {
    const { id } = req.body;
    if (!id) {
        return res.redirect('/veiculos');
    }
    veiculoModel.excluir(parseInt(id));
    res.redirect('/veiculos');
};

module.exports = {
    exibirHome,
    listarVeiculos,
    exibirFormularioCadastro,
    adicionarVeiculo,
    editarVeiculo,
    excluirVeiculo
};