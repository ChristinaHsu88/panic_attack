// universal variable that persists throughout gameplay until browser is refreshed
const playerMetrics = {
  daysPlayed : 0, // increment up at end of day
  primaryMetrics: {
    stress: 0, // affected directly actions (+ and -, sometimes with same action); indirectly by all
    energy: 0, // affected directly by time and eating; indirectly by playTime, sleepTime, physicalTime
  },
  platter: { // affected by player actions; set by startingScore at start of game/round
    timeIn: 0,
    downTime: 0,
    focusTime: 0,
    playTime: 0,
    connectingTime: 0,
    sleepTime: 0,
    physicalTime: 0
  }
} // save to DB at end of game

function startingScore(metrics){
  console.log('startingScore fired')
  if (metrics.daysPlayed === 0) { // TODO else if algorithms
    for (let metric in metrics.primaryMetrics) {
      metrics.primaryMetrics[metric] = 5
    }
    for (let metric in metrics.platter) {
      metrics.platter[metric] = 6
    }
  } else {
    metrics.platter.sleepTime += 6
    // stress and energy may need to be manipulated
  }
  calculateStress(metrics)
  updateStressBar(metrics.primaryMetrics.stress)
  return metrics
}

// called after every metric changing method (except calculateEnergy)
function calculateStress(metrics) {
  if (!gameOver) {
    console.log('calcStress fired')
    calculateEnergy(metrics)
    if (isPlatterImbalanced(metrics)) {
      metrics.primaryMetrics.stress += 2
      console.log('imbalanced platter has increased stress')
    }
    if (areYouPanicking(metrics.primaryMetrics.stress)) {
      endGame(metrics)
      return
    }
    for (let metric in metrics.platter) {
      if (metrics.platter[metric] < 1) {
        metrics.primaryMetrics.stress += 1
        console.log('STRESS UP')
        console.log(`Current stress level is ${metrics.primaryMetrics.stress}`)
        setTimeout(calculateStress, 2000, playerMetrics) // so long as any metric is low, stress will increase rapidly
      }
    }
    updateStressBar(metrics.primaryMetrics.stress)
    return metrics
  }
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

// called by calculateStress
function isPlatterImbalanced(metrics) {
  console.log('isPlatterImbalanced fired');
  let bigGap
  const platterArray = Object.values(metrics.platter).sort((a,b) => {return a-b})
  const biggestGapBetweenMetrics = platterArray[platterArray.length - 1] - platterArray[0]
  console.log('platter gap:', biggestGapBetweenMetrics)
  biggestGapBetweenMetrics > 5 ? bigGap = true : bigGap = false
  return bigGap
}

// called by calcStress
function calculateEnergy(metrics) {
  console.log('calcEnergy fired')
  if (metrics.platter.sleepTime > 8 || metrics.platter.sleepTime < 2) {
    metrics.primaryMetrics.energy -= 1
    console.log('ENERGY DOWN')
  }
  if (metrics.platter.physicalTime > 9) {
    metrics.primaryMetrics.energy -= 1
  }
}

// reduces all metrics (except downTime and stress)
// called by timer at 30s intervals
function timeScoreChanger(metrics) {
  console.log('timeScoreChanger fired')
  metrics.primaryMetrics.energy -= 1
  for (let metric in metrics.platter) {
    if (metric !== 'downTime') {
      metrics.platter[metric] -= 1
    }
  }
  console.log('Time Score Changer: \n', metrics)
  calculateStress(metrics)
  return metrics
}

// not being called anywhere yet
function disableInteractions (metrics) {
  if (metrics.platter.physicalTime > 9) {
    // disable certain interactions
  }
}

// body check
// don't let anything go above 10
