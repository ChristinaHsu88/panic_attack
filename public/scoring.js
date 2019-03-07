
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

function calculateStress(metrics) { // to be run after every metric changing method
  for (let metric in metrics.platter) {
    if (metrics.platter[metric] < 1 && !gameOver) {
      metrics.primaryMetrics.stress += 1
      console.log('STRESS UP')
      console.log(`Current stress level is ${metrics.primaryMetrics.stress}`)
      if (metrics.primaryMetrics.stress === 10) {
        console.log('YOU ARE HAVING A PANIC ATTACK')
      }
      setTimeout(calculateStress, 2000, playerMetrics) // so long as any metric is low, stress will increase rapidly
    }
    // if gap between two metrics > 5, stress up
  }
  return metrics
}

function calculateEnergy(metrics) {
  if (metrics.platter.sleepTime > 8 || metrics.platter.sleepTime < 2) {
    metrics.primaryMetrics.energy -= 1
    console.log('ENERGY DOWN')
  }
  // physicalTime + && playTime +
    // if energy < 8, physicalTime +
    // these must be checked and increased when the metrics increase (on event)
}

// I should make a master calculate function that runs all the others

function timeScoreChanger(metrics){ // TODO: should not run if game is paused -- read from DOM, then when unpausing the game, call this method from that event (same with calcStress method)
  const timeScoreLoss = -1
  metrics.primaryMetrics.energy += timeScoreLoss // energy -1 every 30s
  for (let metric in metrics.platter) {
    if (metric !== 'downTime') {
      metrics.platter[metric] += timeScoreLoss // all platter metrics -1 (except downTime)
    }
  }
  console.log('Time Score Changer: \n', metrics)
  calculateStress(metrics)
  return metrics
}

// methods needed:
  // disable available actions if energy too low
