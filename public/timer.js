let pause = false
let gameOver = false
timer()

function timer() {
  let gameTime = 180
  setInterval(tickTock, 1000)

  function tickTock() {
    if (!gameOver) {
      if (!pause && gameTime > 0) {
        gameTime = gameTime - 1
        const scoreChangeTimes = [150, 120, 90, 60, 30, 0]
        if (scoreChangeTimes.includes(gameTime)) {
          timeScoreChanger(playerMetrics)
        }
        document.getElementById("timer").innerHTML = gameTime
      }
      if (gameTime === 0) {
        endGame(playerMetrics)
      }
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

// called when timer runs out or when player has a panic attack && when user click on the button, will toggle result
function endGame(metrics) {
  console.log('endGame fired -- nothing should be fired after this point');
  gameOver = true
  metrics.daysPlayed += 1
  console.log('Game is over?', gameOver)
  console.log('Your day is over. Your metrics are: \n', metrics.primaryMetrics, '\n', metrics.platter, '\n Days played:', metrics.daysPlayed)
    $(document).ready(function() {
      $("button").click(function () {
          $("canvas").toggle(
              data = [0, metrics.platter.sleepTime, metrics.platter.physicalTime, metrics.platter.downTime, metrics.platter.playTime, metrics.platter.focusTime, metrics.platter.connectingTime, metrics.platter.timeIn],
              renderChart(data)
          )
      })
    })
  axios.post('/data', { gameData: metrics })
    .then(res => console.log('Game data saved to DB'))
    .catch(err => console.log(err))
  console.log('END OF GAME -- NO MORE CONSOLE MESSAGES SHOULD FIRE');
}

// if game ends from panic attack, that should effect next day's game play
  // perhaps user will get a notice to do body checks to determine which platter metric needs attention
