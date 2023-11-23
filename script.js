document.addEventListener('DOMContentLoaded', function() {
    var timerElement = document.getElementById('timer');
    var endSound = document.getElementById('endSound');
    var customTimeInput = document.getElementById('customTime');
    var startButton = document.getElementById('startButton');
    var stopButton = document.getElementById('stopButton'); // Le bouton Stop
    var timeButtons = document.querySelectorAll('.timeButton');
    var interval;
    var timeLeft = 30; // Durée initiale et variable pour stocker le temps restant

    // Fonction pour mettre à jour le timer et l'affichage.
    function updateTimerDisplay(newTime) {
        timeLeft = newTime; // Mettre à jour timeLeft avec le nouveau temps
        timerElement.textContent = timeLeft; // Mettre à jour l'affichage du timer
    }

    // Fonction pour démarrer le timer.
    function startTimer() {
        clearInterval(interval); // Arrêter le timer précédent s'il est en cours
        interval = setInterval(function() {
            if (timeLeft <= 0) {
                clearInterval(interval); // Arrêter le timer quand il atteint 0
                endSound.play();
            } else {
                timerElement.textContent = timeLeft; // Mettre à jour l'affichage
                timeLeft--; // Décrémenter le timer
            }
        }, 1000);
    }

    // Fonction pour arrêter le timer.
    function stopTimer() {
        clearInterval(interval); // Arrêter le timer
        updateTimerDisplay(timeLeft); // Réafficher le temps restant sans réinitialiser
    }

    // Fonction pour réinitialiser le timer.
    function resetTimer() {
        clearInterval(interval); // Arrêter le timer
        updateTimerDisplay(30); // Réinitialiser à 30 secondes
    }

    // Ajouter l'écoute des clics sur les boutons de durée prédéfinie.
    timeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            updateTimerDisplay(parseInt(this.dataset.time, 10)); // Mettre à jour le timer avec le temps prédéfini
        });
    });

    // Écouter le clic sur le bouton Démarrer.
    startButton.addEventListener('click', startTimer);

    // Écouter le clic sur le bouton Stop.
    stopButton.addEventListener('click', function() {
        stopTimer(); // Arrêter le timer sans réinitialiser
    });

    // Écouter la fin du son pour réinitialiser le timer.
    endSound.addEventListener('ended', resetTimer);
});
