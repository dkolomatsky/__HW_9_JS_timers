const startButton = document.getElementById("Start");
const stopButton = document.getElementById("Stop");
const resetButton = document.getElementById("Reset");
const spanSeconds = document.getElementById("seconds");
const spanMinutes = document.getElementById("minutes");
const spanHours = document.getElementById("hours");
const secundomer = document.querySelector(".container-stopwatch");

let timer = null,
  counter = "00",
  flag = false;

startButton.onclick = () => {
  if (
    secundomer.classList.contains("red") ||
    secundomer.classList.contains("silver")
  ) {
    secundomer.classList.remove("red") || secundomer.classList.remove("silver");
  }
  if (flag) return;
  flag = true;
  timer = setInterval(() => {
    ++counter;
    spanSeconds.innerText = counter;
    if (spanSeconds.innerText < 10) {
      spanSeconds.innerText = "0" + spanSeconds.innerText;
    } else {
      spanSeconds.innerText;
    }
    if (spanSeconds.innerText == 59) {
      counter = "00";
      spanSeconds.innerText = counter;
      ++spanMinutes.innerText;
      if (spanMinutes.innerText < 10) {
        spanMinutes.innerText = "0" + spanMinutes.innerText;
      } else {
        spanMinutes.innerText;
      }
    }
    if (spanMinutes.innerText == 59) {
      counter = "00";
      spanMinutes.innerText = counter;
      ++spanHours.innerText;
      if (spanHours.innerText < 10) {
        spanHours.innerText = "0" + spanHours.innerText;
      } else {
        spanHours.innerText;
      }
    }
    if (spanHours.innerText == 23) {
      spanSeconds.innerText = "00";
      spanHours.innerText = "00";
      spanMinutes.innerText = "00";
    }
  }, 100);
  secundomer.classList.add("green");
};

stopButton.onclick = () => {
  if (
    secundomer.classList.contains("green") ||
    secundomer.classList.contains("silver")
  ) {
    secundomer.classList.remove("green") ||
      secundomer.classList.remove("silver");
  }
  flag = false;
  clearInterval(timer);
  secundomer.classList.add("red");
};

resetButton.onclick = () => {
  if (
    secundomer.classList.contains("red") ||
    secundomer.classList.contains("green")
  ) {
    secundomer.classList.remove("red") || secundomer.classList.remove("green");
  }
  spanSeconds.innerText = "00";
  spanHours.innerText = "00";
  spanMinutes.innerText = "00";
  clearInterval(timer);
  counter = "00";
  secundomer.classList.add("silver");
};
