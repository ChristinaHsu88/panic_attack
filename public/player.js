// define and generate player
const player = Crafty.e('Player, 2D, DOM, Color, Fourway, Collision, Energy')
    .attr({
        x: 10,
        y: 10,
        w: 40,
        h: 40, 
        energy: 7
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
    .bind('Energy', function() {
        console.log(this.energy)
    })
