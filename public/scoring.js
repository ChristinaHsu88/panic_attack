
// universal variable that persists throughout gameplay until server is restarted
// to be sent/saved to DB at the end of the game
const playerMetrics = {
        daysPlayed : 0,
        metrics: {
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
    }

startingScore(playerMetrics)

function startingScore(metrics){
  let baseScore;
  if (metrics.daysPlayed === 0) {
  // need to write algorithms for future days, keeping in mind the other metrics will also affect
  // when game ends, the daysPlayed will need to be updated
  // this way, if a user returns to play a game and pulls their playerMetrics from the db, the algorithm I need to write will determine their stress and energy levels
    baseScore = 6
  }
  for (let metric in metrics.metrics) {
    metrics.metrics[metric] = baseScore
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

// console.log('Day One Score: \n', startingScore(playerMetrics.metrics))
setTimeout(timeScoreChanger, 30000, playerMetrics.metrics)

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