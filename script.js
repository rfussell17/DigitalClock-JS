
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


displayTime();
setInterval(displayTime, 1000);