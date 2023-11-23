document.addEventListener('DOMContentLoaded', function() {
    var timerElement = document.getElementById('timer');
    var endSound = document.getElementById('endSound');
    var customTimeInput = document.getElementById('customTime');
    var startButton = document.getElementById('startButton');
    var stopButton = document.getElementById('stopButton');
    var timeButtons = document.querySelectorAll('.timeButton');
    var interval;
    var timeLeft = 30; // Déclaration globale de timeLeft

    function updateTimerDisplay(newTime) {
        timeLeft = newTime;
        timerElement.textContent = timeLeft;
    }

    function startTimer() {
        clearInterval(interval);
        interval = setInterval(function() {
            if (timeLeft <= 0) {
                clearInterval(interval);
                endSound.play();
            } else {
                timerElement.textContent = timeLeft;
                timeLeft--; // Assurez-vous que timeLeft est accessible ici
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(interval);
        updateTimerDisplay(timeLeft); // timeLeft doit être accessible ici
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
