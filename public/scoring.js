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
  metrics.platter.sleepTime += 6
  metrics.primaryMetrics.stress = 5
  metrics.primaryMetrics.energy = 5
  for (let metric in metrics.platter) {
    if (metrics.platter[metric] < 3) {
      metrics.platter[metric] = 2 // no metric should be 0 at game start
    } else if (metrics.platter[metric] > 9) {
      metrics.platter[metric] = 8 // no metric should be 10+ at game start // this may be redundant with correctAboveTenBelowZero
    }
  }
  calculateStress(metrics)
  updateStressBar(metrics.primaryMetrics.stress)
  if (metrics.previousDays.daysPlayed && !metrics.previousDays.newSkill) {
    setTimeout(promptTherapistCall, 2000)
  }
  return console.log('STARTING SCORE: \n', metrics)
}

// called after every metric changing method (except calculateEnergy)
  // interaction events // startingScore // self (recursive) // timeScoreChanger
function calculateStress(metrics) {
  if (!gameOver && !pause) {
    calculateEnergy(metrics)
    if (isPlatterImbalanced(metrics)) {
      metrics.primaryMetrics.stress += 1
    }
    if (areYouPanicking(metrics.primaryMetrics.stress)) {
      endGame(metrics, true)
      return
    }
    for (let metric in metrics.platter) {
      if (metrics.platter[metric] < 1) {
        metrics.primaryMetrics.stress += 1
        setTimeout(calculateStress, 2000, playerMetrics) // so long as any metric is low, stress will increase rapidly
        return // don't up stress PER metric, but only once (otherwise game is too hard)
      }
    }
    updateStressBar(metrics.primaryMetrics.stress)
    return
  }
  return
}

function areYouPanicking(stressLevel) {
  let panicking = false
  if (stressLevel >= 10) {
    updateStressBar(stressLevel)
    panicking = true
  }
  return panicking
}

// called by calcStress
function isPlatterImbalanced(metrics) {
  correctAboveTenBelowZero(metrics)
  let bigGap
  const platterArray = Object.values(metrics.platter).sort((a,b) => {return a-b})
  const biggestGapBetweenMetrics = platterArray[platterArray.length - 1] - platterArray[0]
  biggestGapBetweenMetrics > 5 ? bigGap = true : bigGap = false
  return bigGap
}

// called by isPlatterImbalanced
function correctAboveTenBelowZero(metrics) {
  for (let metric in metrics.platter) {
    if (metrics.platter[metric] > 10) {
      metrics.platter[metric] = 10
    } else if (metrics.platter[metric] < 0) {
      metrics.platter[metric] = 0
    }
  }
  for (let metric in metrics.primaryMetrics) {
    if (metrics.primaryMetrics[metric] > 10) {
      metrics.primaryMetrics[metric] = 10
    } else if (metrics.primaryMetrics[metric] < 0) {
      metrics.primaryMetrics[metric] = 0
     }
  }
  return metrics
}

// called by calcStress
function calculateEnergy(metrics) {
  if (metrics.platter.sleepTime > 8 || metrics.platter.sleepTime < 2) {
    metrics.primaryMetrics.energy -= 1
  }
  if (metrics.platter.physicalTime > 9) {
    metrics.primaryMetrics.energy -= 1
  }
}

// reduces all metrics (except downTime and stress)
// called by timer at 30s intervals
function timeScoreChanger(metrics) {
  metrics.primaryMetrics.energy -= 1
  for (let metric in metrics.platter) {
    if (metric !== 'downTime') {
      metrics.platter[metric] -= 1
    }
  }
  calculateStress(metrics)
  return metrics
}

// TODO - future feature
// not being called anywhere yet
function disableInteractions (metrics) {
  if (metrics.platter.physicalTime > 9) {
    // disable certain interactions
  }
}

