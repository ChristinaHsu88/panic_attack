Crafty.init(500, 350, document.getElementById('game'));

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

// LOAD ORDER
  // items
  // options
  // player
  // timer
  // scoring