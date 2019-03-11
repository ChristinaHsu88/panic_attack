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
    'Player, 2D, DOM, Fourway, SpriteAnimation, Collision, Keyboard, PlayerTowards, '
  )
    .place(x, y)
    .fourway(200)
    .checkHits('Item')
    // animates Sprite
    .reel('PlayerTowards', 900, 3, 0, 3)
    .reel('PlayerLeft', 900, 3, 1, 3)
    .reel('PlayerRight', 900, 3, 2, 3)
    .reel('PlayerAway', 900, 3, 3, 3)
    .animate('PlayerTowards', -1)
    .animate('PlayerLeft', -1)
    .animate('PlayerRight', -1)
    .animate('PlayerAway', -1)
    // Creates conditions on which way sprite moves
    .bind('KeyDown', function(e) {
      if (e.key === Crafty.keys.DOWN_ARROW) {
        this.animate('PlayerTowards', -1);
      } else if (e.key === Crafty.keys.UP_ARROW) {
        this.animate('PlayerAway', -1);
      } else if (e.key === Crafty.keys.LEFT_ARROW) {
        this.animate('PlayerLeft', -1);
      } else if (e.key === Crafty.keys.RIGHT_ARROW) {
        this.animate('PlayerRight', -1);
      } else this.pauseAnimation();
    })
    // .animate('WalkAway', -1)
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

// /* new scene */
function renderNewScene(hitItem) {
  const location = hitItem['0'].obj.location;
  if (location) {
    Crafty.enterScene(location)
  }
}
