document.getElementById('startButton').addEventListener('click', function() {
    var timeLeft = 30;
    var timerElement = document.getElementById('timer');
    var interval = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(interval);
            document.getElementById('endSound').play();
        }
        timerElement.textContent = timeLeft;
        timeLeft -= 1;
    }, 1000);
});
