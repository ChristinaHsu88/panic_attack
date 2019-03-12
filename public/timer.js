let pause = false
let gameOver = false
let gameTime = 180

// called at start of game
function timer() {
  setInterval(tickTock, 500)
  document.getElementById("timer").innerHTML = gameTime

  const worldTimes = worldEventsTimes()
  const scoreChangeTimes = [150, 120, 90, 60, 30]
  const eatPromptTimes = [145, 95, 45]
  const napPromptTime = [85] // DUE FOR REFACTOR TODO

  function tickTock() {
    if (!gameOver) {
      if (!pause && gameTime > 0) {
        // count down time
        gameTime = gameTime - 1
        // update score every 30s
        scoreChangeTimes.includes(gameTime) ? timeScoreChanger(playerMetrics) : ''
        // trigger game prompts
        if (!Crafty('OptionsBox')) { // TODO - this is disabling these prompts regardless of existence of options box
          eatPromptTimes.includes(gameTime) ? promptEat() : ''
          worldTimes.includes(gameTime) ? promptWorldEvent() : ''
        }
        // update DOM
        document.getElementById("timer").innerHTML = gameTime
      }
      if (gameTime === 0) {
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

// returns 2 times randomly from array
function worldEventsTimes(){
  const worldEvents = [160, 130, 100, 70, 40, 10]
  return worldEvents.sort(() => 0.5 - Math.random()).slice(0, 2)
}

function pauseTimerAndScoring() {
  pause ? pause = false : pause = true
  if (pause) {
    pauseScene(currentLocation)
  } else {
    Crafty.enterScene(currentLocation)
  }
}

/* determine which pause view to use */
function pauseScene(location) {
  if (location === 'bedroom') {
    Crafty.enterScene('bedroom_pause')
  } else if (location === 'livingroom') {
    Crafty.enterScene('livingroom_pause')
  } else if (location === 'livingroom2') {
    Crafty.enterScene('livingroom_pause')
  } else if (location === 'outside') {
    Crafty.enterScene('outside_pause')
  }
}

document.onkeydown = function (e) {
  if (e.code === 'Space') { // pause game and functionality
    Crafty.pause()
    pauseTimerAndScoring()
  } else if (e.code === 'Enter') { // close boxes
    Crafty('BodyCheck, bodyCheckMessage').destroy()
    Crafty('TherapistCall, newSkillMessage').destroy()
  } else if (playerMetrics.previousDays.newSkill && (e.code === 'ShiftRight' || e.code === 'ShiftLeft')) { // TODO - add conditional to stop this from firing when an option box is displayed - bug fix strategy
    Crafty('BodyCheck, bodyCheckMessage').destroy()
    bodyCheck(playerMetrics.platter) // handled in prompts
  }
}

// called when timer runs out or when player has a panic attack
function endGame(metrics, panic) {
  gameOver = true
  gameTime = 180 // reset time // TODO - BUG - not working properly

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
