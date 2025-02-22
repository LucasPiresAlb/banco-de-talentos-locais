
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Routes
app.get('/api/servicos', (req, res) => {
  const { q } = req.query;
  // Mock response for now
  res.json([{
    nome: "João Silva",
    profissao: "Eletricista",
    email: "joao@email.com",
    telefone: "(11) 99999-9999"
  }]);
});

app.post('/api/profissionais', (req, res) => {
  const dados = req.body;
  // Mock response for now
  res.json({ success: true, message: "Profissional cadastrado com sucesso" });
});

const PORT = 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor rodando em http://0.0.0.0:${PORT}`);
});
