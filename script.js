
let prato = '';


function PratoSelecionado(botao) {
    const botaoAnterior = document.querySelector('.caixa-de-pratos .selecionado');
    if (botaoAnterior !== null) {;
        botaoAnterior.classList.remove('selecionado');
    }

    botao.classList.add('selecionado');
    
    VerificaSelecao();

    prato = botao.querySelector('h4').innerHTML;
}

function BebidaSelecionada(botao) {
    const botaoAnterior = document.querySelector('.caixa-de-bebidas .selecionado');
    if (botaoAnterior !== null) {;
        botaoAnterior.classList.remove('selecionado');
    }

    botao.classList.add('selecionado');
    
    VerificaSelecao();
}

function SobremesaSelecionada(botao) {
    const botaoAnterior = document.querySelector('.caixa-de-sobremesas .selecionado');
    if (botaoAnterior !== null) {;
        botaoAnterior.classList.remove('selecionado');
    }

    botao.classList.add('selecionado');

    VerificaSelecao();
}

function VerificaSelecao () {
    const verificaPrato = document.querySelector('.caixa-de-pratos .selecionado')
    const verificaBebida = document.querySelector('.caixa-de-bebidas .selecionado')
    const verificaSobremesa = document.querySelector('.caixa-de-sobremesas .selecionado')
    const verificador = document.querySelector('.footer >  div')

    if (verificaPrato !== null){
        if(verificaBebida !== null){
            if(verificaSobremesa !== null){
                verificador.classList.add('confirmado')
                verificador.innerHTML='Fechar pedido'
            }
        }
    }
}

const mensagem = 'Olá, gostaria de fazer o pedido:%0A' +
    `Prato: ${prato}`


function Whatsapp() {
    window.location.href=`https://wa.me/+5599999999999?text=${mensagem}`;
}