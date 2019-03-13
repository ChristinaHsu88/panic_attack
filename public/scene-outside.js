/* outside scene */
Crafty.scene('outside', function() {
  currentLocation = 'outside';

  Crafty.e('PauseMsg');
  Crafty.e('PauseBox');

  Crafty.background(
    '#57342E url(assets/outside_map.png) no-repeat center right'
  );
  Crafty.sprite(32, 'assets/cat.png', { player: [0, 1] });
  Crafty.sprite(100, 'assets/parkbench.png', { bench: [0, 0] });
  /* walls */
  Crafty.e('2D, DOM, Color, Solid, WallLeft, Collision,')
    .attr({ x: 70, y: 0, h: 350, w: 5 })
    .css({ visibility: 'hidden' })
    .color();

  Crafty.e('2D, DOM, Color, Solid, WallTopLeft, Collision')
    .attr({ x: 87, y: 5, h: 5, w: 290 })
    .color('black');

  Crafty.e('2D, DOM, Color, Solid, WallTopRight, Collision')
    .attr({ x: 440, y: 5, h: 5, w: 300 })
    .color('black');

  Crafty.e('2D, DOM, Color, Solid, WallBottom, Collision')
    .attr({ x: 87, y: 300, h: 5, w: 600 })
    .color();

  Crafty.e('2D, DOM, Color,  Solid, WallRight, Collision')
    .attr({ x: 690, y: 0, h: 350, w: 5 })
    .color();
  makePlayer(400, 40);
  generateOutsideItems();
  createStressBar();
});
