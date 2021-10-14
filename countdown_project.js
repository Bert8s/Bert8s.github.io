/*
The aim of this little project is to create a timer which countdown until an specific date time.
*/

// countdown function that receives a final date as an argument and returns and object:
// current date, total remaining time in seconds, seconds, minutes, hours and days
const getTime = (endDate, startDate) => {
  let now = new Date(),
    time = (new Date(endDate) - now) / 1000,
    seconds = `0${Math.floor(time % 60)}`.slice(-2),
    minutes = `0${Math.floor((time / 60) % 60)}`.slice(-2),
    hours = `0${Math.floor((time / 3600) % 24)}`.slice(-2),
    days = Math.floor(time / 3600 / 24),
    end = new Date(endDate) / 1000,
    start = new Date(startDate) / 1000,
    progress = `${((1 - time / (end - start)) * 100).toFixed(2)}`;

  return { now, time, seconds, minutes, hours, days, end, start, progress };
};

// date to countdown
const dateTo =
  "Fri Dec 31 2021 23:00:00 GMT+0100 (Central European Summer Time)";

// date where started theh countdouwn
const dateStart =
  "Fri Oct 1 2021 23:00:00 GMT+0200 (Central European Summer Time)";

// getting alld the HTML elements of the counterdown
const seconds = document.querySelector(".digit-seconds");
const minutes = document.querySelector(".digit-minutes");
const hours = document.querySelector(".digit-hours");
const days = document.querySelector(".digit-days");
const progressBar = document.querySelector(".progress");

// Timer for 1 second
setInterval(() => {
  // passing a final date to 'countdown' function
  const countDown = getTime(dateTo, dateStart);
  //console.clear();

  // logging some info through the console
  console.clear();
  console.log(`Countdown to:  ${dateTo}`);
  console.log(`Today date:    ${countDown.now}`);
  console.log(`Starting date: ${dateStart}`);
  console.log(`[D  : h  : m  : s ]`);
  console.log(
    `[${countDown.days} : ${countDown.hours} : ${countDown.minutes} : ${countDown.seconds}]`
  );
  console.log(`Absolute final:  ${countDown.end} sec`);
  console.log(`Absolute start:  ${countDown.start} sec`);
  console.log(`Total CD time:   ${countDown.end - countDown.start} sec`);
  console.log(`Current CD time: ${Math.trunc(countDown.time)} sec`);
  console.log(`Progress: ${countDown.progress}`);

  // updating the HTML elements
  seconds.textContent = countDown.seconds;
  minutes.textContent = countDown.minutes;
  hours.textContent = countDown.hours;
  days.textContent = countDown.days;
  //progressBar.textContent = countDown.progress;

  const changeProgress = (progress) => {
    progressBar.style.width = `${progress}%`;
  };

  changeProgress(countDown.progress);

  // timer set to 1000 milliseconds
}, 1000);
