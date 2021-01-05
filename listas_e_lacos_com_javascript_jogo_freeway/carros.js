//variáveis do carro
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [45, 96, 150, 215, 270, 318];
let comprimentoCarros = [50, 50, 50, 50, 50, 50];
let alturaCarros = [30, 30, 30, 30, 30, 30];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];



function mostraCarros() {
  for (let i= 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros[i], alturaCarros[i]);
  }
}

function movimentaCarros() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function carroNaPosicaoInicial() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passouATelaToda(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouATelaToda(xCarro) {
  return xCarro < -50;
}