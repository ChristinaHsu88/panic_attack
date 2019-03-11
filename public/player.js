Crafty.c('Player', {
  init: function() {
    this.addComponent('2D, DOM, Fourway, Collision, Keyboard, player')
    this.w = 40
    this.h = 40
  },
  place: function(x, y) {
    this.x = x
    this.y = y
    return this
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
      itemPopUp(hitItem)
      renderNewScene(hitItem)
    })
    .bind('HitOff', function() {
      Crafty('ItemPopUp').destroy()
    })
    .bind('KeyDown', function(e) {
      // to check score during development
      if (e.key === Crafty.keys.SHIFT) {
        bodyCheck(playerMetrics.platter)
        console.log('Player stats: \n', playerMetrics)
      }
    })
    .bind('Move', function(evt) {
      var hitDatas, hitData
      if ((hitDatas = this.hit('Solid'))) {
        hitData = hitDatas[0]
        if (hitData.type === 'SAT') {
          this.x -= hitData.overlap * hitData.nx
          this.y -= hitData.overlap * hitData.ny
        } else {
          this.x = evt._x
          this.y = evt._y
        }
      }
    });
}

// problems:
  // the newSkill will be destroyed after every scene change...
  // the therapist prompt occurs more than once; should only occur once
    // if player accepts call, then they get tip about the skill
      // the skill is hard wired
      // the therapist will call every day until the call is answered, then they won't call again; the skill tip will persist
  // panic attack will still occur when game is paused
  // player can still move when game is paused

/* new scene */
function renderNewScene(hitItem) {
  const location = hitItem['0'].obj.location
  if (location) {
    Crafty.enterScene(location)
  } 
}
