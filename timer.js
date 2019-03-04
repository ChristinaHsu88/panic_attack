var timersCount = 0;
var pause = false; //is timer paused

countTimers();

function countTimers() {
  timersCount++;

  var count = 26;
  var counter = setInterval(timer, 1000);

  function timer() {
    if (!pause) { //do something if not paused
      count = count - 1;
      if (count < 0) {
        clearInterval(counter);
        setTimeout(countTimers, 5000); //start count from 26 again
        return;
      }

      document.getElementById("timer").innerHTML = count;
    }
  }

  document.getElementById("countTimers").innerHTML = timersCount;
}

document.getElementById('pause').addEventListener('click', function () {
    pause = true;
});

document.getElementById('resume').addEventListener('click', function () {
    pause = false;
});

// const gameTime = 3 // min
// const activityTime = 10 // sec

// function countdown(minutes) {
//     var seconds = 60
//     var mins = minutes
//     function tick(skipTime) {
//         var counter = document.getElementById("counter")
//         var current_minutes = mins - 1
//         seconds--
//         // skipTime ? seconds = seconds - skipTime : seconds--
//         counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)
//         if (seconds > 0 ) {
//             setTimeout(tick, 1000)
//         } else if (mins > 1) {
//             countdown(mins - 1)
//         }
//     }
//     tick()
// }
// countdown(gameTime)
