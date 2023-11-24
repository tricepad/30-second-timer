document.addEventListener('DOMContentLoaded', function() {
    var timerElement = document.getElementById('timer');
    var endSound = document.getElementById('endSound');
    var startButton = document.getElementById('startButton');
    var stopButton = document.getElementById('stopButton');
    var timeLeft = 30;
    var interval;

    function updateTimerDisplay(newTime) {
        timerElement.textContent = newTime;
    }

    function startTimer() {
        clearInterval(interval);
        updateTimerDisplay(timeLeft);
        interval = setInterval(function() {
            timeLeft -= 1;
            updateTimerDisplay(timeLeft);
            if (timeLeft <= 0) {
                clearInterval(interval);
                endSound.play();
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(interval);
        timeLeft = 30;
        updateTimerDisplay(timeLeft);
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);

    endSound.addEventListener('ended', function() {
        timeLeft = 30;
        updateTimerDisplay(timeLeft);
    });
});
