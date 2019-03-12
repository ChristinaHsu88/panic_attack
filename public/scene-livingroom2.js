/* living room scene */
Crafty.scene('livingroom2', function() {
    Crafty.background('#57342E url(assets/livingroom.png) no-repeat center right');
    Crafty.sprite(32, 'assets/cat.png', { player: [0, 1] })
    Crafty.sprite(32, 'assets/dog.png', { dog: [0, 0] })
    Crafty.sprite(32, 'assets/treadmill.png', { treadmill: [0, 0]})
    Crafty.sprite(32, 'assets/roommate.png', { roommate: [0, 0]})
    /* wall */
    /* keep this wall here for now as a reference for the side door */
    Crafty.e('2D, DOM, Color, Solid, WallLeft, Collision,')
    .attr({
      x: 120,
      y: 0,
      h: 350,
      w: 5
    })
    .css({ visibility: 'hidden' })
    .color('black')
    
    Crafty.e('2D, DOM, Color, Solid, WallTop, Collision')
    .attr({
      x: 87,
      y: 56,
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
      w: 320
    })
    .color()

    Crafty.e('2D, DOM, Color, WallBottomLeft, Solid, Collision')
    .attr({
      x: 450,
      y: 250,
      h: 5,
      w: 320
    })

    Crafty.e('2D, DOM, Solid, WallBottomLeftVertical, Collision').attr({
      x: 390,
      y: 250,
      h: 80,
      w: 5
    })
  
  
    Crafty.e('2D, DOM, Solid, WallBottomRightVertical, Collision').attr({
      x: 440,
      y: 250,
      h: 80,
      w: 5
    })  
    makePlayer(400, 220)
    generateLivingRoomItems()
    createStressBar()
})
