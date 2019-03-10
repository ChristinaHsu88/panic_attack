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
        if (hitItem['0'].obj.type !== 'door') {
          itemPopUp(hitItem)
        } else {
          renderNewScene(hitItem)
        }
      })
      .bind('HitOff', function() {
        Crafty('ItemPopUp').destroy()
      })
      .bind('KeyDown', function(e) { // to check score during development
        if (e.key == Crafty.keys.SHIFT) {
          console.log('Player stats: \n', playerMetrics)
        }
      })
}

function renderNewScene(hitItem) {
  const location = hitItem['0'].obj.location
  console.log(location) //living room
  if (location === "livingroom") {
    Crafty.enterScene('livingroom')
  } else if (location === 'outside') {
    Crafty.enterScene('outside')
  } else if (location === "bedroom") {
    Crafty.enterScene('bedroom') 
  }
}