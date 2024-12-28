const timerDisplay = document.querySelector(".time-display");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let milS = 0;
let sec = 0;
let mins = 0;
let hours = 0;
let interval = null;

startButton.addEventListener("click", () => {
  // if (interval !== null) {
  //   clearInterval(interval);
  // }
  interval = setInterval(watchTimingHandler, 100);
});
stopButton.addEventListener("click", () => {
  clearInterval(interval);
});
resetButton.addEventListener("click", () => {
  clearInterval(interval);
  timerDisplay.innerHTML = "00 : 00 : 00 : 00";
  hours = 0;
  mins = 0;
  sec = 0;
  milS = 0;
});

const watchTimingHandler = () => {
  milS++;
  if (milS == 10) {
    milS = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      mins++;
      if (mins == 60) {
        mins = 0;
        hours++;
      }
    }
  }
  let hoursStr = hours < 10 ? `0${hours}` : hours;
  let minStr = mins < 10 ? `0${mins}` : mins;
  let secStr = sec < 10 ? `0${sec}` : sec;
  let milSecStr = milS < 10 ? `0${milS}` : milS;
  timerDisplay.innerHTML = `${hoursStr} : ${minStr} : ${secStr} : ${milSecStr}`;
  console.log(milS + " " + sec + " " + mins + " " + hours);
};
