function startTimer() {
    setTimeout('timer()', 60);
}

var mins, secs;

var continueMins = localStorage.getItem("continueMins");
var continueSecs = localStorage.getItem("continueSecs");

if (continueMins == 'true') {
    mins = continueMins;
} else {
    mins = 15;
}

if (continueSecs == 'true') {
    secs = continueSecs;
} else {
    secs = mins * 60;
}

function timer() {
    if (document.getElementById) {
        minutes = document.getElementById("minutes");
        seconds = document.getElementById("seconds");
        progressBar = document.getElementById("progressBar");
        timerContainer = document.getElementById("timer-container");
        expired = document.getElementById("expired");
        btcAmount = document.getElementById("btcAmount");
        btcAddress = document.getElementById("btcAddress");

        window.onbeforeunload = function() {
            localStorage.setItem("continueMins", getMinutes());
            localStorage.setItem("continueSecs", getSeconds());
        }

        var totalSeconds = 15 * 60, remainingSeconds = getMinutes() * 60 + getSeconds();

        progressBar.style.width = (remainingSeconds * 100 / totalSeconds) + "%";

        minutes.innerHTML = getMinutes() < 10 ? "0" + getMinutes() : getMinutes();
        seconds.innerHTML = getSeconds() < 10 ? "0" + getSeconds() : getSeconds();

        if (mins < 1) { 
            minutes.classList.add("text-danger");
            seconds.classList.add("text-danger");
        }

        if (mins < 0) {
            expired.style.display = 'block';
            timerContainer.style.display = 'none';
            btcAmount.text = 'Expired';
            btcAddress.text = 'Payment Window Expired';
            localStorage.removeItem("continueMins");
            localStorage.removeItem("continueSecs");
        } else {
            secs--;
            setTimeout('timer()', 1000);
        }

    }
}

function getMinutes() {
    return Math.floor(secs / 60);
}

function getSeconds() {
    return secs - Math.round(mins * 60);
}