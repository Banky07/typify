const words = ["hello", "world", "javascript", "html", "css", "typing", "game", "speed", "accuracy"];
let currentWord = "";
let score = 0;
let time = 60; // Adjust time limit (in seconds) here

function generateWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  document.getElementById("word").textContent = currentWord;
  document.getElementById("input").value = "";
  startTimer();
}

function checkInput() {
  const input = document.getElementById("input").value.toLowerCase();
  if (input === currentWord) {
    score++;
    document.getElementById("score").textContent = `Score: ${score}`;
    generateWord();
  } else {
    document.getElementById("input").value = "";
  }
}

function startTimer() {
  time = 60; // Reset timer
  const timerElement = document.getElementById("score");
  const intervalId = setInterval(() => {
    time--;
    timerElement.textContent = `Score: ${score} | Time: ${time}s`;
    if (time <= 0) {
      clearInterval(intervalId);
      alert(`Time's Up! Your score is ${score}`);
      score = 0; // Reset score
    }
  }, 1000);
}
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-button');
    const gameCanvas = document.getElementById('gameCanvas');
    const ctx = gameCanvas.getContext('2d');

    startButton.addEventListener('click', startGame);

    function startGame() {
        // Implement game start logic here
        console.log('Game started!');
        // Example: Initialize game objects or start game loop
    }
});

document.getElementById("input").addEventListener("keyup", checkInput);
generateWord();
