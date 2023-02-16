const button = document.querySelector('button');/*me permite selecionar os dois elementos  */
const nav    = document.querySelector('nav');

button.addEventListener('click',()=>{
  nav.classList.toggle('activo')
})

/*

//variável para controlar a posição atual do carrossel.
let posicaoAtual = 0;

//listener para o evento de scroll do mouse na div do carrossel. Quando o evento ocorrer, atualize a posição do carrossel de acordo com a direção do scroll.
const carrossel = document.querySelector('.carrossel');
carrossel.addEventListener('wheel', event => {
  event.preventDefault();
  posicaoAtual += event.deltaY;
  carrossel.style.transform = `translateX(-${posicaoAtual}px)`;
});

//verificar se o carrossel chegou ao final e reiniciá-lo, se necessário.
function verificarFimCarrossel() {
  const imagens = document.querySelectorAll('.carrossel img');
  const ultimaImagem = imagens[imagens.length - 1];
  const ultimaPosicao = ultimaImagem.offsetLeft + ultimaImagem.clientWidth;
  if (ultimaPosicao <= carrossel.clientWidth) {
    posicaoAtual = 0;
    carrossel.style.transform = `translateX(0)`;
  }
}
//listener para o evento de transição da div do carrossel. Quando a transição for concluída, verifique se o carrossel chegou ao final e reinicie-o, se necessário.
carrossel.addEventListener('transitionend', event => {
  verificarFimCarrossel();
});

*/

// evento de toque para detectar o movimento do dedo na tela. estou  fazendo isso usando a API de eventos touch do JavaScript.
var carrossel = document.getElementById('carrossel');
var initialX, currentX;

carrossel.addEventListener('touchstart', function (event) {
  initialX = event.touches[0].clientX;
});

carrossel.addEventListener('touchmove', function (event) {
  currentX = event.touches[0].clientX;
  var diffX = initialX - currentX;
  carrossel.scrollLeft += diffX;
  initialX = currentX;
});
//o evento 'touchstart' é acionado quando o usuário toca na tela. A posição x inicial do toque é armazenada na variável initialX. Em seguida, o evento 'touchmove' é acionado quando o usuário move o dedo na tela. A posição x atual do toque é armazenada na variável currentX e a diferença entre as posições x é calculada. A div pai do carrossel é rolada para a esquerda ou para a direita de acordo com a diferença entre as posições x.

