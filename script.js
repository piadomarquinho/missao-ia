const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector("caixa-resultados");
const textoResultado = document.querySelector("texto-resultados");
const botaoJogarNovamente = document.querySelector("novamente-botao");
const telaInicial = document.querySelector("tela-inicial");
const botaoIniciar = document.querySelector("iniciar-botao");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click,iniciaJogo');
function iniciaJogo (){
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none' ;
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultados.classList.remove("mostrar");
    mostrapergunta();
}

function mostrapergunta (){
    if (atual >= Perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = pergunta[atual];
    caixaPerguntas.textcontent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

    function mostraAlternativas(){
    for (const alternativas of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

    }
