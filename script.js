function PratoSelecionado(botao) {
    const botaoAnterior = document.querySelector('.caixa-de-pratos .selecionado');
    if (botaoAnterior !== null) {;
        botaoAnterior.classList.remove('selecionado');
    }

    botao.classList.add('selecionado');
}

function BebidaSelecionada(botao) {
    const botaoAnterior = document.querySelector('.caixa-de-bebidas .selecionado');
    if (botaoAnterior !== null) {;
        botaoAnterior.classList.remove('selecionado');
    }

    botao.classList.add('selecionado');
}

function SobremesaSelecionada(botao) {
    const botaoAnterior = document.querySelector('.caixa-de-sobremesas .selecionado');
    if (botaoAnterior !== null) {;
        botaoAnterior.classList.remove('selecionado');
    }

    botao.classList.add('selecionado');
}