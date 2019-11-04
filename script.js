
//initialize variables needed to start
//create function to display time

function displayTime() {
  const time = new Date();
  let hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  let ampm = time.getHours() < 12? "AM" : "PM";

  //refactoring hours, minutes, seconds to display "0" before single digit numbers
  
  const refactoredHours = hours < 10? hours.innerText = "0" + time.getHours() : time.getHours();
  const refactoredMinutes = minutes < 10? hours.innerText = "0" + time.getMinutes() : time.getMinutes();
  const refactoredSeconds = seconds < 10? hours.innerText = "0" + time.getSeconds() : time.getSeconds();
  
  //assign newly refactored hours, min, sec to localTime & assign localTime to "time" class in innerHTML 
  
  const localTime = refactoredHours + ":" + refactoredMinutes + ":" + refactoredSeconds; 
  document.getElementsByClassName("time")[0].innerHTML = localTime;
  document.getElementsByClassName("ampm")[0].innerHTML = ampm;
  }
  

  function displayDate() {
    const todaysDate = new Date();
    document.getElementsByClassName("date")[0].innerHTML = todaysDate;
  }

  //call time and date functions, refresh every second
  displayDate();
  displayTime();
  setInterval(displayTime, 1000);