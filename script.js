document.addEventListener('DOMContentLoaded', function() {
    var timerElement = document.getElementById('timer');
    var endSound = document.getElementById('endSound');
    var startButton = document.getElementById('startButton');
    var stopButton = document.getElementById('stopButton');
    var timeButtons = document.querySelectorAll('.timeButton');
    var interval;
    var lastTimeSelected = 30; // Conserver la dernière valeur sélectionnée
    var timeLeft = lastTimeSelected; // Initialiser timeLeft avec lastTimeSelected

    function updateTimerDisplay(newTime) {
        lastTimeSelected = newTime; // Mettre à jour lastTimeSelected avec le nouveau temps
        timeLeft = newTime; // Mettre à jour timeLeft avec le nouveau temps
        timerElement.textContent = timeLeft; // Afficher le nouveau temps
    }

    function startTimer() {
        clearInterval(interval);
        interval = setInterval(function() {
            if (timeLeft <= 0) {
                clearInterval(interval);
                endSound.play();
            } else {
                timerElement.textContent = timeLeft;
                timeLeft--;
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(interval);
        updateTimerDisplay(lastTimeSelected); // Réinitialiser le timer à lastTimeSelected
    }

    startButton.addEventListener('click', function() {
    var customTime = parseInt(customTimeInput.value, 10);
    if (!isNaN(customTime) && customTime > 0) {
        updateTimerDisplay(customTime);
        startTimer(); // Démarrez le timer avec la valeur personnalisée
    }
});

    stopButton.addEventListener('click', stopTimer);

    endSound.addEventListener('ended', function() {
        updateTimerDisplay(30); // Réinitialiser le timer après la fin du son
    });
});
