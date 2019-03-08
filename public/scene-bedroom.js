// scene 2 - bedroom
Crafty.scene('bedroom', function() {
  Crafty.background('white url(assets/bedroom2.png) no-repeat center center');
  // TODO - change cat sprite for player
  Crafty.sprite(32, 'assets/dude.png', {
    walk1: [3, 0],
    walk2: [4, 0],
    walk3: [5, 0]
    // walk4: [3, 3],
    // walk5: [4, 3],
    // walk6: [5, 3],
    // walk7: [6, 3],
    // walk8: [7, 3],
    // walk9: [8, 3]
  });

  // generate all entities in this scene
  makePlayer();
  generateRoomItems();
  createStressBar();
});
