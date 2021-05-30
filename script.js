"use strict";

let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  /* If player doesn't enter a number */
  if (!guess) {
    displayMessage("Please enter a number..");
  } else if (secret_number === guess) {
    /*If player wins */
    displayMessage("Correct Number!!");
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (secret_number !== guess) {
    /* If player doesn't win */
    displayMessage(guess > secret_number ? "Too high.." : "Too low..");
    score -= 1;
    document.querySelector(".score").textContent = score;
  } else {
    displayMessage("Game over!");
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secret_number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  displayMessage("Start Guessing..");
});

/*

function guessing() {
  const guess = Number(document.querySelector(".guess").value);
  const highscored = Number(document.querySelector(".highscore").value);

  if (guess > secret_number) {
    document.querySelector(".message").textContent = "Too high, guess again!";
    score -= 1;
    document.querySelector(".score").textContent = score;
  } else if (guess < secret_number) {
    document.querySelector(".message").textContent = "Too low, guess again!";
    score -= 1;
    document.querySelector(".score").textContent = score;
  } else if (!guess) {
    document.querySelector(".message").textContent = "Please guess a number";
  } else {
    document.querySelector(".message").textContent = "Correct number!!";
    if (score > highscored) {
      document.querySelector(".highscore").textContent = score;
    }
  }

  if (score <= 0) {
    document.querySelector(".score").textContent = 0;
    document.querySelector(".message").textContent = "Game over!";
  }
}

document.querySelector(".check").addEventListener("click", guessing);

document.querySelector(".again").addEventListener("click", function () {
  const secret_number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".number").textContent = secret_number;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing..";
});

*/
