
import api from './api.js';

const form = document.getElementById('cadastroForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = {
    nome: document.getElementById('nome').value,
    profissao: document.getElementById('profissao').value,
    email: document.getElementById('email').value,
    telefone: document.getElementById('telefone').value
  };

  try {
    const response = await api.cadastrarProfissional(formData);
    alert('Cadastro realizado com sucesso!');
    form.reset();
  } catch (error) {
    console.error('Erro no cadastro:', error);
    alert('Erro ao realizar cadastro');
  }
});
