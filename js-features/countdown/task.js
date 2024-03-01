const currentTimerElement = document.getElementById("timer");
let hours = "01";
let minutes = "00";
let seconds = "05";
currentTimerElement.innerText = `${hours}:${minutes}:${seconds}`;
let currentTimer = +hours * 60 * 60 + +minutes * 60 + +seconds;

const timer = setInterval(() => {
  if (currentTimer > 0) {
    hours = Math.floor(currentTimer / (60 * 60));
    minutes = Math.floor((currentTimer - hours * 60 * 60) / 60);
    seconds = Math.floor(currentTimer - (hours * 60 * 60 + minutes * 60));
    currentTimer -= 1;
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    currentTimerElement.innerText = `${hours}:${minutes}:${seconds}`;
  }
}, 1000);
