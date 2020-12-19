// imagens e sons do jogo
let imagemDaEstrada;
let imagemDoPersonagem;
let imagemCarroVerde;
let imagemCarroPreto;
let imagemCarroAmarelo;

//sons do jogo
let trilhaDoJogo;
let somDaColisao;
let somDaPontuacao;

function preload() {
 
  imagemDaEstrada = loadImage("images/estrada.png");
  imagemDoPersonagem = loadImage("images/ator-1.png");
  imagemCarroVerde = loadImage("images/carro-1.png");
  imagemCarroPreto = loadImage("images/carro-2.png");
  imagemCarroAmarelo = loadImage("images/carro-3.png");
  imagemCarros = [imagemCarroVerde, imagemCarroPreto, imagemCarroAmarelo, imagemCarroVerde, imagemCarroPreto, imagemCarroAmarelo];
  trilhaDoJogo = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colisao.mp3");
  somDaPontuacao = loadSound("sons/ponto.mp3");
}