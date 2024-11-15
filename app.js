let btnRock = document.querySelector(".btn-rock");
let btnPaper = document.querySelector(".btn-paper");
let btnSc = document.querySelector(".btn-sc");
let you = document.querySelector(".you");
let computer = document.querySelector(".computer");
let result = document.querySelector(".result");
let lose = document.querySelector(".lose");
let won = document.querySelector(".won");

option = ["Rock", "Paper", "Scissors"];
function selectComp() {
  let i = Math.floor(Math.random() * option.length);
  let r = option[i];
  computer.textContent = r;
  return r;
}

function playAudio1() {
  lose.play();
}
function playAudio2() {
  won.play();
}

function my_confetti() {
  const duration = 2 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}

function game() {
  btnRock.addEventListener("click", () => {
    you.textContent = "Rock";
    r = selectComp();
    if (r == option[0]) {
      result.textContent = "No winner";
    } else if (r == option[1]) {
      playAudio1();
      result.textContent = "Computer won!";
    } else {
      my_confetti();
      playAudio2();
      result.textContent = "You won!";
    }
  });
  btnPaper.addEventListener("click", () => {
    you.textContent = "Paper";
    r = selectComp();
    if (r == option[0]) {
      my_confetti();
      playAudio2();
      result.textContent = " You won!";
    } else if (r == option[1]) {
      result.textContent = "No winner";
    } else {
      playAudio1();
      result.textContent = "Computer won!";
    }
  });
  btnSc.addEventListener("click", () => {
    you.textContent = "Scissors";
    r = selectComp();
    if (r == option[0]) {
      playAudio1();
      result.textContent = "Computer won!";
    } else if (r == option[1]) {
      my_confetti();
      playAudio2();
      result.textContent = "You won!";
    } else {
      result.textContent = "No winner";
    }
  });
}
game();
