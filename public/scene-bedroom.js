// scene 2 - bedroom
Crafty.scene('bedroom', function() {
  Crafty.background('white url(assets/bedroom2.png) no-repeat center center');
  // TODO - change cat sprite for player
  //   Crafty.sprite(50, 'assets/dude.png', {
  //     player: [0, 0]
  //   });
  const player = Crafty.e(
    'Player, 2D, DOM, Fourway, Collision, Keyboard, WalkAway'
  );
  // generate all entities in this scene
  makePlayer();
  generateRoomItems();
  createStressBar();
});
