Crafty.init(600, 350, document.getElementById('game'));

// LOAD ORDER
// items
// options
// player
// timer

// lets set up the scenes?
Crafty.scene('loading', function() {
  //this sets the 'loading' scene
  Crafty.background('white url(assets/loading.png) no-repeat center center');
  Crafty.e('2D, DOM, Text')
    .attr({ x: 350, y: 200 })
    .text('Welcome!')
    .textFont({ size: '40px', weight: 'bold' });
});
// this calls the scene and renders it
Crafty.scene('loading');

//how do i transition between scenes in craftyjs?

// bedroom scene
Crafty.scene('bedroom', function() {
  Crafty.background('white url(assets/bedroom2.png) no-repeat center center');
});

Crafty.scene('bedroom');
