let pause = false
let gameOver = false
let gameTime = 180

// called at start of game
function timer() {
  setInterval(tickTock, 250)
  document.getElementById("timer").innerHTML = gameTime

  const worldTimes = [160, 130, 100, 70, 40, 10].sort(() => 0.5 - Math.random()).slice(0, 2) // returns two nums randomly from array
  const scoreChangeTimes = [150, 120, 90, 60, 30]
  const eatPromptTimes = [145, 95, 45]

  function tickTock() {
    if (!gameOver) {
      if (!pause && gameTime > 0) {
        // count down time
        gameTime = gameTime - 1
        // update score every 30s
        scoreChangeTimes.includes(gameTime) ? timeScoreChanger(playerMetrics) : ''
        // trigger game prompts
        if (Crafty('OptionsBox').length === 0) {
          eatPromptTimes.includes(gameTime) ? promptEat() : ''
          worldTimes.includes(gameTime) ? promptWorldEvent() : ''
        }
        // update DOM
        document.getElementById("timer").innerHTML = gameTime
      }
      if (gameTime <= 0) {
        endGame(playerMetrics, false)
        timeScoreChanger(playerMetrics)
      }
    }
  }
}

// called by user interaction
function loseTime(){
  gameTime -= 10
}

function pauseTimerAndScoringAndTogglePause() {
  pause ? pause = false : pause = true
  const pauseBox = document.getElementsByClassName('PauseBox')[0]
  pause ? pauseBox.style.display = 'block' : pauseBox.style.display = 'none'
}

document.onkeydown = function (e) {
  if (e.code === 'Space') { // pause game and functionality
    Crafty.pause()
    pauseTimerAndScoringAndTogglePause()
  } else if (e.code === 'Enter') { // close boxes
    Crafty('BodyCheck, bodyCheckMessage').destroy()
    Crafty('TherapistCall, newSkillMessage').destroy()
  } else if (Crafty('OptionsBox').length === 0 && playerMetrics.previousDays.newSkill && (e.code === 'ShiftRight' || e.code === 'ShiftLeft')) {
    Crafty('BodyCheck, bodyCheckMessage').destroy()
    bodyCheck(playerMetrics.platter) // handled in prompts
  }
}

// called when timer runs out or when player has a panic attack
function endGame(metrics, panic) {
  gameOver = true
  gameTime = 180

  let timer = document.getElementById("timer")
  timer.style.display = 'none'
  timer.innerHTML = gameTime // is this nec?
  metrics.previousDays.daysPlayed += 1
  panic ? metrics.previousDays.panic = true : metrics.previousDays.panic = false
  saveUserData(metrics)
  showChart()
  loadEndgame('endgame', 0)
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
