document.addEventListener('DOMContentLoaded', function() {
    var timerElement = document.getElementById('timer');
    var endSound = document.getElementById('endSound');
    var customTimeInput = document.getElementById('customTime');
    var startButton = document.getElementById('startButton');
    var timeButtons = document.querySelectorAll('.timeButton');
    var interval;
    var timeLeft;

    // Fonction pour mettre à jour le timer.
    function updateTimer(newTime) {
        timeLeft = newTime;
        timerElement.textContent = timeLeft;
    }

    // Fonction pour démarrer le timer.
    function startTimer() {
        if (interval) {
            clearInterval(interval); // Assurez-vous de nettoyer l'interval existant.
        }
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

    // Réinitialiser le timer à sa valeur initiale et mettre à jour l'affichage.
    function resetTimer() {
        updateTimer(timeLeft);
    }

    // Écouter l'événement 'ended' sur l'élément audio pour réinitialiser le timer.
    endSound.addEventListener('ended', resetTimer);

    // Ajouter l'écoute des clics sur les boutons de temps prédéfinis.
    timeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            updateTimer(this.dataset.time);
        });
    });

    // Démarrer le timer avec le temps choisi.
    startButton.addEventListener('click', function() {
        var customTime = parseInt(customTimeInput.value, 10);
        if (!isNaN(customTime) && customTime > 0) {
            updateTimer(customTime);
        }
        startTimer();
    });
});
