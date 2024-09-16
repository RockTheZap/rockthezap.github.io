var daysEl = document.getElementById('days');
var hoursEl = document.getElementById('hours');
var minutesEl = document.getElementById('minutes');
var secondsEl = document.getElementById('seconds');

// Set timer duration here (in minutes)
const timerDuration = 30; // Exemplo: 30 minutos

function startTimer(duration) {
    const now = new Date().getTime();
    const countdownDate = now + duration;

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            clearInterval(interval);
            daysEl.innerText = '00';
            hoursEl.innerText = '00';
            minutesEl.innerText = '00';
            secondsEl.innerText = '00';
            return;
        }

        daysEl.innerText = formatNumber(Math.floor(distance / (1000 * 60 * 60 * 24)));
        hoursEl.innerText = formatNumber(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        minutesEl.innerText = formatNumber(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        secondsEl.innerText = formatNumber(Math.floor((distance % (1000 * 60)) / 1000));
    }, 1000);
}

function formatNumber(number) {
    return number < 10 ? '0' + number : number;
}

// Convert timerDuration to milliseconds and start the timer
const duration = timerDuration * 60 * 1000;
startTimer(duration);

window.onload = function() {
    const min = 5;
    const max = 17;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').textContent = `Remaining units: ${randomNumber}`;
};

document.getElementById("toggleButton").addEventListener("click", function() {
    var content = document.getElementById("content1");
    if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
    } else {
        content.classList.add("hidden");
    }
});

