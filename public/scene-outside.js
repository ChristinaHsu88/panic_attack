/* outside scene */
Crafty.scene('outside', function() {
  Crafty.background('#57342E url(assets/outside.png) no-repeat center right');
  Crafty.sprite(32, 'assets/cat.png', { player: [0, 1] });
  makePlayer(400, 250);
  createWalls();
  generateOutsideItems();
  createStressBar();
});
