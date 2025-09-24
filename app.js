const express = require('express');
const path = require('path');
const veiculoRoutes = require('./routes/veiculoRoutes');

const app = express();
const port = 3000;

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Uso das rotas
app.use('/', veiculoRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});