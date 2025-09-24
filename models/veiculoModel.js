
let veiculos = [
    { id: 1, nome: "Fiat Uno", fabricante: "Fiat", data: "1984-08-15" },
    { id: 2, nome: "Chevrolet Celta", fabricante: "Chevrolet", data: "2000-09-01" },
    { id: 3, nome: "Marea Turbo", fabricante: "Fiat", data: "1998-05-10" }
];

module.exports = {
    getAll: () => {
        return veiculos;
    },

    add: (veiculo) => {
        const novoId = veiculos.length > 0 ? Math.max(...veiculos.map(v => v.id)) + 1 : 1;
        veiculo.id = novoId;
        veiculos.push(veiculo);
    },

    remove: (id) => {
        veiculos = veiculos.filter(veiculo => veiculo.id !== parseInt(id));
    },

    update: (id, novosDados) => {
        const veiculo = veiculos.find(v => v.id === parseInt(id));
        if (veiculo) {
            veiculo.nome = novosDados.nome || veiculo.nome;
            veiculo.fabricante = novosDados.fabricante || veiculo.fabricante;
            veiculo.data = novosDados.data || veiculo.data;
            return true;
        }
        return false;
    }
};