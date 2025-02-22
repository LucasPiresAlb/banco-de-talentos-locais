
import api from './api.js';

const searchForm = document.querySelector('.search-container');
const resultadosDiv = document.getElementById('resultados');

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const busca = document.getElementById('busca').value;
  
  try {
    const servicos = await api.buscarServicos(busca);
    exibirResultados(servicos);
  } catch (error) {
    console.error('Erro na busca:', error);
    resultadosDiv.innerHTML = '<p>Erro ao buscar serviços</p>';
  }
});

function exibirResultados(servicos) {
  resultadosDiv.innerHTML = servicos.map(servico => `
    <div class="profissional-card">
      <h3>${servico.nome}</h3>
      <p>${servico.profissao}</p>
      <p>Email: ${servico.email}</p>
      <p>Telefone: ${servico.telefone}</p>
    </div>
  `).join('');
}
