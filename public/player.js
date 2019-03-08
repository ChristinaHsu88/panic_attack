// define and generate player

function makePlayer() {
  Crafty.e(
    'Player, 2D, DOM, SpriteAnimation, Fourway, Collision, Keyboard, walk1'
  )
    .attr({
      x: 10,
      y: 10
      // w: 40,
      // h: 40
    })
    .reel('WalkAway', 5000, [
      'walk1',
      'walk2',
      'walk3',
      'walk4',
      'walk5',
      'walk6',
      'walk7',
      'walk8',
      'walk9'
    ])
    .animate('WalkAway', -1)
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

  //create crafty component
  // Crafty.c('Penny', {
  // init: function() {
  // .animate('WalkAway', 100, 0, 0, 8)
  // .animate('WalkLeft', 100, 0, 1, 8)
  // .animate('WalkTowards', 100, 0, 2, 8)
  // .animate('WalkRight', 100, 0, 3, 8);

  // // give it direction conditionals

  // // .bind('DirectionChange',
  // // function(direction) .......

  // // )};

  // // });
  // });
}
