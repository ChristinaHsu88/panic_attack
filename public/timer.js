let pause = false
let gameOver = false

function timer() {
  let gameTime = 180
  setInterval(tickTock, 500)
  document.getElementById("timer").innerHTML = gameTime

  const worldTimes = worldEventsTimes()
  const scoreChangeTimes = [150, 120, 90, 60, 30]
  const eatPromptTimes = [145, 95, 45]
  const napPromptTime = [85]

  function tickTock() {
    if (!gameOver) {
      if (!pause && gameTime > 0) {
        gameTime = gameTime - 1
        scoreChangeTimes.includes(gameTime) ? timeScoreChanger(playerMetrics) : ''
        // eatPromptTimes.includes(gameTime) ? promptEat() : ''
        // napPromptTime.includes(gameTime) ? promptNap() : ''
        // worldTimes.includes(gameTime) ? promptWorldEvent() : ''
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

// returns 2 times randomly from array
function worldEventsTimes(){
  const worldEvents = [160, 130, 100, 70, 40, 10]
  return worldEvents.sort(() => 0.5 - Math.random()).slice(0, 2)
}

document.onkeydown = function (e) { // TODO disable player
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
  gameOver = true
  metrics.daysPlayed += 1
  console.log('Game is over?', gameOver)
  console.log('Your day is over. Your metrics are: \n', metrics.primaryMetrics, '\n', metrics.platter, '\n Days played:', metrics.daysPlayed)
  let endingReason
  panic ? endingReason = 'had a panic attack' : endingReason = 'ran out of time'
  console.log(`Your game ended because you ${endingReason}`)
  saveUserData(metrics)
  console.log('END OF GAME -- NO MORE CONSOLE MESSAGES SHOULD FIRE')
  showChart()
  // call a function that starts the endGame scene
}

function showChart(){
  renderChart(playerMetrics)
  const chart = document.getElementById('myChart')
  chart.style.display = 'block'
}

function saveUserData (metrics) {
  axios.post('/data', { gameData: metrics })
    .then(res => console.log('data saved'))
    .catch(err => console.log(err))
}
// if game ends from panic attack, that should effect next day's game play
  // perhaps user will get a notice to do body checks to determine which platter metric needs attention

// bio cues
// world cues
