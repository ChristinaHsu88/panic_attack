// scene 2 - bedroom
Crafty.scene('bedroom', function() {
    Crafty.background('#57342E url(assets/bedroom2.png) no-repeat center right');
    // TODO - change cat sprite for player
    Crafty.sprite(32, 'assets/cat.png', { player: [0, 1] })
    // generate all entities in this scene
    console.log('how much game time left', gameTime)
    if (gameTime > 178) {
        makePlayer(340, 50)
    } else {
        makePlayer(400, 250)
    }
    generateRoomItems()
    createStressBar()    
    // likely have to Crafty.enterScene('endGame') here, but wrap in a function so that it's triggered by endGame()
    // it seems like .enterScene needs to be called within the scene that is active, therefore all scenes will need endGame
})
