// let countSeconds = document.getElementById("secondOnes");
// const msTensCounter = document.getElementById("msTens");
// const msHundredsCounter = document.getElementById("msHundreds");
// let seconds = 0;
// let msTens = 0;
// let mshundreds = 0;
// setInterval(function() {
//   if (seconds < 9) {
//     seconds += 1;
//   } else {
//     seconds = 0;
//   }
//   console.log(seconds);
//   countSeconds.textContent = seconds;
// }, 1000);
// setInterval(function() {
//   if (mshundreds < 9) {
//     mshundreds += 1;
//   } else {
//     mshundreds = 0;
//   }
//   console.log(mshundreds);
//   msHundredsCounter.textContent = mshundreds;
// }, 100);
// setInterval(function() {
//   if (msTens < 9) {
//     msTens += 1;
//   } else {
//     msTens = 0;
//   }
//   console.log(`${msTens} milliseconds`);
//   msTensCounter.textContent = msTens;
// }, 10);
// setInterval(function() {
//   if (Tens < 9) {
//     msTens += 1;
//   } else {
//     msTens = 0;
//   }
//   console.log(`${msTens} milliseconds`);
//   msTensCounter.textContent = msTens;
// }, 10000);
const secondTens = document.querySelector("#secondTens");
function clock(element, interval) {
  let count = 0;
  setInterval(function() {
    if (secondTens.textContent == 1) {
      return (element.textConent = 0);
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
const seconds = document.getElementById("secondOnes");
const mmTens = document.getElementById("msTens");
const mmHundreds = document.getElementById("msHundreds");
function run() {
  const running = true;
  //   while (running) {
  console.log(running);
  clock(seconds, 1000);
  clock(mmHundreds, 100);
  clock(mmTens, 10);
  //   }
}
run();
