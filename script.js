document.addEventListener('DOMContentLoaded', function() {
    var timerElement = document.getElementById('timer');
    var endSound = document.getElementById('endSound');
    var customTimeInput = document.getElementById('customTime');
    var startButton = document.getElementById('startButton');
    var stopButton = document.getElementById('stopButton');
    var timeButtons = document.querySelectorAll('.timeButton');
    var interval;
    var timeLeft = 30; // Initialise timeLeft ici

    function updateTimerDisplay(newTime) {
        timeLeft = newTime;
        timerElement.textContent = timeLeft;
    }

    function startTimer() {
        clearInterval(interval);
        interval = setInterval(function() {
            if (timeLeft <= 0) {
                clearInterval(interval);
                endSound.play();
            } else {
                timerElement.textContent = timeLeft;
                timeLeft -= 1;
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(interval);
        updateTimerDisplay(timeLeft); // Affiche le temps restant sans réinitialiser
    }

    function resetTimer() {
        clearInterval(interval);
        updateTimerDisplay(30); // Réinitialise à 30 secondes
    }

    timeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            updateTimerDisplay(parseInt(this.dataset.time, 10));
        });
    });

    startButton.addEventListener('click', startTimer);

    stopButton.addEventListener('click', function() {
        stopTimer();
    });

    endSound.addEventListener('ended', resetTimer);
});
