// universal variable that persists throughout gameplay until browser is refreshed
let playerMetrics = {
  name: '',
  previousDays: {
    daysPlayed: 0, // increment up at end of day
    panic: false, // this will likely be OBSOLETE
    newSkill: false // false triggers therapist call on daysPlayed > 0; answering call toggles to true
  },
  primaryMetrics: {
    stress: 5, // affected directly actions (+ and -, sometimes with same action); indirectly by all
    energy: 5, // affected directly by playTime, game time and eating; indirectly by sleepTime, physicalTime
  },
  platter: { // affected by player actions; set by startingScore at start of game/round
    timeIn: 6,
    downTime: 6,
    focusTime: 6,
    playTime: 6,
    connectingTime: 6,
    sleepTime: 0, // set by startingScore
    physicalTime: 6
  }
} // save to DB at end of game

// sets score for day 1 and day 1+ games
function startingScore(metrics){
  // console.log('startingScore fired')
  metrics.platter.sleepTime += 6
  metrics.primaryMetrics.stress = 5
  metrics.primaryMetrics.energy = 5
  for (let metric in metrics.platter) {
    if (metrics.platter[metric] < 3) {
      metrics.platter[metric] = 2 // no metric should be 0 at game start
    } else if (metrics.platter[metric] > 9) {
      metrics.platter[metric] = 8 // no metric should be 10+ at game start
    }
  }
  calculateStress(metrics)
  updateStressBar(metrics.primaryMetrics.stress)
  console.log('starting score:', playerMetrics)
  if (metrics.previousDays.daysPlayed && newSkill) {
    setTimeout(promptTherapistCall, 2000)
  }
  return
}

// called after every metric changing method (except calculateEnergy)
  // interaction events // startingScore // self (recursive) // timeScoreChanger
function calculateStress(metrics) {
  if (!gameOver && !pause) {
    // console.log('calcStress fired')
    calculateEnergy(metrics)
    if (isPlatterImbalanced(metrics)) {
      metrics.primaryMetrics.stress += 1
      // console.log('imbalanced platter has increased stress')
    }
    if (areYouPanicking(metrics.primaryMetrics.stress)) {
      endGame(metrics, true)
      return
    }
    for (let metric in metrics.platter) {
      if (metrics.platter[metric] < 1) {
        metrics.primaryMetrics.stress += 1
        // console.log('STRESS UP')
        // console.log(`Current stress level is ${metrics.primaryMetrics.stress}`)
        setTimeout(calculateStress, 2000, playerMetrics) // so long as any metric is low, stress will increase rapidly
        return // don't up stress PER metric, but only once (otherwise game is too hard)
      }
    }
    updateStressBar(metrics.primaryMetrics.stress)
    return
  }
  return
  // return console.log('calcStress says: GAME IS OVER')
}

function areYouPanicking(stressLevel) {
  let panicking = false
  if (stressLevel >= 10) {
    updateStressBar(stressLevel)
    console.log('YOU ARE HAVING A PANIC ATTACK')
    // CALL IN THE CATS
    panicking = true
  }
  return panicking
}

// called by calcStress
function isPlatterImbalanced(metrics) {
  // console.log('isPlatterImbalanced fired');
  let bigGap
  const platterArray = Object.values(metrics.platter).sort((a,b) => {return a-b})
  const biggestGapBetweenMetrics = platterArray[platterArray.length - 1] - platterArray[0]
  console.log('platter gap:', biggestGapBetweenMetrics)
  biggestGapBetweenMetrics > 5 ? bigGap = true : bigGap = false
  return bigGap
}

// called by calcStress
function calculateEnergy(metrics) {
  // console.log('calcEnergy fired')
  if (metrics.platter.sleepTime > 8 || metrics.platter.sleepTime < 2) {
    metrics.primaryMetrics.energy -= 1
    // console.log('ENERGY DOWN')
  }
  if (metrics.platter.physicalTime > 9) {
    metrics.primaryMetrics.energy -= 1
  }
}

// reduces all metrics (except downTime and stress)
// called by timer at 30s intervals
function timeScoreChanger(metrics) {
  // console.log('timeScoreChanger fired')
  metrics.primaryMetrics.energy -= 1
  for (let metric in metrics.platter) {
    if (metric !== 'downTime') {
      metrics.platter[metric] -= 1
    }
  }
  // console.log('Time Score Changer: \n', metrics)
  calculateStress(metrics)
  return metrics
}

// TODO
// not being called anywhere yet
function disableInteractions (metrics) {
  if (metrics.platter.physicalTime > 9) {
    // disable certain interactions
  }
}

// body check
