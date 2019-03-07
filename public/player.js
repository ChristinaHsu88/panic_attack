// define and generate player
Crafty.sprite(57, 'assets/penny.png', {
  penny: [0, 0],
  cat2: [1, 2],
  cat3: [2, 2]
});
/// animating and making player mobile//

// Crafty.e('2D, DOM, cat1').attr({x: 10, y: 10})
// ATTEMPTS TO RENDER CHARACTER
const player = Crafty.e(
  '2D, DOM, Fourway, Collision, penny, SpriteAnimation, Keyboard'
)
  .attr({
    x: 10,
    y: 10,
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
  // .color('red')
  .fourway(200)
  .checkHits('Item')
  .reel('PennyWalking', 1000, [[2, 0], [2, 1], [2, 2]])
  .animate('PennyWalking', -1)
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
