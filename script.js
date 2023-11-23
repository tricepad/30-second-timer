document.addEventListener('DOMContentLoaded', function() {
    var timerElement = document.getElementById('timer');
    var endSound = document.getElementById('endSound');
    var customTimeInput = document.getElementById('customTime');
    var startButton = document.getElementById('startButton');
    var stopButton = document.getElementById('stopButton'); // Le bouton Stop
    var timeButtons = document.querySelectorAll('.timeButton');
    var interval;
    var timeLeft; // Déclaration de la variable timeLeft
    var lastTimeSelected = 30; // La dernière durée sélectionnée, initialisée à 30 secondes

    // Fonction pour mettre à jour le timer et l'affichage.
    function updateTimerDisplay(newTime) {
        timeLeft = newTime; // Assurez-vous de mettre à jour timeLeft
        lastTimeSelected = newTime; // Mettre à jour la dernière valeur sélectionnée
        timerElement.textContent = newTime; // Mettre à jour l'affichage du timer
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
                timeLeft -= 1; // Décrémenter le timer
            }
        }, 1000);
    }

    // Fonction pour arrêter et réinitialiser le timer.
    function stopAndResetTimer() {
        clearInterval(interval); // Arrêter le timer
        updateTimerDisplay(lastTimeSelected); // Réinitialiser l'affichage au dernier temps choisi
    }

    // Écoute des clics sur les boutons de temps prédéfinis.
    timeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            updateTimerDisplay(parseInt(this.dataset.time, 10)); // Mettre à jour le timer avec le temps prédéfini
        });
    });

    // Écoute du clic sur le bouton Démarrer.
    startButton.addEventListener('click', function() {
        var customTime = parseInt(customTimeInput.value, 10); // Obtenir la valeur du champ de saisie personnalisé
        if (!isNaN(customTime) && customTime > 0) {
            updateTimerDisplay(customTime); // Si c'est un nombre valide, mettre à jour le timer
        }
        startTimer(); // Démarrer le timer
    });

    // Écoute du clic sur le bouton Stop.
    stopButton.addEventListener('click', function() {
        stopAndResetTimer(); // Arrêter et réinitialiser le timer
    });

    // Écoute de la fin du son pour réinitialiser le timer.
    endSound.addEventListener('ended', function() {
        updateTimerDisplay(lastTimeSelected); // Quand le son est fini, réinitialiser le timer
    });
});
