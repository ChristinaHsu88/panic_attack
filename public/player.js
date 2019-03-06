// define and generate player
const player = Crafty.e('Player, 2D, DOM, Color, Fourway, Collision, Keyboard')
    .attr({
        x: 10,
        y: 10,
        w: 40,
        h: 40,
    })
    .color('red')
    .fourway(200)
    .checkHits('Item')
    .bind('HitOn', function(hitItem) {
        itemPopUp(hitItem)
    })
    .bind('HitOff', function() {
        Crafty('ItemPopUp').destroy()
    })
    .bind('KeyDown', function(e) { // to check score during development
        if (e.key == Crafty.keys.SHIFT) {
            console.log('Player stats (global):', playerMetrics.metrics)
        }
    })
