
//initialize variables needed to start
//create function to display time

function displayTime() {
const time = new Date();
const hours = time.getHours() % 12;
const minutes = time.getMinutes();
const seconds = time.getSeconds();
const ampm = time.getHours() >=12 ? "PM" : "AM";

//refactoring hours, minutes, seconds to display "0" before single digit numbers

const refactoredHours = hours < 10? hours.innerText = "0" + time.getHours() % 12 : time.getHours() % 12;
const refactoredMinutes = minutes < 10? hours.innerText = "0" + time.getMinutes() : time.getMinutes();
const refactoredSeconds = seconds < 10? hours.innerText = "0" + time.getSeconds() : time.getSeconds();

//assign newly refactored hours, min, sec to localTime & assign localTime to "time" class in innerHTML 

const localTime = refactoredHours + ":" + refactoredMinutes + ":" + refactoredSeconds; 
document.getElementsByClassName("time")[0].innerHTML = localTime;
document.getElementsByClassName("ampm")[0].innerHTML = ampm;
}

//create function to display date

function displayDate(){
  const todaysDate = new Date();
  document.getElementsByClassName("date")[0].innerHTML = todaysDate;
}

//call time and date functions, refresh every second

displayTime();
setInterval(displayTime, 1000);
displayDate();
setInterval(displayDate, 1000);
