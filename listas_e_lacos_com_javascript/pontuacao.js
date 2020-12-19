function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 255, 0))
  text(meusPontos, width / 5, 27)
}

function marcaPontos() {
  if (yPersonagem < 15) {
    meusPontos += 1;
    somDaPontuacao.play();
    voltaPersonagemPosicaoInicial();
  }
}

function removePontos() {
  if (meusPontos > 0) {
        meusPontos -= 1;
      }
}