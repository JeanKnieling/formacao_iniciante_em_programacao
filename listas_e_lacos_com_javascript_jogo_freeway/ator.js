//variáveis do personagem
let xPersonagem = [85, 380];
let yPersonagem = [366, 360];
let comprimentoPersonagem = [30, 45];
let alturaPersonagem = [30, 38];
let colisaoPersonagem1 = false;
let colisaoPersonagem2 = false;
let auxMovimentoPersonagem1 = 0;
let auxMovimentoPersonagem2 = 0;

function mostraPersonagem1() {
  image(imagemPersonagem1, xPersonagem[0], yPersonagem[0], comprimentoPersonagem[0], alturaPersonagem[0]);
}

function mostraPersonagem2() {
  image(imagemPersonagem2, xPersonagem[1], yPersonagem[1], comprimentoPersonagem[1], alturaPersonagem[1]);
}

function movimentaPersonagem1() {
  if (xPersonagem[0] >= 0 && xPersonagem[0] <= 470) {

    if (keyIsDown(65 /*tecla a*/ )) {
      xPersonagem[0] -= 3;
    }
  }

  if (keyIsDown(68 /*tecla d*/ )) {
    xPersonagem[0] += 3;
  }

  if (auxMovimentoPersonagem1 == 0) {
    if (keyIsDown(87 /*tecla w*/ )) {
      yPersonagem[0] -= 3;
    }

    if (keyIsDown(83 /*tecla s*/ )) {
      if (podeSeMoverPersonagem1()) {
        yPersonagem[0] += 3;
      }
    }
  }
  liberaMovimentoAposPontuarOuMorrerPersonagem1();
}


function movimentaPersonagem2() {
  if (xPersonagem[1] >= -4 && xPersonagem[1] <= 460) {
    if (keyIsDown(LEFT_ARROW)) {
      xPersonagem[1] -= 3;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      xPersonagem[1] += 3;
    }
  }
  if (auxMovimentoPersonagem2 == 0) {
    if (keyIsDown(UP_ARROW)) {
      yPersonagem[1] -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
      if (podeSeMoverPersonagem2()) {
        yPersonagem[1] += 3;
      }
    }
  }
  liberaMovimentoAposPontuarOuMorrerPersonagem2();
}

function verificaColisaoPersonagem1() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisaoPersonagem1 = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[i], alturaCarros[i], xPersonagem[0], yPersonagem[0], 15)
    if (colisaoPersonagem1) {
      voltaPersonagem1PosicaoInicial();
      somDaColisao.play();
      removePontosPersonagem1();
      auxMovimentoPersonagem1++;
    }
  }
}

function verificaColisaoPersonagem2() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisaoPersonagem2 = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros[i], alturaCarros[i], xPersonagem[1], yPersonagem[1], 10)
    if (colisaoPersonagem2) {
      voltaPersonagem2PosicaoInicial();
      somDaColisao.play();
      removePontosPersonagem2();
      auxMovimentoPersonagem2++;
    }
  }
}

function voltaPersonagem1PosicaoInicial() {
  yPersonagem[0] = 366;
}

function voltaPersonagem2PosicaoInicial() {
  yPersonagem[1] = 360;
}

function podeSeMoverPersonagem1() {
  return yPersonagem[0] < 366;
}

function podeSeMoverPersonagem2() {
  return yPersonagem[1] < 360;
}

function limitaEixoXPersonagem1() {
  if (xPersonagem[0] < 0) {
    xPersonagem[0] += 3;
  }

  if (xPersonagem[0] > 470) {
    xPersonagem[0] -= 3;
  }
}

function limitaEixoXPersonagem2() {
  if (xPersonagem[1] < -5) {
    xPersonagem[1] += 3;
  }

  if (xPersonagem[1] > 460) {
    xPersonagem[1] -= 3;
  }
}

function liberaMovimentoAposPontuarOuMorrerPersonagem1() {
  if (auxMovimentoPersonagem1 == 1 && yPersonagem[0] == 366 && keyIsDown(87) == false) {
    auxMovimentoPersonagem1 = 0;
  }
}

function liberaMovimentoAposPontuarOuMorrerPersonagem2() {
  if (auxMovimentoPersonagem2 == 1 && yPersonagem[1] == 360 && keyIsDown(UP_ARROW) == false) {
    auxMovimentoPersonagem2 = 0;
  }
}