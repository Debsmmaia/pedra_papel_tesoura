const opcoes = ['pedra','papel','tesoura'];
let pontosJogador = 0
let pontosComputador = 0

const botao = document.getElementById('botaoJogar');

botao.addEventListener('click', jogar);


function jogar(){

    //escolha do computador
    const indice = Math.floor(Math.random() * 3);

    const jogadaComputador = opcoes[indice]

    //escolha do jogador
    let escolhaJogador = document.getElementById('escolhaJogador').value;

    if(jogadaComputador === escolhaJogador){

       document.getElementById('resultado').textContent = "Empate!"

    }else if(jogadaComputador === 'pedra' && escolhaJogador === 'tesoura' || jogadaComputador === 'papel' && escolhaJogador === 'pedra' || jogadaComputador === 'tesoura' && escolhaJogador === 'papel'){
        document.getElementById('resultado').textContent = `O computador ganhou! a escolha do computador foi: ${jogadaComputador}`;
        pontosComputador++
        document.getElementById('pontosComputador').textContent = pontosComputador;
    }else{
        document.getElementById('resultado').textContent = `Você ganhou! a escolha do computador foi: ${jogadaComputador}`
        pontosJogador++
        document.getElementById('pontosJogador').textContent = pontosJogador;
    }

}


