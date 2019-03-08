// define and generate player
Crafty.sprite(56, 'assets/dude.png', {
  WalkAway: [0, 0]
});

const player = Crafty.e(
  'Player, 2D, DOM, Fourway, Collision, Keyboard, WalkAway'
)
  .attr({
    x: 10,
    y: 10
    // w: 40,
    // h: 40
  })
  // .color('red')
  .fourway(200)
  .checkHits('Item')
  .bind('HitOn', function(hitItem) {
    itemPopUp(hitItem);
  })
  .bind('HitOff', function() {
    Crafty('ItemPopUp').destroy();
  })
  .bind('KeyDown', function(e) {
    // to check score during development
    if (e.key == Crafty.keys.SHIFT) {
      console.log('Player stats (primary):', playerMetrics.primaryMetrics);
      console.log('Player stats (platter):', playerMetrics.platter);
    }
  });

// sprite animation
// .reel('animation name', length of animation, x axis on sprite map, y axis on sprite map, frame count, ant of frames in sprite sheet row)

// .pauseAnimation() --- pauses the currently playing animation
// .animate(animation name, number loop count)

//Crafty.sprite(32, 'image url path', {
//PlayerSprite: [0,0]

//});

//Crafty.e("2D, DOM, SpriteAnimation, PlayerSprite")
//.reel('PlayerRunning', 20, 0, 0, 3)
//.animate('playerRunning, -1);
//create crafty component
// Crafty.c('Penny', {
//init: function() {
//set up the animation
// .animate('WalkAway', 100, 0, 0, 8)
// .animate('WalkLeft', 100, 0, 1, 8)
// .animate('WalkTowards', 100, 0, 2, 8)
// .animate('WalkRight', 100, 0, 3, 8)

// give it direction conditionals

//.bind('DirectionChange',
// function(direction) .......

// )};

//});
//});
