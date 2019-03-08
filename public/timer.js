let pause = false
let gameOver = false

function timer() {
  let gameTime = 180
  setInterval(tickTock, 1000)
  document.getElementById("timer").innerHTML = gameTime

  function tickTock() {
    if (!gameOver) {
      if (!pause && gameTime > 0) {
        gameTime = gameTime - 1
        const scoreChangeTimes = [150, 120, 90, 60, 30]
        scoreChangeTimes.includes(gameTime) ? timeScoreChanger(playerMetrics) : ''
        document.getElementById("timer").innerHTML = gameTime
      }
      if (gameTime === 0) {
        console.log('GAME TIME IS 0')
        endGame(playerMetrics, false)
        timeScoreChanger(playerMetrics)
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

// called when timer runs out or when player has a panic attack
function endGame(metrics, panic) {
  console.log('endGame fired -- nothing should be fired after this point');
  gameOver = true
  metrics.daysPlayed += 1
  console.log('Game is over?', gameOver)
  console.log('Your day is over. Your metrics are: \n', metrics.primaryMetrics, '\n', metrics.platter, '\n Days played:', metrics.daysPlayed)
  let endingReason
  panic ? endingReason = 'had a panic attack' : endingReason = 'ran out of time'
  console.log(`Your game ended because you ${endingReason}`)
  axios.post('/data', { gameData: metrics })
    .then(res => console.log('Game data saved to DB'))
    .catch(err => console.log(err))
  console.log('END OF GAME -- NO MORE CONSOLE MESSAGES SHOULD FIRE');
  showChart()
}

function showChart(){
  const data = [0, playerMetrics.platter.sleepTime, playerMetrics.platter.physicalTime, playerMetrics.platter.downTime, playerMetrics.platter.playTime, playerMetrics.platter.focusTime, playerMetrics.platter.connectingTime, playerMetrics.platter.timeIn]
  renderChart(data)
  const chart = document.getElementById('myChart')
  chart.style.display = 'block'
}

// if game ends from panic attack, that should effect next day's game play
  // perhaps user will get a notice to do body checks to determine which platter metric needs attention
