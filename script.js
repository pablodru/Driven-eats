
let prato = '';
let bebida = '';
let sobremesa = '';

let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;

function PratoSelecionado(botao) {
    const botaoAnterior = document.querySelector('.caixa-de-pratos .selecionado');
    if (botaoAnterior !== null) {;
        botaoAnterior.classList.remove('selecionado');
    }

    botao.classList.add('selecionado');
    
    VerificaSelecao();

    prato = botao.querySelector('h4').innerHTML;
    
    let valorPratoErrado = botao.querySelector('h5').innerHTML;
    valorPratoErrado = valorPratoErrado.replace('R$ ','').replace(',', '.')
    
    console.log(typeof(valorPratoErrado))
    
    valorPrato = parseFloat(valorPratoErrado);

    console.log(typeof(valorPrato))
}

function BebidaSelecionada(botao) {
    const botaoAnterior = document.querySelector('.caixa-de-bebidas .selecionado');
    if (botaoAnterior !== null) {;
        botaoAnterior.classList.remove('selecionado');
    }

    botao.classList.add('selecionado');
    
    VerificaSelecao();

    bebida = botao.querySelector('h4').innerHTML;
    
    let valorBebidaErrado = botao.querySelector('h5').innerHTML;
    valorBebidaErrado = valorBebidaErrado.replace('R$','').replace(',','.')
    valorBebida = parseFloat(valorBebidaErrado)
}

function SobremesaSelecionada(botao) {
    const botaoAnterior = document.querySelector('.caixa-de-sobremesas .selecionado');
    if (botaoAnterior !== null) {;
        botaoAnterior.classList.remove('selecionado');
    }

    botao.classList.add('selecionado');

    VerificaSelecao();

    sobremesa = botao.querySelector('h4').innerHTML;
    
    let valorSobremesaErrado = botao.querySelector('h5').innerHTML;
    valorSobremesaErrado = valorSobremesaErrado.replace('R$','').replace(',','.')
    valorSobremesa = parseFloat(valorSobremesaErrado);
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

function Whatsapp(estaVerde) {

    let valor = valorPrato + valorBebida + valorSobremesa;
    valor = valor.toFixed(2);
    valor = valor.replace('.', ',')

    const mensagem = 'Olá, gostaria de fazer o pedido: %0A' +
    `-Prato: ${prato}%0A` +
    `-Bebida: ${bebida}%0A` +
    `-Sobremesa: ${sobremesa}%0A` +
    `-Total: R$ ${valor}`;

    if(estaVerde.classList.contains('confirmado')){
    window.location.href=`https://wa.me/+5521979695328?text=${mensagem}`;
    }
}