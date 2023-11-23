document.addEventListener('DOMContentLoaded', function() {
    var timerLabel = document.getElementById('timer-label');
    var endBreakButton = document.getElementById('end-break-button');
    var progressRingCircle = document.querySelector('.progress-ring__circle');
    var radius = progressRingCircle.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;
    var totalTime = 180; // Exemple pour 3 minutes (180 secondes)
    var timeLeft = totalTime;
    progressRingCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressRingCircle.style.strokeDashoffset = circumference;
    
    function setProgress(percent) {
        const offset = circumference - (percent / 100) * circumference;
        progressRingCircle.style.strokeDashoffset = offset;
    }
    
    function startTimer() {
        clearInterval(interval);
        interval = setInterval(function() {
            timeLeft--;
            timerElement.textContent = timeLeft.toString().padStart(2, '0');
            setCircleDasharray(); // Mettre à jour le cercle de progression

            if (timeLeft <= 0) {
                clearInterval(interval);
                endSound.play();
                timeLeft = totalTime; // Réinitialiser le temps restant
                setCircleDasharray(); // Réinitialiser le cercle de progression
            }
        }, 1000);
    }

    // Arrêter le timer et réinitialiser le cercle de progression
    function stopTimer() {
        clearInterval(interval);
        updateTimerDisplay(totalTime);
    }

    // Ajout des écouteurs d'événements pour les boutons
    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);

    timeButtons.forEach(button => {
        button.addEventListener('click', function() {
            var newTime = parseInt(this.dataset.time, 10);
            updateTimerDisplay(newTime);
        });
    });

    endSound.addEventListener('ended', function() {
        stopTimer(); // Arrêter le timer et réinitialiser le cercle de progression
    });
});
