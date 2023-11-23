document.addEventListener('DOMContentLoaded', function() {
    var timerElement = document.getElementById('timer');
    var endSound = document.getElementById('endSound');
    var customTimeInput = document.getElementById('customTime');
    var startButton = document.getElementById('startButton');
    var timeButtons = document.querySelectorAll('.timeButton');
    var interval;
    var timeLeft = 30; // Initialisation avec 30 secondes par défaut

    // Fonction pour mettre à jour le timer et l'affichage.
    function updateTimerDisplay(newTime) {
        timeLeft = newTime;
        timerElement.textContent = newTime; // Met à jour l'affichage avec la nouvelle valeur
    }

    // Fonction pour démarrer le timer.
    function startTimer() {
        clearInterval(interval); // Nettoyer l'intervalle précédent s'il y en a un
        interval = setInterval(function() {
            if (timeLeft <= 0) {
                clearInterval(interval);
                endSound.play();
                // Optionnel: vous pouvez également réinitialiser le timer ici si nécessaire
                // updateTimerDisplay(30); // ou toute autre valeur par défaut
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
        updateTimerDisplay(30); // Réinitialiser le timer à 30 secondes après la fin du son
    });
});
