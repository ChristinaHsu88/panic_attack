
// universal variable that persists throughout gameplay until browser is refreshed
const playerMetrics = {
        daysPlayed : 0, // increment up at end of day
        primaryMetrics: {
          stress: 0, // affected directly actions (+ and -, sometimes with same action); indirectly by all
          energy: 0, // affected directly by time and eating; indirectly by playTime, sleepTime, physicalTime
        },
        platter: {
          timeIn: 0,
          downTime: 0,
          focusTime: 0,
          playTime: 0,
          connectingTime: 0,
          sleepTime: 0,
          physicalTime: 0
        }
    } // save to DB at end of game

startingScore(playerMetrics) // calculate player metrics at start of game

function startingScore(metrics){
  let baseScore;
  if (metrics.daysPlayed === 0) { // TODO else if algorithms
    baseScore = 6
  }
  for (let metric in metrics.primaryMetrics) {
    metrics.primaryMetrics[metric] = baseScore
  }
  for (let metric in metrics.platter) {
    metrics.platter[metric] = baseScore
  }
  calculateStress(metrics)
  return metrics
}

// called after every metric changing method (except calculateEnergy)
function calculateStress(metrics) {
  for (let metric in metrics.platter) {
    if (metrics.platter[metric] < 1 && !gameOver) {
      metrics.primaryMetrics.stress += 1
      console.log('STRESS UP')
      console.log(`Current stress level is ${metrics.primaryMetrics.stress}`)
      if (metrics.primaryMetrics.stress === 10) {
        console.log('YOU ARE HAVING A PANIC ATTACK')
        // CALL IN THE CATS!
        gameOver = true
      }
      setTimeout(calculateStress, 2000, playerMetrics) // so long as any metric is low, stress will increase rapidly
    }
    // if gap between two metrics > 5, stress up
  }
  return metrics
}

// called after every metric changing method
function calculateEnergy(metrics) {
  if (metrics.platter.sleepTime > 8 || metrics.platter.sleepTime < 2) {
    metrics.primaryMetrics.energy -= 1
    console.log('ENERGY DOWN')
  }
  if (metrics.platter.physicalTime > 9) {
    metrics.primaryMetrics.energy -= 1
  }
}

// reduces all metrics (except downTime and energy)
function timeScoreChanger(metrics) { // method called by timer every 30s
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