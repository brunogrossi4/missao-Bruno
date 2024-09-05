// Selecionando os elementos no DOM
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector("#resultado"); // Corrigido: Selecionando o elemento correto

// Objeto de perguntas
const perguntas = [
  {
    enunciado: "Como você acredita que podemos combater o racismo na sociedade?",
    alternativas: [
      { texto: "Participando de campanhas de conscientização e educação sobre igualdade racial.", afirmacao: "Você escolheu uma ação de conscientização." },
      { texto: "Denunciando atos de discriminação e apoiando políticas públicas inclusivas.", afirmacao: "Você escolheu uma ação de denúncia e apoio a políticas inclusivas." }
    ]
  },
  {
    enunciado: "Como você pode ajudar a combater a disseminação de fake news, especialmente as que perpetuam o racismo?",
    alternativas: [
      { texto: "Verificando a veracidade das informações antes de compartilhar qualquer conteúdo, especialmente sobre temas sensíveis como racismo.", afirmacao: "Você escolheu verificar informações antes de compartilhar." },
      { texto: "Educando amigos e familiares sobre os perigos das fake news e incentivando-os a não compartilhar conteúdos falsos que perpetuam o racismo.", afirmacao: "Você escolheu educar amigos e familiares sobre os perigos das fake news." }
    ]
  },
  {
    enunciado: "Como podemos incentivar o uso de energia solar e outras formas de energia limpa, especialmente em comunidades carentes?",
    alternativas: [
      { texto: "Defendendo políticas públicas que subsidiem energia solar para famílias de baixa renda.", afirmacao: "Você escolheu defender políticas públicas para energia solar." },
      { texto: "Promovendo a instalação de painéis solares em escolas e centros comunitários de comunidades marginalizadas.", afirmacao: "Você escolheu promover a instalação de painéis solares em comunidades marginalizadas." }
    ]
  }
];

let atual 0:

let perguntaAtual; let historiaFinal

function mostrafergunta() {

if (atual perguntas.length) (

mostraResultado();

return;

caixa Perguntas.textContent caixaAlternativas.textContent perguntaatual.enunciado;

perguntaAtual perguntas [atual];

textoResultado.textContent mostraälternativas();

function mostraAlternativas (){

for (const alternativa of perguntañtual.alternativas) { const botacAlternativa document.createElement("button");

botaoAlternativa.textContent alternativa.texto,

botacAlternativa.addEventListener("click", ()=>

respostaselecionada (alternativa)); caixaAlternativas.appendChild(botaoAlternativa);

1

function respostaselecionada (opcaoSelecionada) {

const afirmacao opcaoSelecionada.afirmacao, historiaFinal + afirmacao ";

atual++

mostraPergunta();

function mostraResultado () {

caixaFerguntas.textContent "Resumindo..."; textoResultado.textContent historiafinal; caixaAlternativas.text.Content = "";

mostraPergunta();
