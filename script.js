document.addEventListener('DOMContentLoaded', function() {
    var timerElement = document.getElementById('timer');
    var endSound = document.getElementById('endSound');
    var customTimeInput = document.getElementById('customTime');
    var startButton = document.getElementById('startButton');
    var stopButton = document.getElementById('stopButton');
    var timeButtons = document.querySelectorAll('.timeButton');
    var interval;
    var timeLeft = 30; // Durée initiale du timer

    function updateTimerDisplay(newTime) {
        timeLeft = newTime; // Mettre à jour le temps restant
        timerElement.textContent = timeLeft; // Mettre à jour l'affichage
    }

    function startTimer() {
        clearInterval(interval); // Arrêter tout timer existant
        interval = setInterval(function() {
            if (timeLeft <= 0) {
                clearInterval(interval); // Arrêter le timer si le temps est écoulé
                endSound.play(); // Jouer le son
            } else {
                timerElement.textContent = timeLeft; // Afficher le temps restant
                timeLeft--; // Décrémenter le temps restant
            }
        }, 1000); // Répéter toutes les secondes
    }

    function stopTimer() {
        clearInterval(interval); // Arrêter le timer
        updateTimerDisplay(timeLeft); // Afficher le temps restant
    }

    timeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            updateTimerDisplay(parseInt(this.dataset.time, 10)); // Mettre à jour le timer avec le temps du bouton cliqué
        });
    });

    startButton.addEventListener('click', startTimer); // Démarrer le timer lorsque le bouton Démarrer est cliqué
    stopButton.addEventListener('click', stopTimer); // Arrêter le timer lorsque le bouton Stop est cliqué

    endSound.addEventListener('ended', function() {
        updateTimerDisplay(30); // Réinitialiser à 30 secondes après la fin du son
    });
});
