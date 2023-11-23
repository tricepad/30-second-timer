const svg = document.getElementById('timer-svg');
const path = document.getElementById('timer-path');
const label = document.getElementById('timer-label');
let duration = 30; // Durée initiale du timer en secondes
let timeLeft = duration;
let pathLength;

window.onload = () => {
  const radius = svg.width.baseVal.value / 2 - 10; // 10 est la marge intérieure
  const circumference = radius * 2 * Math.PI;
  pathLength = circumference;
  path.style.strokeDasharray = circumference;
  
  // Commence avec le chemin plein
  path.style.strokeDashoffset = circumference;

  startTimer();
};

function startTimer() {
  updateTimer(timeLeft);
  const interval = setInterval(() => {
    timeLeft--;
    updateTimer(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(interval);
      label.textContent = "Time's up!";
    }
  }, 1000);
}

function updateTimer(seconds) {
  label.textContent = formatTime(seconds);
  const offset = pathLength - (seconds / duration) * pathLength;
  path.style.strokeDashoffset = offset;
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
