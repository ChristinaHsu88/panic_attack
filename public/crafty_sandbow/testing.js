Crafty.init(600, 350, document.getElementById('game'));
Crafty.sprite(30, 'assets/cat.png', {
  cat1: [0, 1],
  cat2: [1, 1],
  cat3: [2, 1]
});

Crafty.sprite(32, 'assets/animalscrbetween.png', {
  mouse1: [9, 1],
  mouse2: [10, 1],
  mouse3: [11, 1]
});

Crafty.scene('loading', function() {
  Crafty.background('white url(assets/loading.png) no-repeat center center');
  Crafty.e('2D, DOM, Text')
    .attr({ x: 350, y: 200 })
    .text('Welcome!')
    .textFont({ size: '40px', weight: 'bold' });
  Crafty.e('2D, DOM, SpriteAnimation, Tween, cat1')
    .attr({ x: 250, y: 300 })
    .reel('CatWalking', 1000, [[0, 1], [1, 1], [2, 1]])
    .animate('CatWalking', -1)
    .tween({ alpha: 0.0, x: 280, y: 100 }, 4000);
  // come back to this and smooth it out!
});

Crafty.scene('loading');

Crafty.scene('bedroom', function() {
  Crafty.background('white url(assets/bedroom2.png) no-repeat center center');
  Crafty.e('2D, DOM, SpriteAnimation, Tween, mouse1')
    .attr({ x: 100, y: 80 })
    .reel('LittleMouse', 1000, [[9, 1], [10, 1], [11, 1]])
    .animate('LittleMouse', -1)
    .tween({ x: -25 }, 5000, 'smoothStep')
    .tween({ y: 90 }, 5000, 'easeInQuad');
});

Crafty.scene('bedroom');
