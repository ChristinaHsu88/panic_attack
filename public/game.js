Crafty.init(600, 350, document.getElementById('game'));

// LOAD ORDER
// items
// options
// player
// timer

// Scene loader
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

load_scene('loading', 1000);

Crafty.scene('loading', function() {
  Crafty.background('white url(assets/loading.png) no-repeat center center');
  Crafty.e('2D, DOM, Text, Key')
    .attr({ x: 350, y: 200 })
    .text('hit enter!')
    .textFont({ size: '40px', weight: 'bold' })
    .bind('KeyDown', function(e) {
      if (e.key == Crafty.keys.ENTER) {
        Crafty.enterScene('bedroom');
      }
    });

  // bedroom scene
  Crafty.scene('bedroom', function() {
    Crafty.background('white url(assets/bedroom2.png) no-repeat center center');
  });
});
// Crafty.scene('bedroom');
// lets set up the scenes?
// Crafty.scene('loading', function() {
//this sets the 'loading' scene
// });
// this calls the scene and renders it

//how do i transition between scenes in craftyjs?

// Crafty.scene('bedroom');
