document.addEventListener('DOMContentLoaded', function() {
    var timerElement = document.getElementById('timer-label');
    var customTimeInput = document.getElementById('customTime');
    var startButton = document.getElementById('startButton');
    var stopButton = document.getElementById('stopButton');
    var timeButtons = document.querySelectorAll('.timeButton');
    var endSound = document.getElementById('endSound');
    var timerPathRemaining = document.getElementById('timer-path-remaining');
    var interval;
    var totalTime = 30; // Temps total en secondes
    var timeLeft = totalTime;

    // Mettre à jour le cercle de progression SVG
    function setCircleDasharray() {
        const circleDasharray = `${(timeLeft / totalTime) * 283} 283`;
        timerPathRemaining.setAttribute('stroke-dasharray', circleDasharray);
    }

    function updateTimerDisplay(newTime) {
        totalTime = newTime;
        timeLeft = newTime;
        timerElement.textContent = timeLeft.toString().padStart(2, '0');
        setCircleDasharray(); // Mettre à jour le cercle de progression
    }

    function startTimer() {
        clearInterval(interval);
        interval = setInterval(function() {
            timeLeft--;
            timerElement.textContent = timeLeft.toString().padStart(2, '0');
            setCircleDasharray(); // Mettre à jour le cercle de progression

            if (timeLeft <= 0) {
                clearInterval(interval);
                endSound.play();
                timeLeft = totalTime; // Réinitialiser le temps restant
                setCircleDasharray(); // Réinitialiser le cercle de progression
            }
        }, 1000);
    }

    // Arrêter le timer et réinitialiser le cercle de progression
    function stopTimer() {
        clearInterval(interval);
        updateTimerDisplay(totalTime);
    }

    // Ajout des écouteurs d'événements pour les boutons
    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);

    timeButtons.forEach(button => {
        button.addEventListener('click', function() {
            var newTime = parseInt(this.dataset.time, 10);
            updateTimerDisplay(newTime);
        });
    });

    endSound.addEventListener('ended', function() {
        stopTimer(); // Arrêter le timer et réinitialiser le cercle de progression
    });
});
