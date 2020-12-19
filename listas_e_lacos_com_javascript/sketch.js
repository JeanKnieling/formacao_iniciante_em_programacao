function setup() {
  createCanvas(500, 400);
  trilhaDoJogo.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraPersonagem();
  mostraCarros();
  movimentaCarros();
  movimentaPersonagem();
  carroNaPosicaoInicial();
  verificaColisao();
  incluiPontos();
  marcaPontos();
  limitaEixoXPersonagem();
}