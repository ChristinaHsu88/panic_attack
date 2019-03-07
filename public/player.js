// define and generate player
Crafty.sprite(32, 'assets/cat.png', {
  penny: [0, 1]
});
/// animating and making player mobile//

// Crafty.e('2D, DOM, cat1').attr({x: 10, y: 10})
// ATTEMPTS TO RENDER CHARACTER

const player = Crafty.e(
  '2D, DOM, Fourway, Collision, SpriteAnimation, Keyboard, penny'
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
  // .reel('PennyWalking', 1000, [[0, 2], [1, 2], [2, 2]])
  // .animate('PennyWalking', -1)
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

// Crafty.c('Hero', {
//   init: function() {
//     //setup animations
//     this.requires('SpriteAnimation, Collision')
//       .animate('walk_right', [[0, 0], [1, 0], [2, 0]])
//       .animate('walk_away', [[1, 0], [1, 1], [2, 1]])
//       .animate('walk_down', [[2, 0], [1, 2], [2, 2]])
//       .animate('walk_left', [[3, 0], [1, 3], [2, 3]])
//       //change direction when a direction change event is received
//       .bind('NewDirection', function(direction) {
//         if (direction.x < 0) {
//           if (!this.isPlaying('walk_left'))
//             this.stop().animate('walk_left', 10, -1);
//         }
//         if (direction.x > 0) {
//           if (!this.isPlaying('walk_right'))
//             this.stop().animate('walk_right', 10, -1);
//         }
//         if (direction.y < 0) {
//           if (!this.isPlaying('walk_up'))
//             this.stop().animate('walk_up', 10, -1);
//         }
//         if (direction.y > 0) {
//           if (!this.isPlaying('walk_down'))
//             this.stop().animate('walk_down', 10, -1);
//         }
//         if (!direction.x && !direction.y) {
//           this.stop();
//         }
//       })
//       // A rudimentary way to prevent the user from passing solid areas
//       .bind('Moved', function(from) {
//         if (this.hit('solid')) {
//           this.attr({ x: from.x, y: from.y });
//         }
//       });
//     return this;
//   }
// });

// Crafty.c('RightControls', {
//   init: function() {
//     this.requires('Multiway');
//   },

//   rightControls: function(speed) {
//     this.multiway(speed, {
//       UP_ARROW: -90,
//       DOWN_ARROW: 90,
//       RIGHT_ARROW: 0,
//       LEFT_ARROW: 180
//     });
//     return this;
//   }
// });
