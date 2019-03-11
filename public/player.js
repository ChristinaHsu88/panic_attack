Crafty.c('Player', {
  init: function() {
    this.addComponent('2D, DOM, Fourway, Collision, Keyboard, player');
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
  Crafty.e('Player, 2D, DOM, Fourway, Collision, Keyboard, player')
    .place(x, y)
    .fourway(200)
    .checkHits('Item')
    .bind('HitOn', function(hitItem) {
      itemPopUp(hitItem);
      renderNewScene(hitItem);
    })
    .bind('HitOff', function() {
      Crafty('ItemPopUp').destroy();
    })
    .bind('KeyDown', function(e) {
      // to check score during development
      if (e.key === Crafty.keys.SHIFT) {
        console.log('Player stats: \n', playerMetrics);
      }
    })
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

/* new scene */
function renderNewScene(hitItem) {
<<<<<<< HEAD
  const location = hitItem['0'].obj.location;
  console.log(hitItem);
  if (location === 'livingroom') {
    Crafty.enterScene('livingroom');
  } else if (location === 'outside') {
    Crafty.enterScene('outside');
  } else if (location === 'bedroom') {
    Crafty.enterScene('bedroom');
=======
  const location = hitItem['0'].obj.location
  if (location === "livingroom") {
    Crafty.enterScene(location)
  } else if (location === 'outside') {
    Crafty.enterScene(location)
  } else if (location === "bedroom") {
    Crafty.enterScene(location)
>>>>>>> c3002b2f50950c46df13c6a6276a097a351ef4d9
  }
}
