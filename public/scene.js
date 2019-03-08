/* Loading the main scene  */
Crafty.scene('loading', function() {
    Crafty.background('white url(assets/loading.png) no-repeat center center')
    Crafty.e('2D, DOM, Text, Mouse')
    .attr({ x: 350, y: 200 })
    .text('hit enter')
    .textFont({ size: '40px', weight: 'bold' })
    .bind('KeyDown', function(e) {
      if (e.key == Crafty.keys.ENTER) {
        Crafty.enterScene('bedroom')
        }
    })
})

load_scene('loading', 0);

/* Loading bedroom scene */
Crafty.scene('bedroom', function() {
    Crafty.background('white url(assets/bedroom2.png) no-repeat center center');
    // define and generate player
    Crafty.sprite(32, 'assets/cat.png', {
    penny: [0, 1]
    })
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
  
