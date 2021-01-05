function setup() {
  createCanvas(500, 400);
  trilhaDoJogo.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraPersonagem1();
  mostraPersonagem2();
  mostraCarros();
  movimentaCarros();
  movimentaPersonagem1();
  movimentaPersonagem2();
  carroNaPosicaoInicial();
  verificaColisaoPersonagem1();
  verificaColisaoPersonagem2();
  incluiPontosPersonagem1();
  incluiPontosPersonagem2();
  marcaPontosPersonagem1();
  marcaPontosPersonagem2();
  limitaEixoXPersonagem1();
  limitaEixoXPersonagem2();
  gameOver();
}