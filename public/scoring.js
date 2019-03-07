
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
setTimeout(timeScoreChanger, 30000, playerMetrics)

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
      if (metrics.platter[metric] < 1 && document.getElementById("timer").innerHTML > 0) {
        metrics.primaryMetrics.stress += metrics.primaryMetrics.stress
        console.log('STRESS UP')
        setTimeout(calculateStress, 2000, playerMetrics) // so long as any metric is low, stress will increase rapidly
      }
    }
  console.log('calculateStress', metrics)
  return metrics
}

function calculateEnergy(metrics) {
  // playTime +
  // sleepTime +/-
    // if > 8, energy down; if < 2 energy down
  // physicalTime +/-
}

function timeScoreChanger(metrics){ // TODO: should not run if game is paused -- read from DOM, then when unpausing the game, call this method from that event (same with calcStress method)
  const timeScoreLoss = -1
  metrics.primaryMetrics.energy += timeScoreLoss // energy -1 every 30s
  for (let metric in metrics.platter) {
    if (metric !== 'downTime') {
      metrics.platter[metric] += timeScoreLoss // all platter metrics -1 (except downTime)
    }
  }
  console.log('Time Score Changer: \n', metrics)
  if (document.getElementById("timer").innerHTML > 0) {
    setTimeout(timeScoreChanger, 30000, metrics) // run every 30s while game in play
  }
  calculateStress(metrics)
  return metrics
}


// methods needed:
  // disable available actions if energy too low
  // only some actions should affect stress directly?

/* Metrics:
    - primary:
      - stress
      - energy
    - background:
      - time in
      - down time
      - connecting time
        focusTime: 0,
        playTime: 0,
        connectingTime: 1,
        sleepTime: 0,
        physicalTime: 0

Day 1
  - all metrics = 6

- need little helper functions that affect the score dynamically throughout the game

1. time
2. actions
3. inaction
4. wildcard
5. interrelationship bw metrics

// what metric is being effected?

TIME:
unless the player is engaged in a thing, all metrics decrease (except stress, which goes up or down based on the status of the other metrics)
*/