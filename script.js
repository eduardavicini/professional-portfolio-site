// Seleciona os botões
const btnSobre = document.getElementById('btnSobre');
const btnContato = document.getElementById('btnContato');

// Rola suavemente até a seção Sobre ao clicar no botão
btnSobre.addEventListener('click', () => {
  document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
});

// Rola suavemente até a seção Contato ao clicar no botão
btnContato.addEventListener('click', () => {
  document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
});
