document.addEventListener('DOMContentLoaded', function() {
    console.log("Le DOM est chargé"); // Confirmer que le DOM est chargé
    var timerElement = document.getElementById('timer');
    var endSound = document.getElementById('endSound');
    var customTimeInput = document.getElementById('customTime');
    var startButton = document.getElementById('startButton');
    var stopButton = document.getElementById('stopButton');
    var timeButtons = document.querySelectorAll('.timeButton');
    var interval;
    var timeLeft = 30;

    function updateTimerDisplay(newTime) {
        console.log("Mise à jour de l'affichage du timer avec", newTime);
        timeLeft = newTime;
        timerElement.textContent = timeLeft;
    }

    function startTimer() {
        console.log("Démarrage du timer");
        clearInterval(interval);
        interval = setInterval(function() {
            console.log("Timer en cours:", timeLeft);
            if (timeLeft <= 0) {
                clearInterval(interval);
                endSound.play();
            } else {
                timerElement.textContent = timeLeft;
                timeLeft--;
            }
        }, 1000);
    }

    function stopTimer() {
        console.log("Arrêt du timer");
        clearInterval(interval);
        updateTimerDisplay(timeLeft);
    }

    timeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            updateTimerDisplay(parseInt(this.dataset.time, 10));
        });
    });

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);

    endSound.addEventListener('ended', function() {
        updateTimerDisplay(30);
    });
});
