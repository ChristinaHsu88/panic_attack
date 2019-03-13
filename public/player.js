let wasInBedroom = true /* testing */
let currentLocation = '' // must be global

Crafty.c('Player', {
  init: function() {
    this.addComponent('2D, DOM, Fourway, Collision, Keyboard, SpriteAnimation');
    this.w = 40;
    this.h = 40;
  },
  place: function(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
});
// define and generate player
// player entity will be destroyed and regenerated in each scene
function makePlayer(x, y) {
  Crafty.e(
    'Player, 2D, DOM, Fourway, SpriteAnimation, Collision, Keyboard, PlayerTowards'
  )
    .place(x, y)
    .fourway(200)
    .checkHits('Item')
    // animates Sprite
    .pauseAnimation()
    // Creates conditions on which way sprite moves
    .bind('KeyDown', function(e) {
      this.reel('PlayerTowards', 700, 3, 0, 2)
      this.reel('PlayerLeft', 700, 3, 1, 2)
      this.reel('PlayerRight', 700, 3, 2, 2)
      this.reel('PlayerAway', 700, 3, 3, 2)
      this.animate('PlayerLeft', -1)
      this.animate('PlayerRight', -1)
      this.animate('PlayerAway', -1)
      this.animate('PlayerTowards', -1)
      if (e.key === Crafty.keys.DOWN_ARROW) {
        this.animate('PlayerTowards', -1)
      } else if (e.key === Crafty.keys.UP_ARROW) {
        this.animate('PlayerAway', -1);
      } else if (e.key === Crafty.keys.LEFT_ARROW) {
        this.animate('PlayerLeft', -1);
      } else if (e.key === Crafty.keys.RIGHT_ARROW) {
        this.animate('PlayerRight', -1);
      } else this.pauseAnimation();
    })
    // .animate('WalkAway', -1) TODO - remove this comment?
    .bind('HitOn', function(hitItem) {
      itemPopUp(hitItem);
      renderNewScene(hitItem);
    })
    .bind('HitOff', function() {
      Crafty('ItemPopUp').destroy();
    })
    .bind('KeyDown', function(e) {
      if (e.key === Crafty.keys.T) {
        console.log('Player stats: \n', playerMetrics) // to check score during development
      }
    })
    // Creates boundaries of where Sprite can and can not go (aka creates walls)
    .bind('Move', function(evt) {
      var hitDatas, hitData;
      if ((hitDatas = this.hit('Solid'))) {
        hitData = hitDatas[0];
        if (hitData.type === 'SAT') {
          this.x -= hitData.overlap * hitData.nx;
          this.y -= hitData.overlap * hitData.ny;
        } else {
          this.x = evt._x;
          this.y = evt._y;
        }
      }
    });
}

// TODO - refactor
// render new scenes when player moves through doors; sets player location accordingly
function renderNewScene(hitItem) {
  const location = hitItem['0'].obj.location
  currentLocation = location
  if (location === 'livingroom' && wasInBedroom) {
    Crafty.enterScene(location)
  }
  if (location === 'outside') {
    Crafty.enterScene(location)
    wasInBedroom = false
  }
  if (location === 'livingroom' && !wasInBedroom) {
    Crafty.enterScene('livingroom2')
  }
  if (location === 'bedroom') {
    Crafty.enterScene('bedroom')
    wasInBedroom = true
  }
}