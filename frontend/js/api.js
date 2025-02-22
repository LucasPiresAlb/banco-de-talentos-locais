
const API_URL = 'http://0.0.0.0:8080/api';

const api = {
  async buscarServicos(termo) {
    const response = await fetch(`${API_URL}/servicos?q=${encodeURIComponent(termo)}`);
    return response.json();
  },

  async cadastrarProfissional(dados) {
    const response = await fetch(`${API_URL}/profissionais`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
    });
    return response.json();
  }
};

export default api;
