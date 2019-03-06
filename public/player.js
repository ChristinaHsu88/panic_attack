// define and generate player
// Crafty.sprite(30, 'public/img/cat.png', {
//   cat1: [0, 1],
//   cat2: [1, 1],
//   cat3: [2, 1]
// });

// Crafty.e('2D, DOM, cat1').attr({x: 10, y: 10})
// ATTEMPTS TO RENDER CHARACTER
const player = Crafty.e('2D, DOM, Fourway, Color, Collision, Keyboard')
  .attr({
    x: 10,
    y: 10,
    w: 40,
    h: 40,
    metrics: {
      energy: 6,
      stress: 6,
      timeIn: 6,
      downTime: 6,
      focusTime: 6,
      playTime: 6,
      connectingTime: 6,
      sleepTime: 6,
      physicalTime: 6
    }
  })
  .color('red')
  .fourway(200)
  .checkHits('Item')
  .bind('HitOn', function(hitItem) {
    itemPopUp(hitItem);
  })
  .bind('HitOff', function() {
    Crafty('ItemPopUp').destroy();
  })
  .bind('KeyDown', function(e) {
    // to check score during development
    if (e.key == Crafty.keys.SHIFT) {
      console.log('Player stats:', this.metrics);
    }
  });

/* receive response object data from express server i.e. response.request.response*/
let playerData = axios.get('/data').then(function(response) {
  console.log('here is the data', response.request.response);
});
