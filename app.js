const player1Btn = document.querySelector(".player1");
const player2Btn = document.querySelector(".player2");
const resetBtn = document.querySelector(".reset");
let player1 = document.querySelector(".player1-score");
let player2 = document.querySelector(".player2-score");
let goalScore = document.querySelector(".score");

// basic settings
let score = 5;
let player1Score = 0;
let player2Score = 0;

// functions

function disableButton() {
  player1Btn.disabled = true;
  player2Btn.disabled = true;
}

function reset() {
  player1.textContent = 0;
  player2.textContent = 0;
  player1Score = 0;
  player2Score = 0;
  player1.classList.remove("has-text-danger");
  player2.classList.remove("has-text-danger");
  player1Btn.disabled = false;
  player2Btn.disabled = false;
}

// addEventListeners

goalScore.addEventListener("change", (e) => {
  reset();
  score = +e.target.value;
});

player1Btn.addEventListener("click", () => {
  player1Score++;
  player1.textContent = player1Score;
  if (player1Score === score) {
    disableButton();
    player1.classList.add("has-text-danger");
  }
});

player2Btn.addEventListener("click", () => {
  player2Score++;
  player2.textContent = player2Score;
  if (player2Score === score) {
    disableButton();
    player2.classList.add("has-text-danger");
  }
});

resetBtn.addEventListener("click", () => {
  reset();
});
