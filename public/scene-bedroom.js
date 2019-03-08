// scene 2 - bedroom
Crafty.scene('bedroom', function() {
    Crafty.background('white url(assets/bedroom2.png) no-repeat center center');
    // TODO - change cat sprite for player
    Crafty.sprite(32, 'assets/cat.png', { player: [0, 1] })
    // generate all entities in this scene
    makePlayer()
    generateRoomItems()
    createStressBar()
})
