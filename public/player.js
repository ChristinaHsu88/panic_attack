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
})
// define and generate player
  // player entity will be destroyed and regenerated in each scene
function makePlayer (x, y) {
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
    .bind('KeyDown', function(e) { // to check score during development
      if (e.key === Crafty.keys.SHIFT) {
        console.log('Player stats: \n', playerMetrics)
      }
    })
}

/* new scene */
function renderNewScene(hitItem) {
  const location = hitItem['0'].obj.location
  console.log(hitItem)
  if (location === "livingroom") {
    Crafty.enterScene('livingroom')
  } else if (location === 'outside') {
    Crafty.enterScene('outside')
  } else if (location === "bedroom") {
    Crafty.enterScene('bedroom') 
  }
}
