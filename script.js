const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é uma pessoa que gosta de esporte?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "afirmação"
            },
            {
                texto: "Não" ,
                afirmacao: "afirmação" 
            }

        ]
    },
    {
        enunciado: "Oque você acha sobre o esporte?",
        alternativas: [
            {
                texto: "Acho legal e divertido",
                afirmacao: "afirmação"
            },
            {
                texto:"Acho chato e sem graça",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você é uma pessoa q pratica algum tipo esporte?",
        alternativas: [
            {
                texto: "Sim, pratico algum esporte",
                afirmacao: "afirmação"
            },
            {
                texto: "Não, não pratico esporte nenhum",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        pergunta: "Qual modalidade você prefere?",
        alternativas: [
            {
                texto: "Ginástica",
                afirmacao: "afirmação"
            },
            {
                texto: "Esportes de invasão(futebol, basquete, etc...)",
                afirmacao: "afirmação"
            }

        ]
    },
    {
        enunciado: "Você acha q o esporte pode te ajudar a ter uma vida melhor?",
        alternativas: [
            {
                texto: "Sim, o esporte pode me ajudar a ter uma vida melhor me proporcionando varios beneficios",
                afirmacao: "afirmação"
            },
            {
                texto: "Não, não acho que o esporte pode me ajudar a ter uma vida melhor",
                afirmacao: "afirmação"
            }


        ]
    },
    {
        enunciado: "Você incentivaria alguma pessoa a praticar algum esporte?",
        alternativas: [
            {
                texto: "Sim, pois pode ajudar muito na vida cotidiana",
                afirmacao: "afirmação"
            },
            {
                texto:"Não, ela faz se ela quiser!",
                afirmacao: "afirmação"
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigado por reponder (;";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();