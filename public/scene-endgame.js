Crafty.scene('endgame', function() {
  Crafty.background('white url(assets/end.png) no-repeat center center')  /* image for testing purpose */

  /* GAME OVER && message depending on the stress level */
  Crafty.e('2D, DOM, Canvas, Text, Mouse')
  .attr({ x: 20, y: 70 })
  .text(function() {
    console.log('Hello')
    console.log(playerMetrics.primaryMetrics.stress)
    if (playerMetrics.primaryMetrics.stress > 14) {
      return 'You gotta learn how to chill.'
    } else {
      return 'Time for some good sleep'
    }
  })
  .textColor('white')
  .textFont({ size: '50px', weight: 'bold'})
  .bind('KeyDown', function(e) {
    if (e.key == Crafty.keys.ENTER) {
      Crafty.enterScene('nightCats')
    }
  })
})

function loadEndgame(scene, duration) {
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