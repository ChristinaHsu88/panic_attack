/* outside scene */
Crafty.scene('outside', function() {
<<<<<<< HEAD
  Crafty.background('#57342E url(assets/outside.png) no-repeat center right');
  Crafty.sprite(32, 'assets/cat.png', { player: [0, 1] });
  makePlayer(400, 250);
  createWalls();
  generateOutsideItems();
  createStressBar();
});
=======
    Crafty.background('#57342E url(assets/outside.png) no-repeat center right');
    Crafty.sprite(32, 'assets/cat.png', { player: [0, 1] })
    Crafty.sprite(100, 'assets/bench.png', { bench: [0, 0]})
    makePlayer(400, 220)
    generateOutsideItems()
    createStressBar()
})
>>>>>>> c3002b2f50950c46df13c6a6276a097a351ef4d9
