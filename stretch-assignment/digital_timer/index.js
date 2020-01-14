function clock(element, interval) {
  let count = 0;
  console.log("hi");
  let clockTimer = setInterval(function() {
    // while (running) {
    if (secondTens.textContent == 1) {
      document.querySelector(".digits").classList.add("redDigit");
      clearInterval(clockTimer);
      element.textContent = 0;
    } else {
      if (element == seconds && count == 9) {
        document.getElementById("secondTens").textContent = 1;
        running = false;
      }
      if (count < 9) {
        count += 1;
      } else {
        count = 0;
      }
      element.textContent = count;
    }
  }, interval);
}
const secondTens = document.querySelector("#secondTens");
const seconds = document.getElementById("secondOnes");
const mmHundreds = document.getElementById("msHundreds");
const mmTens = document.getElementById("msTens");
function run() {
  const running = true;
  clock(mmHundreds, 100);
  clock(mmTens, 10);
  clock(seconds, 1000);
}
function startButtonclick(event) {
  this.classList.add("clicked");
  run();
}
const startButton = document.createElement("div");
startButton.textContent = "Start";
startButton.id = "startButton";
startButton.addEventListener("click", startButtonclick);
document.querySelector("body").append(startButton);
0;
