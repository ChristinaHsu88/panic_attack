// define and generate player
  // player entity will be destroyed and regenerated in each scene
function makePlayer (argument) {
  Crafty.e('Player, 2D, DOM, Fourway, Collision, Keyboard, player')
    .attr({
      x: 10,
      y: 10,
      w: 40,
      h: 40,
    })
    .fourway(200)
    .checkHits('Item')
    .bind('HitOn', function(hitItem) {
      itemPopUp(hitItem)
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

// problems:
  // the newSkill will be destroyed after every scene change...
  // the therapist prompt occurs more than once; should only occur once
  // panic attack will still occur when game is paused
  // player can still move when game is paused
