// Selecionando os elementos no DOM
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Objeto de perguntas
const perguntas = [
  {
    enunciado: "Como você acredita que podemos combater o racismo na sociedade?",
    alternativas: [
      { texto: "Participando de campanhas de conscientização e educação sobre igualdade racial.", afirmacao: "afirmacao1" },
      { texto: "Denunciando atos de discriminação e apoiando políticas públicas inclusivas.", afirmacao: "afirmacao2" }
    ]
  },
  {
    enunciado: "Como você pode ajudar a combater a disseminação de fake news, especialmente as que perpetuam o racismo?",
    alternativas: [
      { texto: "Verificando a veracidade das informações antes de compartilhar qualquer conteúdo, especialmente sobre temas sensíveis como racismo.", afirmacao: "afirmacao3" },
      { texto: "Educando amigos e familiares sobre os perigos das fake news e incentivando-os a não compartilhar conteúdos falsos que perpetuam o racismo.", afirmacao: "afirmacao4" }
    ]
  },
  {
    enunciado: "Como podemos incentivar o uso de energia solar e outras formas de energia limpa, especialmente em comunidades carentes?",
    alternativas: [
      { texto: "Defendendo políticas públicas que subsidiem energia solar para famílias de baixa renda.", afirmacao: "afirmacao5" },
      { texto: "Promovendo a instalação de painéis solares em escolas e centros comunitários de comunidades marginalizadas.", afirmacao: "afirmacao6" }
    ]
  }
];

// Exemplo de exibição de uma pergunta
function exibirPergunta(index) {
  const pergunta = perguntas[index];
  caixaPergunta.textContent = pergunta.enunciado;
  caixaAlternativas.innerHTML = ''; // Limpar alternativas anteriores

  pergunta.alternativas.forEach(alternativa => {
    const botao = document.createElement("button");
    botao.textContent = alternativa.texto;
    botao.onclick = () => verificarResposta(alternativa.afirmacao);
    caixaAlternativas.appendChild(botao);
  });
}

function verificarResposta(afirmacao) {
  // Lógica para verificar a resposta e exibir o resultado
  textoResultado.textContent = `Você escolheu: ${afirmacao}`;
}

// Exemplo de como usar a função
exibirPergunta(0); // Exibe a primeira pergunta
