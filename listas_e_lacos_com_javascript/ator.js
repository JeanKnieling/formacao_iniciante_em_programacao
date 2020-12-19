//variáveis do personagem
let xPersonagem = 85;
let yPersonagem = 366;
let comprimentoPersonagem = 30;
let alturaPersonagem = 30;
let colisao = false;
let meusPontos = 0;

function mostraPersonagem() {
  image(imagemDoPersonagem, xPersonagem, yPersonagem, comprimentoPersonagem, alturaPersonagem);
}

function movimentaPersonagem() {
  if (xPersonagem > 0 && xPersonagem < 470) {
    if (keyIsDown(LEFT_ARROW)) {
      xPersonagem -= 3;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      xPersonagem += 3;
    }
  }

  if (keyIsDown(UP_ARROW)) {
    yPersonagem -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yPersonagem += 3;
    }
  }
}

function verificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[i], alturaCarros[i], xPersonagem, yPersonagem, 15)
    if (colisao) {
      voltaPersonagemPosicaoInicial();
      somDaColisao.play();
      removePontos();
    }
  }
}

function voltaPersonagemPosicaoInicial() {
  yPersonagem = 366;
}

function podeSeMover() {
  return yPersonagem < 366;
}

function limitaEixoXPersonagem() {
  if (xPersonagem < 0) {
    xPersonagem += 3;
  }

  if (xPersonagem > 470) {
    xPersonagem -= 3;
  }
}