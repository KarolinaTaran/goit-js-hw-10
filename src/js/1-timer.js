import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  close: true,
  messageColor: 'white',
  backgroundColor: 'red',
  position: 'topCenter',
  closeOnClick: true,
});

let userSelectedDate;
let countdownInterval;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    updateStartButtonStatus();
  },
};
const textInput = document.getElementById('datetime-picker');
flatpickr(textInput, options);

const startButton = document.querySelector('[data-start]');
let countdownDisplays = document.querySelectorAll('.value');

function updateStartButtonStatus() {
  if (userSelectedDate < new Date()) {
    iziToast.show({
      message: 'Please choose a date in the future',
    });
    startButton.disabled = true;
  } else {
    startButton.disabled = false;
  }
}

startButton.addEventListener('click', () => {
  startCountdown();
  startButton.disabled = true;
});

function startCountdown() {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  countdownInterval = setInterval(() => {
    const currentTime = new Date().getTime();
    const timeDifference = userSelectedDate - currentTime;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      console.log('Countdown finished!');
      startButton.disabled = false;
    } else {
      const { days, hours, minutes, seconds } = convertMs(timeDifference);
      updateCountdownDisplay(days, hours, minutes, seconds);
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateCountdownDisplay(days, hours, minutes, seconds) {
  countdownDisplays.forEach((display, index) => {
    switch (index) {
      case 0:
        display.textContent = `${days}`;
        break;
      case 1:
        display.textContent = `${addLeadingZero(hours)}`;
        break;
      case 2:
        display.textContent = `${addLeadingZero(minutes)}`;
        break;
      case 3:
        display.textContent = `${addLeadingZero(seconds)}`;
        break;
      default:
        break;
    }
  });
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
