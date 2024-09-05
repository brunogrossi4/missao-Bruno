const caixaPrincipal document.querySelector(".caixa-principal");

const caixa Pergunta document.querySelector(".caixa-porguntas"); const caixaAlternativas document.querySelector(".caixa-alternativas");

const caixaResultado const textoResultado document.querySelector(".caixa-resultado"); document.querySelector("testo-resultado");

const perguntas T

enunciado: "Como você acredita que podemos combater sociedade?", Tacismo

alternativas: [

texto: "Participando de campanhas de conscientização educação sobre igualdade racial." afirmacao: "afirmacaol"

afirmacao: "afirmacao2"

1

1

texto: "Denunciando atos de discriminação apoiando politicas públicas inclusivas.",

enunciado: "Como você pode ajudar combater a disseminação de fake news, especialmente as que perpetuan o racismo?",

alternativas: [

texto: "Verificando a veracidade das informações antes de compartilhar qualquer conteúdo, especialmente sobre temas aensiveis como racismo.".

afirmacao: "afirmacao3"

texto: "Educando amigos e familiares sobre os perigos das incentivando-os racismo.", não compartilhar conteúdos falsos que afirmacao: "afirmacao4" perpetuan

fake news

1

enunciados "Como podemos incentivar o uso de energia solar e outras formas de energia limpa, especialmente en comunidades carentes?", alternativas:

(

texto: "Defendendo politicas públicas que subsidion energia solar para familias de baixa renda.", afirmacao: "afirmacao5"

escolas texto: "Promovendo a instalação de painéis solares em centros comunitários de comunidades marginalizadas.", afirmacao: "afirmacao6

12
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
