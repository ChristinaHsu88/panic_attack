const playerMetrics = {
    stress: 0,
    energy: 0,
    timeIn: 0,
    downTime: 0,
    focusTime: 0,
    playTime: 0,
    connectingTime: 0,
    sleepTime: 0,
    physicalTime: 0
}

function dayOneScore(metrics){
  const baseScore = 6
  for (let metric in metrics) {
    metrics[metric] = baseScore
  }
  return metrics
}

function timeScoreChanger(metrics){
  // should not run if game is paused
  const timeScoreLoss = -1
  for (let metric in metrics) {
    if (metric !== 'stress' &&  metric !== 'downTime') {
      metrics[metric] += timeScoreLoss
    }
  }
  console.log('Time Score Changer: \n', metrics)
  if (document.getElementById("timer").innerHTML > 0) {
    setTimeout(timeScoreChanger, 30000, metrics) // run every 30 while game in play
  }
  return metrics
}

console.log('Day One Score: \n', dayOneScore(playerMetrics))
setTimeout(timeScoreChanger, 30000, (dayOneScore(playerMetrics)))

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