const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
function reloadPageOnEnter() {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        location.reload();
      }
    };
  
    document.addEventListener("keydown", handleKeyPress);
  }

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 500);
    updateScore();
}

const loop =  setInterval(() => {

    console.log('loop')

    const piperPosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    console.log(marioPosition);
    if (piperPosition <= 120 && piperPosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = '${piperPosition}px';

        mario.style.animation = 'none';
        mario.style.bottom = '${marioPosition}px';

        mario.src ='../img/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50  px'
    }
}, 10)

document.addEventListener('keydown', jump);
reloadPageOnEnter();

// Variáveis globais
let score = 0;
let playerName = "";

// Função para solicitar o nome do jogador
function getPlayerName() {
  playerName = prompt("Digite seu nome:");
  document.getElementById("player-name").textContent = playerName;
}

// Função para atualizar o score
function updateScore() {
  score++;
  document.getElementById("score").textContent = score;
}

// Função para criar e posicionar os canos de forma aleatória
function createPipe() {
  const pipeContainer = document.getElementById("pipe-container");
  const pipe = document.createElement("div");
  pipe.classList.add("pipe");
  pipeContainer.appendChild(pipe);

  const pipeHeight = Math.floor(Math.random() * 200) + 100; // Altura aleatória do cano
  pipe.style.height = `${pipeHeight}px`;

  const pipePosition = pipeContainer.offsetWidth; // Posição inicial do cano (fora da tela)
  pipe.style.left = `${pipePosition}px`;

  const movePipe = setInterval(() => {
    pipe.style.left = `${pipePosition}px`;
    pipePosition -= 2; // Velocidade do movimento do cano

    if (pipePosition < -pipe.offsetWidth) {
      // Remover o cano quando estiver fora da tela
      clearInterval(movePipe);
      pipeContainer.removeChild(pipe);
    }

    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace("px", "");
    if (
      pipePosition <= 120 &&
      pipePosition > 0 &&
      marioPosition < pipeHeight
    ) {
      console.log(`Game over! ${playerName}, seu score foi: ${score}`);
      clearInterval(movePipe);
    }
  }, 10);
}

// Função de salto (jump)


// Função principal do jogo
function gameLoop() {
  getPlayerName();
  setInterval(createPipe, 2000); // Criar um novo cano a cada 2 segundos

  // Resto do código do loop do jogo...
}

// Chamada da função principal do jogo
gameLoop();