Crafty.init(600, 350, document.getElementById('game'));

// LOAD ORDER
  // scoring
  // items
  // options
  // player
  // stress-bar
  // timer
// items
// options
// player
// timer

/******  sam's changes below ******/



// animating and making player mobile//
Crafty.e('2D, DOM, cat1').attr({x: 10, y: 10})
    // ATTEMPTS TO RENDER CHARACTER

// const player = Crafty.e(
//   '2D, DOM, Fourway, Collision, SpriteAnimation, Keyboard, penny, Player'
// )
//   .attr({
//     x: 10,
//     y: 10,
//     metrics: {
//       energy: 6,
//       stress: 6,
//       timeIn: 6,
//       downTime: 6,
//       focusTime: 6,
//       playTime: 6,
//       connectingTime: 6,
//       sleepTime: 6,
//       physicalTime: 6
//   }
// })
// // .color('red')
// .fourway(200)
// .checkHits('Item')
// // .reel('PennyWalking', 1000, [[0, 2], [1, 2], [2, 2]])
// // .animate('PennyWalking', -1)
// .bind('HitOn', function(hitItem) {
//   itemPopUp(hitItem);
// })
// .bind('HitOff', function() {
//   Crafty('ItemPopUp').destroy();
// })
// .bind('KeyDown', function(e) {
//   // to check score during development
//   if (e.key == Crafty.keys.SHIFT) {
//     console.log('Player stats:', this.metrics);
//   }
// });

//     /* receive response object data from express server i.e. response.request.response*/
// let playerData = axios.get('/data').then(function(response) {
//   console.log('here is the data', response.request.response);
// });
// Crafty.c('Item', {
//   init: function() {
//     this.addComponent('2D, DOM, Color');
//     this.w = 30;
//     this.h = 30;
//     this.energy = 7;
//   },
//   place: function(x, y) {
//     this.x = x;
//     this.y = y;
//     return this;
//   }
// });

// // generate interactable items
// Crafty.e('Item')
//   .place(150, 100)
//   .color('black')
//   .attr({
//     type: 'phone',
//     optionsList: {
//       option1: {
//         title: 'CALL A GOOD FRIEND',
//         scoreEffect: {
//           stress: -1,
//           energy: 1,
//           timeIn: 0,
//           downTime: 0,
//           focusTime: 0,
//           playTime: 0,
//           connectingTime: 1,
//           sleepTime: 0,
//           physicalTime: 0
//         }
//       },
//       option2: {
//         title: 'BROWSE TWITTER',
//         scoreEffect: {}
//       },
//       option3: {
//         title: 'GO BACK',
//         scoreEffect: {}
//       }
//     }
//   });

// Crafty.e('Item')
//   .place(560, 200)
//   .color('green')
//   .attr({
//     type: 'weed',
//     optionsList: {
//       option1: {
//         title: 'SMOKE WEED'
//       },
//       option2: {
//         title: 'GO BACK'
//       }
//     }
//   });

// Crafty.e('Item')
//   .place(300, 300)
//   .color('orange')
//   .attr({
//     type: 'laundry',
//     optionsList: {
//       option1: {
//         title: 'TIDY ROOM'
//       },
//       option2: {
//         title: 'SIT ON LAUNDRY AND NAP'
//       },
//       option3: {
//         title: 'GO BACK'
//       }
//     }
//   });

// function itemPopUp(hitItem) {
//   Crafty.e('ItemPopUp, 2D, DOM, Color, Text')
//     .color('grey')
//     .attr({
//       x: 300,
//       y: 300,
//       w: 100,
//       h: 30
//     })
//     .text(`HIT ENTER TO SELECT THIS ${hitItem[0].obj.type}`)
//     .bind('KeyDown', function(e) {
//       if (e.key == Crafty.keys.ENTER) {
//         console.log(hitItem[0].obj.type)
//         makePopUp(hitItem)
//         Crafty('Player').freeze()
//         this.destroy()
//         }
//       });
//     }
//   });
//});
