// scene 2 - bedroom
Crafty.scene('bedroom', function() {
    Crafty.background('white url(assets/bedroom2.png) no-repeat center center');
    /* create a sprite using cat.png */
    Crafty.sprite(32, 'assets/cat.png', {
    player: [0, 1]
    })
    makePlayer()
    generateRoomItems()
    createStressBar()
    startingScore(playerMetrics) // calculate player metrics at start of game

    /* initialize stressbar function here. see relevant comment above */
    // Crafty.e('2D, DOM, StressBar')
    // .attr({x: 400, y: 50})
    // .addComponent(stressColor)
    // startingScore(playerMetrics)
})

/* loading scene function */
function load_scene(scene, duration) {
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

