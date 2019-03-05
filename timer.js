// borrowed from https://stackoverflow.com/questions/38539000/javascript-countdown-with-pause-resume

var pause = false; //is timer paused

countTimers();

function countTimers() {
  var gameTime = 180;
  var counter = setInterval(timer, 1000);

  function timer() {
    if (!pause) { //do something if not paused
      gameTime = gameTime - 1;
      if (gameTime < 0) {
        clearInterval(counter);
        return;
      }

      document.getElementById("timer").innerHTML = gameTime;
    }
  }
}

document.onkeydown = function (e) {
    if (e.code === 'Space') {
        pause ? pause = false : pause = true
    }
}

// document.getElementById('resume').addEventListener('click', function () {
//     pause = false;
// });

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
