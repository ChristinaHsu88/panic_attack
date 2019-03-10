Crafty.scene('livingroom', function() {
    Crafty.background('#57342E url(assets/livingroom.png) no-repeat center right');
    // TODO - change cat sprite for player
    Crafty.sprite(32, 'assets/cat.png', { player: [0, 1] })
    // generate all entities in this scene
    // makePlayer()
    // generateRoomItems()
    // createStressBar()
    // likely have to Crafty.enterScene('endGame') here, but wrap in a function so that it's triggered by endGame()
    // it seems like .enterScene needs to be called within the scene that is active, therefore all scenes will need endGame
})