// define and generate player
const player = Crafty.e('Player, 2D, DOM, Color, Fourway, Collision, Keyboard')
    .attr({
        x: 10,
        y: 10,
        w: 40,
        h: 40,
        energy: 6,
        stress: 6,
        timeIn: 6,
        downTime: 6,
        focusTime: 6,
        playTime: 6,
        connectingTime: 6,
        sleepTime: 6,
        physicalTime: 6
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
            console.log('Player energy:', this.energy)
            console.log('Player stress:', this.stress)
        }
    })

