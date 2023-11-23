document.getElementById('startButton').addEventListener('click', function() {
    var initialTime = 30;
    var timerElement = document.getElementById('timer');
    var endSound = document.getElementById('endSound');

    // Réinitialiser le timer à sa valeur initiale et mettre à jour l'affichage.
    function resetTimer() {
        timerElement.textContent = initialTime;
    }

    // Fonction pour démarrer le timer.
    function startTimer() {
        var timeLeft = initialTime;
        var interval = setInterval(function() {
            if (timeLeft <= 0) {
                clearInterval(interval);
                endSound.play();
            } else {
                timerElement.textContent = timeLeft;
                timeLeft -= 1;
            }
        }, 1000);
    }

    // Écouter l'événement 'ended' sur l'élément audio pour réinitialiser le timer
    // après que le son est terminé.
    endSound.addEventListener('ended', resetTimer);

    // Démarrer le timer.
    startTimer();
});
