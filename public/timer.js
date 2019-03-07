let pause = false
let gameOver = false
timer()

function timer() {
  let gameTime = 180
  setInterval(tickTock, 1000)

  function tickTock() {
    if (!pause && gameTime > 0) {
      gameTime = gameTime - 1
      const scoreChangeTimes = [150, 120, 90, 60, 30, 0]
      if (scoreChangeTimes.includes(gameTime)) {
        timeScoreChanger(playerMetrics)
      }
      document.getElementById("timer").innerHTML = gameTime
    }
    if (gameTime === 0) {
      gameOver = true
    }
  }
}

document.onkeydown = function (e) {
  if (e.code === 'Space') {
    pause ? pause = false : pause = true
    if (pause) {
      document.getElementById("pause").innerHTML = 'GAME PAUSED'
    } else {
      document.getElementById("pause").innerHTML = ''
    }
  }
}

// playerMetrics to be sent to db at end of game/timer 0
