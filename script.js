document.addEventListener('DOMContentLoaded', function() {
    var timerElement = document.getElementById('timer');
    var endSound = document.getElementById('endSound');
    var customTimeInput = document.getElementById('customTime');
    var startButton = document.getElementById('startButton');
    var timeButtons = document.querySelectorAll('.timeButton');
    var interval;
    var lastTimeSelected = 30; // Variable pour stocker le dernier temps choisi

    // Fonction pour mettre à jour le timer et l'affichage.
    function updateTimerDisplay(newTime) {
        lastTimeSelected = newTime; // Mettre à jour le dernier temps choisi
        timerElement.textContent = newTime;
    }

    // Fonction pour démarrer le timer.
    function startTimer() {
        clearInterval(interval); // Nettoyer l'intervalle précédent s'il y en a un
        timeLeft = lastTimeSelected; // Utiliser le dernier temps choisi
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

    // Ajouter l'écoute des clics sur les boutons de temps prédéfinis.
    timeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            updateTimerDisplay(parseInt(this.dataset.time, 10)); // Convertit en nombre et met à jour l'affichage
        });
    });

    // Démarrer le timer avec le temps choisi ou le temps personnalisé.
    startButton.addEventListener('click', function() {
        var customTime = parseInt(customTimeInput.value, 10);
        if (!isNaN(customTime) && customTime > 0) {
            updateTimerDisplay(customTime); // Utilise le temps personnalisé s'il est valide et supérieur à 0
        }
        startTimer();
    });

    // Écouter l'événement 'ended' sur l'élément audio pour réinitialiser le timer.
    endSound.addEventListener('ended', function() {
        updateTimerDisplay(lastTimeSelected); // Réinitialiser le timer au dernier temps choisi après la fin du son
    });
});
