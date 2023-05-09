// Here in "" we need to set our countdown date. Now it is set to May 15, 2023 23:59:59
let selectedDate = new Date("May 15, 2023 23:59:59").getTime();

const refs = {
    days1: document.querySelector('span[data-days-1]'),
    hours1: document.querySelector('span[data-hours-1]'),
    minutes1: document.querySelector('span[data-minutes-1]'),
    seconds1: document.querySelector('span[data-seconds-1]'),
    days2: document.querySelector('span[data-days-2]'),
    hours2: document.querySelector('span[data-hours-2]'),
    minutes2: document.querySelector('span[data-minutes-2]'),
    seconds2: document.querySelector('span[data-seconds-2]'),
};

function startCountdown() {
    intervalId = setInterval(() => {
        const currentTime = Date.now();

        if (selectedDate < currentTime) {
            clearInterval(intervalId);
            return;
        };

        const timeDifference = selectedDate - currentTime;
        const { days, hours, minutes, seconds } = convertMs(timeDifference);

        refs.days1.textContent = addLeadingZero(days).slice(0, 1);
        refs.days2.textContent = addLeadingZero(days).slice(1, 2);
        
        refs.hours1.textContent = addLeadingZero(hours).slice(0, 1);
        refs.hours2.textContent = addLeadingZero(hours).slice(1, 2);
        
        refs.minutes1.textContent = addLeadingZero(minutes).slice(0, 1);
        refs.minutes2.textContent = addLeadingZero(minutes).slice(1, 2);
        
        refs.seconds1.textContent = addLeadingZero(seconds).slice(0, 1);
        refs.seconds2.textContent = addLeadingZero(seconds).slice(1, 2);
    }, 1000);
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
};

startCountdown();