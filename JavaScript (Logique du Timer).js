document.getElementById('startButton').addEventListener('click', function() {
    console.log('Bouton démarrer cliqué'); // Pour vérifier que l'événement de clic est capturé
    var timeLeft = 30;
    var timerElement = document.getElementById('timer');
    if (!timerElement) {
        console.log('Élément timer non trouvé'); // Vérifie si l'élément timer est trouvé
    }
    var interval = setInterval(function() {
        console.log('Timer: ' + timeLeft); // Affiche la valeur actuelle du timer
        if (timeLeft <= 0) {
            clearInterval(interval);
            var endSound = document.getElementById('endSound');
            if (endSound) {
                endSound.play();
            } else {
                console.log('Élément sonore non trouvé'); // Vérifie si l'élément sonore est trouvé
            }
        }
        timerElement.textContent = timeLeft;
        timeLeft -= 1;
    }, 1000);
});
