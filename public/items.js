Crafty.sprite(30, 'assets/cat.png', {
  cat1: [0, 1],
  cat2: [1, 1],
  cat3: [2, 1]
});
Crafty.e('2D, DOM, cat1').attr({ x: 250, y: 300 });
//   .color('blue');
//   .reel('CatWalking', 1000, [[0, 1], [1, 1], [2, 1]])
//   .animate('CatWalking', -1)
//   .tween({ alpha: 0.0, x: 280, y: 100 }, 4000);

// define interactable items
Crafty.c('Item', {
  init: function() {
    this.addComponent('2D, DOM, Color');
    this.w = 30;
    this.h = 30;
    this.energy = 7;
  },
  place: function(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
});

// generate interactable items
Crafty.e('Item')
  .place(150, 100)
  .color('black')
  .attr({
    type: 'phone',
    optionsList: {
      option1: {
        title: 'CALL A GOOD FRIEND',
        scoreEffect: {
          stress: -1,
          energy: 1,
          timeIn: 0,
          downTime: 0,
          focusTime: 0,
          playTime: 0,
          connectingTime: 1,
          sleepTime: 0,
          physicalTime: 0
        }
      },
      option2: {
        title: 'BROWSE TWITTER',
        scoreEffect: {}
      },
      option3: {
        title: 'GO BACK',
        scoreEffect: {}
      }
    }
  });

Crafty.e('Item')
  .place(250, 150)
  .color('green')
  .attr({
    type: 'weed',
    optionsList: {
      option1: {
        title: 'SMOKE WEED'
      },
      option2: {
        title: 'GO BACK'
      }
    }
  });

Crafty.e('Item')
  .place(300, 300)
  .color('orange')
  .attr({
    type: 'laundry',
    optionsList: {
      option1: {
        title: 'TIDY ROOM'
      },
      option2: {
        title: 'SIT ON LAUNDRY AND NAP'
      },
      option3: {
        title: 'GO BACK'
      }
    }
  });

function itemPopUp(hitItem) {
  Crafty.e('ItemPopUp, 2D, DOM, Color, Text')
    .color('grey')
    .attr({
      x: 300,
      y: 300,
      w: 100,
      h: 30
    })
    .text(`HIT ENTER TO SELECT THIS ${hitItem[0].obj.type}`)
    .bind('KeyDown', function(e) {
      if (e.key == Crafty.keys.ENTER) {
        console.log(hitItem[0].obj.type);
        makePopUp(hitItem);
        Crafty('Player').freeze();
        this.destroy();
      }
    });
}
