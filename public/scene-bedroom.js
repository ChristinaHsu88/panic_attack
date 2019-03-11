// scene 2 - bedroom
Crafty.scene('bedroom', function() {
  Crafty.background('#57342E url(assets/bedroom2.png) no-repeat center right');
  // TODO - change cat sprite for player
<<<<<<< HEAD
  Crafty.sprite(32, 'assets/cat.png', { player: [0, 1] });
  Crafty.sprite(32, 'assets/phone_2.png', { phone: [0, 0] });
  Crafty.sprite(32, 'assets/weed.png', { weed: [0, 0] });
  Crafty.sprite(32, 'assets/laundry.png', { laundry: [0] });
  /* wall */
  Crafty.e('2D, DOM, Color, Solid, WallLeft, Collision,')
    .attr({
      x: 87,
      y: 0,
      h: 350,
      w: 5
    })
    .css({ visibility: 'hidden' })
    .color();

  Crafty.e('2D, DOM, Color, Solid, WallTop, Collision')
    .attr({
      x: 87,
      y: 50,
      h: 5,
      w: 600
    })
    .color();

  Crafty.e('2D, DOM, Color,  Solid, WallRight, Collision')
    .attr({
      x: 690,
      y: 0,
      h: 350,
      w: 5
    })
    .color();

  Crafty.e('2D, DOM, Color, Solid, WallBottomRight, Collision')
    .attr({
      x: 70,
      y: 250,
      h: 5,
      w: 300
    })
    .color();

  Crafty.e('2D, DOM, Color, WallBottomLeft, Solid, Collision')
    .attr({
      x: 450,
      y: 250,
      h: 5,
      w: 300
    })
    .color();

  // generate all entities in this scene
=======
  Crafty.sprite(32, 'assets/dude.png', {
    PlayerTowards: [3, 0],
    PlayerLeft: [3, 1],
    PlayerRight: [3, 2],
    PlayerAway: [3, 3]
  });
  // generate all entities in this scene
  //WALLS:
  Crafty.e('2D, DOM, Color, Solid, WallLeft, Collision,').attr({
    x: 87,
    y: 0,
    h: 350,
    w: 5
  });
  Crafty.e('2D, DOM, Solid, WallTop, Collision').attr({
    x: 87,
    y: 5,
    h: 5,
    w: 350
  });
  Crafty.e('2D, DOM, Solid, WallRight, Collision').attr({
    x: 690,
    y: 0,
    h: 350,
    w: 5
  });

  Crafty.e('2D, DOM, Solid, WallBottomRight, Collision').attr({
    x: 70,
    y: 250,
    h: 5,
    w: 300
  });

  Crafty.e('2D, DOM, WallBottomLeft, Solid, Collision').attr({
    x: 450,
    y: 250,
    h: 5,
    w: 300
  });

  //WALLS
  console.log('how much game time left', gameTime);
>>>>>>> e110847a139fc5e5128f515deb74db621944b0b9
  if (gameTime > 178) {
    makePlayer(340, 50);
  } else {
    makePlayer(400, 250);
  }
  generateRoomItems();
  createStressBar();
  // likely have to Crafty.enterScene('endGame') here, but wrap in a function so that it's triggered by endGame()
  // it seems like .enterScene needs to be called within the scene that is active, therefore all scenes will need endGame
});
<<<<<<< HEAD
=======
Crafty.background('#57342E url(assets/bedroom2.png) no-repeat center right');
//     // TODO - change cat sprite for player
Crafty.sprite(100, 'assets/phone_2.png', { phone: [0, 0] });
Crafty.sprite(100, 'assets/weed.png', { weed: [0, 0] });
Crafty.sprite(100, 'assets/laundry.png', { laundry: [0] });
// generate all entities in this scene
if (gameTime > 178) {
  makePlayer(340, 50);
} else {
  makePlayer(400, 250);
}
generateRoomItems();
createStressBar();
// likely have to Crafty.enterScene('endGame') here, but wrap in a function so that it's triggered by endGame()
// it seems like .enterScene needs to be called within the scene that is active, therefore all scenes will need endGame
>>>>>>> e110847a139fc5e5128f515deb74db621944b0b9
