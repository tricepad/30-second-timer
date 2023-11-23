document.getElementById('startButton').addEventListener('click', function() {
    var initialTime = 30; // Valeur initiale du timer
    var timeLeft = initialTime;
    var timerElement = document.getElementById('timer');
    var interval = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(interval);
            document.getElementById('endSound').play();
            timeLeft = initialTime; // Réinitialiser le temps
            timerElement.textContent = initialTime; // Mettre à jour l'affichage
            // Optionnel : Redémarrer automatiquement ou permettre à l'utilisateur de redémarrer manuellement
        } else {
            timerElement.textContent = timeLeft;
            timeLeft -= 1;
        }
    }, 1000);
});
