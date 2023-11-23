document.addEventListener('DOMContentLoaded', function() {
    const timerLabel = document.getElementById('timer-label');
    const timerPathRemaining = document.getElementById('timer-path-remaining');
    const radius = 90; // Rayon du cercle SVG
    const circumference = 2 * Math.PI * radius;
    let timeLeft = 30; // Temps initial en secondes (30 secondes)
    let interval;

    timerPathRemaining.style.strokeDasharray = `${circumference} ${circumference}`;
    timerPathRemaining.style.strokeDashoffset = `${circumference}`;
    function startTimer(duration) {
        clearInterval(interval);
        let timePassed = 0;
        timeLeft = duration;
        interval = setInterval(() => {
            timePassed = timePassed += 1;
            timeLeft = duration - timePassed;
            timerLabel.textContent = formatTime(timeLeft);
            setCircleDashoffset(timeLeft, duration);

            if (timeLeft <= 0) {
                clearInterval(interval);
                timerLabel.textContent = 'Pause terminée';
            }
        }, 1000);
    }

    function setCircleDashoffset(time, duration) {
        const dashoffset = circumference - (time / duration) * circumference;
        timerPathRemaining.style.strokeDashoffset = dashoffset;
    }

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    }

    endBreakButton.addEventListener('click', function() {
        clearInterval(interval);
        timerLabel.textContent = '0:30';
        timerPathRemaining.style.strokeDashoffset = circumference;
        // Vous pouvez mettre à jour cette partie pour redémarrer le timer si nécessaire
    });

    // Démarrage initial du timer
    startTimer(30);
});
