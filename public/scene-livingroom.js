/* living room scene */
Crafty.scene('livingroom', function() {
  Crafty.background(
    '#57342E url(assets/livingroom.png) no-repeat center right'
  );
  Crafty.sprite(32, 'assets/cat.png', { player: [0, 1] });
  makePlayer(130, 50);
  generateLivingRoomItems();
  createStressBar();
});
