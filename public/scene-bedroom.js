// scene 2 - bedroom
Crafty.scene('bedroom', function() {
  Crafty.background('white url(assets/bedroom2.png) no-repeat center center');
  // TODO - change cat sprite for player
  Crafty.sprite(33, 'assets/dude.png', {
    walkTowards: [3, 0],
    walkLeft: [3, 1],
    walkRight: [3, 2],
    walkAway: [3, 3]
  });

  // generate all entities in this scene
  makePlayer();
  generateRoomItems();
  createStressBar();
});
