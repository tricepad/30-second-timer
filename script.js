document.addEventListener('DOMContentLoaded', function() {
    var timerElement = document.getElementById('timer');
    var endSound = document.getElementById('endSound');
    var customTimeInput = document.getElementById('customTime');
    var startButton = document.getElementById('startButton');
    var stopButton = document.getElementById('stopButton'); // Le bouton Stop
    var timeButtons = document.querySelectorAll('.timeButton');
    var interval;
    var lastTimeSelected = 30;

    // Fonction pour mettre à jour le timer et l'affichage.
    function updateTimerDisplay(newTime) {
        lastTimeSelected = newTime;
        timerElement.textContent = newTime;
    }

    // Fonction pour démarrer le timer.
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

    // Fonction pour arrêter et réinitialiser le timer.
    function stopAndResetTimer() {
        clearInterval(interval);
        updateTimerDisplay(lastTimeSelected); // Réinitialise l'affichage au dernier temps choisi
    }

    // Écoute des clics sur les boutons de temps prédéfinis.
    timeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            updateTimerDisplay(parseInt(this.dataset.time, 10));
        });
    });

    // Écoute du clic sur le bouton Démarrer.
    startButton.addEventListener('click', function() {
        var customTime = parseInt(customTimeInput.value, 10);
        if (!isNaN(customTime) && customTime > 0) {
            updateTimerDisplay(customTime);
        }
        startTimer();
    });

    // Écoute du clic sur le bouton Stop.
    stopButton.addEventListener('click', function() {
        stopAndResetTimer();
    });

    // Écoute de la fin du son pour réinitialiser le timer.
    endSound.addEventListener('ended', function() {
        updateTimerDisplay(lastTimeSelected);
    });
});
