let pontosPersonagem1 = 0;
let pontosPersonagem2 = 0;
let fimDeJogo = "";
let player1 = "= PLAYER 1";
let player2 = "PLAYER 2 =";
let textoReiniciar = "PARA REINICIAR APERTE 'ENTER'";

function incluiPontosPersonagem1() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 255, 0));
  text(pontosPersonagem1, width / 5, 27);
  incluiIdentificacaoPlayer1();
}

function incluiPontosPersonagem2() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 255, 0));
  text(pontosPersonagem2, 395, 28);
  incluiIdentificacaoPlayer2();
}

function marcaPontosPersonagem1() {
  if (yPersonagem[0] < 15) {
    pontosPersonagem1 += 1;
    somDaPontuacao.play();
    voltaPersonagem1PosicaoInicial();
    auxMovimentoPersonagem1++;
  }
}

function marcaPontosPersonagem2() {
  if (yPersonagem[1] < 15) {
    pontosPersonagem2 += 1;
    somDaPontuacao.play();
    voltaPersonagem2PosicaoInicial();
    auxMovimentoPersonagem2++;
  }
}

function removePontosPersonagem1() {
  if (pontosPersonagem1 > 0) {
        pontosPersonagem1 -= 1;
      }
}


function removePontosPersonagem2() {
  if (pontosPersonagem2 > 0) {
        pontosPersonagem2 -= 1;
      }
}

function gameOver() {
  
  if (pontosPersonagem1 == 10) {
    yPersonagem[0] = 367;
    yPersonagem[1] = 367;
    background(imagemDaEstrada);
    
    fimDeJogo = "PLAYER 1 VENCEU!!!"
    textAlign(CENTER);
    textSize(30);
    fill(color(255, 0, 200))
    text(fimDeJogo, 260, 180)
    incluiTextoReiniciar();
    reiniciarPartida();
    
  }
  
  if (pontosPersonagem2 == 10) {
    yPersonagem[0] = 367;
    yPersonagem[1] = 367;
    background(imagemDaEstrada);
    
    fimDeJogo = "PLAYER 2 VENCEU!!!"
    textAlign(CENTER);
    textSize(30);
    fill(color(255, 0, 200))
    text(fimDeJogo, 260, 180)
    incluiTextoReiniciar();
    reiniciarPartida();
  }
}

function incluiIdentificacaoPlayer1() {
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 255, 255));
  text(player1, 155, 25);
}

function incluiIdentificacaoPlayer2() {
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 255, 255));
  text(player2, 340, 25);
}

function incluiTextoReiniciar() {
  textAlign(CENTER);
  textSize(25);
  fill(color(0, 255, 0));
  text(textoReiniciar, 260, 290);
}

function reiniciarPartida() {
  if (keyIsDown(ENTER)) {
    window.location.reload();
  }
}