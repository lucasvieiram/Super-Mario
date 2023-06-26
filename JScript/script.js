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
