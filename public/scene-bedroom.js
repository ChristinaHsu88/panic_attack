// scene 2 - bedroom
Crafty.scene('bedroom', function() {
Crafty.background('#57342E url(assets/bedroom2.png) no-repeat center right');
Crafty.sprite(30, 'assets/phone_2.png', { phone: [0, 0] });
Crafty.sprite(30, 'assets/weed.png', { weed: [0, 0] });
Crafty.sprite(30, 'assets/laundry.png', { laundry: [0] });
  // TODO - change cat sprite for player
  Crafty.sprite(32, 'assets/dude.png', {
    PlayerTowards: [3, 0],
    PlayerLeft: [3, 1],
    PlayerRight: [3, 2],
    PlayerAway: [3, 3]
  })
  // generate all entities in this scene
  //WALLS:
  Crafty.e('2D, DOM, Color, Solid, WallLeft, Collision,').attr({
    x: 87,
    y: 0,
    h: 350,
    w: 5
  })
  
  Crafty.e('2D, DOM, Solid, WallTop, Collision, Color').attr({
    x: 87,
    y: 55,
    h: 5,
    w: 600
  })
  
  Crafty.e('2D, DOM, Solid, WallRight, Collision').attr({
    x: 690,
    y: 0,
    h: 350,
    w: 5
  })

  Crafty.e('2D, DOM, Solid, WallBottomLeft, Collision, Color').attr({
    x: 70,
    y: 250,
    h: 5,
    w: 300
  })

  Crafty.e('2D, DOM, Solid, WallBottomLeftVertical, Collision').attr({
    x: 370,
    y: 250,
    h: 80,
    w: 5
  })

  Crafty.e('2D, DOM, WallBottomRight, Solid, Collision').attr({
    x: 450,
    y: 250,
    h: 5,
    w: 300
  })

  Crafty.e('2D, DOM, Solid, WallBottomRightVertical, Collision').attr({
    x: 440,
    y: 250,
    h: 80,
    w: 5
  })

  //WALLS
  console.log('how much game time left', gameTime);
  if (gameTime > 178) {
    makePlayer(340, 50);
  } else {
    makePlayer(400, 250);
  }
  generateRoomItems();
  createStressBar();
  const timer = document.getElementById('timer')
  timer.style.display = 'block'
  // likely have to Crafty.enterScene('endGame') here, but wrap in a function so that it's triggered by endGame()
  // it seems like .enterScene needs to be called within the scene that is active, therefore all scenes will need endGame
});
