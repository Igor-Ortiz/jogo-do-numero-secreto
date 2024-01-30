let listaDeNumerosSorteado=[];
let quantidadeDeNumerosDisponiveis=10;
let numeroSecreto= gerarNumeroAleatorio();
let tentativas= 1;

function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Escolha o numero secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}

exibirMensagemInicial();
function verificarChute(){
    let chute= document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou');
        let palavraTentaiva = tentativas > 1?'tentivas':'tentativa';
        let messagemTentativas= `Você descobriu o numero secreto ${tentativas} com ${palavraTentaiva}`;
        exibirTextoNaTela('p',messagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
     if (chute > numeroSecreto){
        exibirTextoNaTela('p','o numero secreto é menor que o chute');
     }else {
        exibirTextoNaTela('p', 'o numero secreto é maior que o chute');
     }
     tentativas++;
     limparCampo();
    }

    
}

function gerarNumeroAleatorio(){
   let numeroEscolhido= parseInt(Math.random()* quantidadeDeNumerosDisponiveis + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteado.length;
   if(quantidadeDeElementosNaLista==quantidadeDeNumerosDisponiveis){
     listaDeNumerosSortead = [];
   }
   
   if(listaDeNumerosSorteado.includes(numeroEscolhido)){
          return gerarNumeroAleatorio();
    }
    else {
        listaDeNumerosSorteado.push(numeroEscolhido);
         return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto= gerarNumeroAleatorio();
    limparCampo();
    tentativas= 1;
    exibirMensagemInicial();    
    document.getElementById('reiniciar').setAttribute('disabled',true);
}