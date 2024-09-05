const textoMissao = document.getElementById("texto-missao");
const botaoAssustador = document.getElementById("assustador");
const botaoMaravilhoso = document.getElementById("maravilhoso");
const historiaFinal = document.getElementById("historia-final");
const resultado = document.querySelector(".resultado");

// Definindo as fases da missão com o novo tema
const missoes = [
    "A inteligência artificial está revolucionando a construção civil. Máquinas agora fazem tarefas que antes eram realizadas por pedreiros e engenheiros. Como você se sente sobre isso?",
    "As obras estão sendo realizadas de forma mais rápida e precisa, mas muitos trabalhadores estão sendo substituídos por robôs e algoritmos de planejamento. O que você acha disso?",
    "As decisões sobre materiais, prazos e segurança estão sendo feitas por IA. Isso está alterando o mercado de trabalho na construção. Como você vê esse futuro?"
];

const historias = {
    assustador: [
        "Você optou por temer o impacto da IA na construção civil. Com o tempo, pedreiros e engenheiros passaram a ser cada vez menos necessários, e o desemprego aumentou.",
        "A falta de trabalhadores humanos no setor afetou a qualidade das construções, resultando em obras menos seguras e uma perda de confiança na tecnologia."
    ],
    maravilhoso: [
        "Você abraçou as mudanças trazidas pela IA na construção civil. Com o uso de novas tecnologias, as construções se tornaram mais eficientes, sustentáveis e seguras.",
        "Pedreiros e engenheiros começaram a se especializar em novas áreas, trabalhando em conjunto com as máquinas para criar projetos mais ambiciosos e inovadores."
    ]
};

let etapa = 0;
let escolhas = [];

function avancarMissao(escolha) {
    escolhas.push(escolha);

    if (etapa < missoes.length) {
        textoMissao.textContent = missoes[etapa];
        etapa++;
    } else {
        mostrarHistoriaFinal();
    }
}

function mostrarHistoriaFinal() {
    resultado.style.display = 'block';
    if (escolhas.includes('assustador')) {
        historiaFinal.textContent = historias.assustador.join(" ");
    } else {
        historiaFinal.textContent = historias.maravilhoso.join(" ");
    }
}

// Adicionando eventos aos botões
botaoAssustador.addEventListener("click", () => avancarMissao('assustador'));
botaoMaravilhoso.addEventListener("click", () => avancarMissao('maravilhoso'));
