// scene 2 - bedroom
Crafty.scene('bedroom', function() {
    Crafty.background('#57342E url(assets/bedroom2.png) no-repeat center right')
    // TODO - change cat sprite for player
    Crafty.sprite(32, 'assets/cat.png', { player: [0, 1] })
    Crafty.sprite(32, 'assets/phone_2.png', { phone: [0, 0] })
    Crafty.sprite(32, 'assets/weed.png', { weed: [0, 0]})
    Crafty.sprite(32, 'assets/laundry.png', {laundry: [0]})
    /* wall */
    Crafty.e('2D, DOM, Color, Solid, WallLeft, Collision,')
    .attr({
      x: 87,
      y: 0,
      h: 350,
      w: 5
    })
    .css({ visibility: 'hidden' })
    .color()
    
    Crafty.e('2D, DOM, Color, Solid, WallTop, Collision')
    .attr({
      x: 87,
      y: 5,
      h: 5,
      w: 600
    })
    .color()

    Crafty.e('2D, DOM, Color,  Solid, WallRight, Collision')
    .attr({
      x: 690,
      y: 0,
      h: 350,
      w: 5
    })
    .color()

    Crafty.e('2D, DOM, Color, Solid, WallBottomRight, Collision')
    .attr({
      x: 70,
      y: 250,
      h: 5,
      w: 300
    })
    .color()

    Crafty.e('2D, DOM, Color, WallBottomLeft, Solid, Collision')
    .attr({
      x: 450,
      y: 250,
      h: 5,
      w: 300
    })
    .color()

    // generate all entities in this scene
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
