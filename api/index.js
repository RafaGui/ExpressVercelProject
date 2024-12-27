const express = require('express');
const path = require('path');

const app = express();

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Exemplo de rota
app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Rota para o frontend
app.get('/app', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Exportando a função que será chamada pelo Vercel
module.exports = (req, res) => {
  app(req, res);
};