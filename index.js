'use strict';

const clockNumbers = document.querySelectorAll('h2');
const hourEl = document.querySelector('.clock__hours-content');
const minuteEl = document.querySelector('.clock__minutes-content');
const secondEl = document.querySelector('.clock__seconds-content');
const ampmEl = document.querySelector('.clock__ampm-text');

function updateClock() {
  clockNumbers.forEach((number) => {
    number.classList.remove('hidden');
  });

  const date = new Date();
  const currentHour = date.getHours();
  const currentMinute = date.getMinutes();
  const currentSecond = date.getSeconds();
  const currentAmPm = hourEl.innerText > 12 ? 'PM' : 'AM';

  hourEl.innerText = currentHour;
  minuteEl.innerText = currentMinute;
  secondEl.innerText = currentSecond;
  ampmEl.innerText = currentAmPm;

  secondEl.innerText =
    secondEl.innerText < 10 ? `0${secondEl.innerText}` : secondEl.innerText;
}

window.addEventListener('load', updateClock);
setInterval(updateClock, 1000);
