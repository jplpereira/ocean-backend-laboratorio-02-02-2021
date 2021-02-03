const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const app = express();

app.use(bodyParser.json());

const port = 3000;

const mensagens = [
  "Primeira mensagem",
  "Segunda mensagem"
];

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

// Read all
app.get('/mensagens', (req, res) => {
  res.send(mensagens);
});

// Read single
app.get('/mensagens/:id', (req, res) => {
  const id  = req.params.id - 1;
  
  const mensagem = mensagens[id];
  
  res.send(mensagem);
});

// Atualizar mensagem
app.put('/mensagens/:id', (req, res) => {
  const id  = req.params.id - 1;

  const mensagem = req.body.texto;

  mensagens[id] = mensagem;

  res.send('Mensagem atualizada com sucesso!');
});

// Create
app.post('/mensagens', (req, res) => {
  const mensagem = req.body.texto;

  mensagens.push(mensagem);

  res.send('Mensagem criada com sucesso.');
  
});

app.listen(port, () => {
  console.info('Servidor rodando em http://localhost:' + port);
});
