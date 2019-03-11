/* outside scene */
Crafty.scene('outside', function() {
    Crafty.background('#57342E url(assets/outside.png) no-repeat center right');
    Crafty.sprite(32, 'assets/cat.png', { player: [0, 1] })
    Crafty.sprite(100, 'assets/bench.png', { bench: [0, 0]})
    makePlayer(400, 220)
    generateOutsideItems()
    createStressBar()
    createWalls()
})
