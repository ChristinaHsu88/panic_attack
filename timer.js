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
