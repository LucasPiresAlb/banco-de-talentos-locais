
const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

// In-memory database for demonstration
const db = {
  profissionais: []
};

app.use(cors());
app.use(express.json());

// Profissionais routes
app.get('/api/profissionais', (req, res) => {
  const { q } = req.query;
  if (q) {
    const filtered = db.profissionais.filter(p => 
      p.nome.toLowerCase().includes(q.toLowerCase()) ||
      p.profissao.toLowerCase().includes(q.toLowerCase())
    );
    return res.json(filtered);
  }
  res.json(db.profissionais);
});

app.get('/api/profissionais/:id', (req, res) => {
  const prof = db.profissionais.find(p => p.id === req.params.id);
  if (!prof) return res.status(404).json({ error: 'Profissional não encontrado' });
  res.json(prof);
});

app.post('/api/profissionais', (req, res) => {
  const { nome, profissao, email, telefone } = req.body;
  const newProf = {
    id: require('uuid').v4(),
    nome,
    profissao,
    email,
    telefone,
    dataCadastro: new Date()
  };
  db.profissionais.push(newProf);
  res.status(201).json(newProf);
});

app.put('/api/profissionais/:id', (req, res) => {
  const index = db.profissionais.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Profissional não encontrado' });
  
  const updated = { ...db.profissionais[index], ...req.body };
  db.profissionais[index] = updated;
  res.json(updated);
});

app.delete('/api/profissionais/:id', (req, res) => {
  const index = db.profissionais.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Profissional não encontrado' });
  
  db.profissionais.splice(index, 1);
  res.status(204).send();
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
