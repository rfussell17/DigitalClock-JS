//initialize variables needed to start

function displayTime() {
  const time = new Date();
  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = time.getHours() < 12 ? "AM" : "PM";

  //refactoring hours, minutes, seconds to display "0" before single digit numbers

  const refactoredHours =
    hours === 0 ? (hours.innerText = 12) : time.getHours() % 12;
  const refactoredMinutes =
    minutes < 10
      ? (hours.innerText = "0" + time.getMinutes())
      : time.getMinutes();
  const refactoredSeconds =
    seconds < 10
      ? (hours.innerText = "0" + time.getSeconds())
      : time.getSeconds();

  //custom greeting and background change depending on time of day

  let hours24 = time.getHours();
  let timeOfDay;

  if (hours24 < 12) {
    timeOfDay = "Morning";
    document.body.background = "images/morning.jpg";
  } else if (hours24 < 18) {
    timeOfDay = "Afternoon";
    document.body.background = "images/afternoon.jpg";
  } else {
    timeOfDay = "Evening";
    document.body.background = "images/lake.jpg";
  }

  document.getElementById("greeting").innerHTML = `Good ${timeOfDay}`;

  //create an array to display date in day of week, month and day of month

  const date = new Date();
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const day = dayOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  const todaysDate = `${day}  ${month}  ${dayOfMonth}`;

  //assign refactored hours, min, sec to localTime & assign constants localTime, ampm and todaysDate to the text div in html

  const localTime = `${refactoredHours}:${refactoredMinutes}:${refactoredSeconds}`;
  document.getElementsByClassName("time")[0].innerHTML = localTime;
  document.getElementsByClassName("ampm")[0].innerHTML = ampm;
  document.getElementById("date").innerHTML = todaysDate;
}

//call time and date function, refresh every second

displayTime();
setInterval(displayTime, 1000);
