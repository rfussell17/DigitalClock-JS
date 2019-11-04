
function displayTime() {
  const time = new Date();
  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const refactoredHours = hours < 10? hours.innerText = "0" + time.getHours() % 12 : time.getHours() % 12;
  const refactoredMinutes = minutes < 10? hours.innerText = "0" + time.getMinutes() : time.getMinutes();
  const refactoredSeconds = seconds < 10? hours.innerText = "0" + time.getSeconds() : time.getSeconds();
  const localTime = refactoredHours + ":" + refactoredMinutes + ":" + refactoredSeconds;
  document.getElementById("time").innerHTML = localTime;
}

function displayDate(){
const todaysDate = new Date();
document.getElementById("date").innerHTML = todaysDate;
  }

displayTime();
setInterval(displayTime, 1000);
displayDate();
setInterval(displayDate, 1000);
