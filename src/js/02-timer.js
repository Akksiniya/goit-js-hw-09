import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtnRef = document.querySelector('button[data-start]');
console.log(startBtnRef);


const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
}


let timeDeadline = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      timeDeadline = selectedDates[0].getTime();

      if (timeDeadline < Date.now()) {
        startBtnRef.disabled = true;
        Notify.failure('Please choose a date in the future"', {
              backOverlay: true,
              clickToClose: true,
               closeButton: true,
            });
            return;
      }
      startBtnRef.disabled = false;
    },
  };

  console.log(timeDeadline);

const inputData = flatpickr('#datetime-picker', options);

function start (selectedDates) {
  let intervalId = null;

  intervalId = setInterval(() => {

    const diff = timeDeadline - Date.now();
    console.log(diff);

    if (diff <= 1000) {
      clearInterval(intervalId);
      console.log('stop timer');
    };

    const data = convertMs(diff);
    console.log(data);

    for (const ref in refs) {
      refs[ref].textContent = addLeadinZero(data[ref]);
    };
    
  }, 1000);

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
}


function addLeadinZero(value) {
  return String(value).padStart(2, '0');
};

startBtnRef.addEventListener('click', start);



