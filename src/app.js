const express = require('express');
const routes = require('./routes');
const logger = require('./middlewares/logger');
const path = require('path');

const app = express();

//Middleware que Intercepta o JSON
app.use(express.json());

//Servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

//Middleware Global
app.use(logger);

//Rotas
app.use(routes);

module.exports = app;