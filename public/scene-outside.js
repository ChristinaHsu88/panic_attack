/* outside scene */
Crafty.scene('outside', function() {
    Crafty.background('#57342E url(assets/outside.png) no-repeat center right');
    Crafty.sprite(32, 'assets/cat.png', { player: [0, 1] })
    Crafty.sprite(100, 'assets/bench.png', { bench: [0, 0]})
    /* wall */
    Crafty.e('2D, DOM, Color, Solid, WallLeft, Collision,')
    .attr({
      x: 70,
      y: 0,
      h: 350,
      w: 5
    })
    .css({ visibility: 'hidden' })
    .color();
    
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
    .color();

    Crafty.e('2D, DOM, Color, Solid, WallBottomRight, Collision')
    .attr({
      x: 70,
      y: 300,
      h: 5,
      w: 300
    })
    .color('black');

    Crafty.e('2D, DOM, Color, WallBottomLeft, Solid, Collision')
    .attr({
      x: 450,
      y: 300,
      h: 5,
      w: 300
    })
    .color('black');
    makePlayer(400, 220)
    generateOutsideItems()
    createStressBar()
})
