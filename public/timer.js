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
        if (!Crafty('OptionsBox')) { // disable prompt if options box is already there // this may have disabled this altogether...
          eatPromptTimes.includes(gameTime) ? promptEat() : ''
          worldTimes.includes(gameTime) ? promptWorldEvent() : ''
        }
        // update DOM
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
    // TODO display in game instead of in DOM
    document.getElementById("pause").innerHTML = 'GAME PAUSED'
  } else {
    document.getElementById("pause").innerHTML = ''
  }
}

document.onkeydown = function (e) {
  if (e.code === 'Space') {
    // pause game and functionality
    Crafty.pause()
    pauseTimerAndScoring()
  } else if (e.code === 'Enter') {
    // close boxes
    Crafty('BodyCheck, bodyCheckMessage').destroy()
    Crafty('TherapistCall, newSkillMessage').destroy()
  } else if (playerMetrics.previousDays.newSkill && (e.code === 'ShiftRight' || e.code === 'ShiftLeft')) { // TODO - add conditional to stop this from firing when an option box is displayed - bug fix strategy
    Crafty('BodyCheck, bodyCheckMessage').destroy()
    bodyCheck(playerMetrics.platter)
  }
}

// called when timer runs out or when player has a panic attack
function endGame(metrics, panic) {
  gameOver = true
  gameTime = 180 // reset time // TODO - BUG - not working properly

  let timer = document.getElementById("timer")
  timer.style.display = 'none'
  timer.innerHTML = gameTime
  metrics.previousDays.daysPlayed += 1
  console.log('Game is over?', gameOver)
  console.log('Your day is over. Your metrics are: \n', metrics.primaryMetrics, '\n', metrics.platter, '\n Days played:', metrics.previousDays.daysPlayed)
  let endingReason
  panic ? endingReason = 'had a panic attack' : endingReason = 'ran out of time'
  panic ? metrics.previousDays.panic = true : metrics.previousDays.panic = false
  console.log(`Your game ended because you ${endingReason}`)
  saveUserData(metrics)
  console.log('END OF GAME -- NO MORE CONSOLE MESSAGES SHOULD FIRE')
  showChart()
  loadEndgame('endgame', 0)// call a function that starts the endGame scene
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
