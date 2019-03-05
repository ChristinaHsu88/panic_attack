// borrowed from https://stackoverflow.com/questions/38539000/javascript-countdown-with-pause-resume

var pause = false; //is timer paused

timer();

function timer() {
  var gameTime = 180;
  var counter = setInterval(tickTock, 1000);

  function tickTock() {
    if (!pause) { //do something if not paused
      gameTime = gameTime - 1;
      document.getElementById("timer").innerHTML = gameTime;
    }
  }
}

document.onkeydown = function (e) {
    if (e.code === 'Space') {
        pause ? pause = false : pause = true
    }
}
