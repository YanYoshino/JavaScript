// Pega os elementos do HTML
const inputValor = document.getElementById('valor');
const selectMoeda = document.getElementById('moeda');
const botaoConverter = document.getElementById('converter');
const divResultado = document.getElementById('resultado');

// Quando clicar no botão, faz a conversão
botaoConverter.addEventListener('click', () => {
  const valorEmReais = parseFloat(inputValor.value);
  const moedaSelecionada = selectMoeda.value;

  // Validação: verifica se o usuário digitou algo
  if (isNaN(valorEmReais) || valorEmReais <= 0) {
    divResultado.textContent = "Digite um valor válido em Reais.";
    return;
  }

  // Monta a URL da API com a moeda desejada
  const url = `https://economia.awesomeapi.com.br/json/last/${moedaSelecionada}-BRL`;

  // Faz a requisição à API
  fetch(url)
    .then(resposta => resposta.json())
    .then(dados => {
      // Exemplo: dados.USD.high
      const cotacao = dados[`${moedaSelecionada}BRL`].high;
      const convertido = valorEmReais / cotacao;

      divResultado.textContent = 
        `R$ ${valorEmReais.toFixed(2)} = ${moedaSelecionada} ${convertido.toFixed(2)}`;
    })
    .catch(erro => {
      divResultado.textContent = "Erro ao buscar cotação.";
      console.error(erro);
    });
});
