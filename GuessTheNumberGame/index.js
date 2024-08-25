const displayMessage = (message) =>
  (document.querySelector(".message").textContent = message);
const calculateSecretNumber = () => Math.trunc(Math.random() * 20) + 1;
const updateSecretNumber = (number) =>
  (document.querySelector(".number").textContent = number);
let secretNumber = calculateSecretNumber;
let score = 20;
let highScore = 0;
console.log(secretNumber);

const checkNumber = function () {
  console.log(secretNumber);
  const guessedNumber = Number(document.querySelector(".guessed-number").value);

  //when there is no input
  if (!guessedNumber) {
    displayMessage("⛔ No Value");
  }
  //if guessed number is equal to secret number, You Own
  else if (guessedNumber === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "100px";
    displayMessage("🎉 Correct Number");
    document.querySelector("body").style.backgroundColor =
      "rgba(65,215,162,0.75)";
    document.querySelector(".score").textContent = score;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guessedNumber !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent =
        guessedNumber > secretNumber ? "📈 Too High" : "📉 Too Low";
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = "0";
    }
  }
};

const resetTheGame = function () {
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "60px";
  secretNumber = calculateSecretNumber;
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guessed-number").value = "";
};

document.querySelector(".again-btn").addEventListener("click", resetTheGame);
document.querySelector(".check-button").addEventListener("click", checkNumber);
