Crafty.init(500, 350, document.getElementById('game'));

// LOAD ORDER
// items
// options
// player
// timer

// lets set up the scenes?
Crafty.scene('loading', function() {
  Crafty.background('white url(assets/loading.png) no-repeat center center');
  Crafty.e('2D, DOM, Text')
    .attr({ x: 350, y: 200 })
    .text('Welcome!')
    .textFont({ size: '40px', weight: 'bold' });
});

Crafty.scene('loading');
