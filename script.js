const textoMissao = document.getElementById("texto-missao");
const botaoAssustador = document.getElementById("assustador");
const botaoMaravilhoso = document.getElementById("maravilhoso");
const historiaFinal = document.getElementById("historia-final");
const resultado = document.querySelector(".resultado");

// Definindo as fases da missão
const missoes = [
    "Você escolheu um caminho assustador. A inteligência artificial começa a substituir empregos rapidamente.",
    "A tecnologia agora governa a economia, criando novas desigualdades sociais. Você se sente desconfortável com isso?",
    "A IA evolui a ponto de controlar decisões governamentais e o futuro da humanidade está em suas mãos."
];

const historias = {
    assustador: [
        "Você optou por temer a inteligência artificial. Com o tempo, o medo aumentou e as pessoas começaram a resistir à tecnologia.",
        "A revolução tecnológica parou e a sociedade começou a viver de forma mais conservadora, sem grandes avanços."
    ],
    maravilhoso: [
        "Você abraçou o futuro da inteligência artificial. A sociedade se adaptou e prosperou com a tecnologia.",
        "A automação tornou a vida mais fácil e as pessoas focaram em trabalhos mais criativos e humanitários."
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
