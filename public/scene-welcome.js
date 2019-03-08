// scene1 - outside of house
    // TODO - user types in player name and presses enter
        // query the DB according to name
            // if new name, create entry in DB
            // if name exists, pull entry from DB
        // if game has rolled over from previous round, user should not have to type in player name but simply hit enter to start next day
Crafty.scene('welcome', function() {
    Crafty.background('white url(assets/loading.png) no-repeat center center')
    Crafty.e('2D, DOM, Text, Mouse')
    .attr({ x: 350, y: 200 })
    .text('hit enter')
    .textFont({ size: '40px', weight: 'bold' })
    .bind('KeyDown', function(e) {
      if (e.key == Crafty.keys.ENTER) {
        Crafty.enterScene('bedroom')
        startingScore(playerMetrics) // calculate player metrics at start of game
        timer()
        }
    })
})

function loadWelcome(scene, duration) {
    Crafty.e('2D, DOM, Tween, Color')
    .attr({ alpha: 0.0, x: 0, y: 0, w: 800, h: 600 })
    .color('#000000')
    .tween({ alpha: 1.0 }, duration)
    .bind('TweenEnd', function() {
        Crafty.scene(scene);
        Crafty.e('2D, DOM, Tween, Color')
        .attr({ alpha: 1.0, x: 0, y: 0, w: 800, h: 600 })
        .color('#000000')
        .tween({ alpha: 0.0 }, duration);
    });
}

loadWelcome('welcome', 0);
