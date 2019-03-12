// define interactable items
Crafty.c('Item', {
  init: function() {
    this.addComponent('2D, DOM, phone, weed, laundry, dog, treadmill, roommate, bench, tree')
    this.w = 30
    this.h = 30
  },
  place: function(x, y) {
    this.x = x
    this.y = y
    return this
  }
})

function generateBedroomItems() {
  Crafty.e('Item, phone')
    .place(95, 197)
    .attr({
      type: 'phone',
      optionsList: {
        option1: {
          type: 'interactable',
          title: 'CALL A GOOD FRIEND',
          scoreEffect: {
            primaryMetrics: { stress: -1 },
            platter: { connectingTime: 1 }
          }
        },
        option2: {
          type: 'interactable',
          title: 'BROWSE TWITTER',
          scoreEffect: {
            primaryMetrics: { stress: +1 },
            platter: { downTime: +1 }
          }
        },
        option3: {
          type: 'interactable',
          title: 'GO BACK'
        }
      }
    });

  Crafty.e('Item, weed')
    .place(650, 190)
    .attr({
      type: 'weed',
      optionsList: {
        option1: {
          type: 'interactable',
          title: 'SMOKE WEED',
          scoreEffect: {
            primaryMetrics: { stress: -1, energy: -1 },
            platter: { downTime: +1 }
          }
        },
        option2: {
          type: 'interactable',
          title: 'GO BACK'
        },
        option3: {
          type: 'interactable',
          title: 'INSTANT PANIC',
          scoreEffect: {
            primaryMetrics: { stress: 10 }
          }
        },
        option4: {
          type: 'interactable',
          title: 'REDUCE METRIC',
          scoreEffect: {
            platter: { downTime: -6 }
          }
        }
      }
    });

  Crafty.e('Item, laundry')
    .place(500, 200)
    .attr({
      type: 'laundry',
      optionsList: {
        option1: {
          type: 'interactable',
          title: 'TIDY ROOM',
          scoreEffect: {
            primaryMetrics: { stress: -1 },
            platter: { focusTime: +1 }
          }
        },
        option2: {
          type: 'interactable',
          title: 'SIT ON LAUNDRY AND NAP',
          scoreEffect: {
            primaryMetrics: { stress: -1 },
            platter: { sleepTime: +1 }
          }
        },
        option3: {
          type: 'interactable',
          title: 'GO BACK'
        }
      }
    });

  Crafty.e('Item')
    .place(400, 300)
    .attr({
      type: 'door',
      location: 'livingroom'
    });
}

/* items for living room only */
function generateLivingRoomItems() {
  Crafty.e('Item,')
    .place(400, 300)
    .attr({
      type: 'door',
      location: 'outside'
    });

  Crafty.e('Item')
    .place(100, 75)
    .attr({
      type: 'door',
      location: 'bedroom'
    });

  Crafty.e('Item, roommate')
  .place(530, 180)
  .attr({
      type: 'roommate',
      optionsList: {
        option1: {
          type: 'interactable',
          title: 'CHAT WITH FRIEND',
          scoreEffect: {}
        },
        option2: {
          type: 'interactable',
          title: 'WATCH TV'
        },
        option3: {
          type: 'interactable',
          title: 'GO BACK'
        }
      }
  });

  Crafty.e('Item, dog')
  .place(230, 130)
  .attr({
    type: 'dog',
    optionsList: {
      option1: {
        type: 'interactable',
        title: 'PLAY WITH DOG',
        scoreEffect: {}
      },
      option3: {
        type: 'interactable',
        title: 'GO BACK'
      }
    }
  });

  Crafty.e('Item, treadmill')
  .place(630, 80)
  .attr({
    type: 'treadmill',
    optionsList: {
      option1: {
        type: 'interactable',
        title: 'RUNNING',
        scoreEffect: {}
      },
      option3: {
        type: 'interactable',
        title: 'GO BACK',
        scoreEffect: {}
      }
    }
  });
}

/* a door for user to go back inside */
function generateOutsideItems() {
  Crafty.e('Item')
    .place(400, 3)
    .attr({
      type: 'door',
      location: 'livingroom'
    })

  Crafty.e('Item, bench')
  .place(150, 200)
  .attr({
    type: 'bench',
    optionsList: {
      option1: {
        type: 'interactable',
        title: 'SIT',
        scoreEffect: {}
      },
      option2: {
        type: 'interactable',
        title: 'DRAW',
        scoreEffect: {}
      },
      option3: {
        type: 'interactable',
        title: 'GO BACK'
      }
    }
  })
  Crafty.e('Item, tree')
  .place(430, 200)
  .attr({
    type: 'tree',
    optionsList: {
      option1: {
        type: 'interactable',
        title: 'WATCH TREES',
        scoreEffect: {}
      },
      option2: {
        type: 'interactable',
        title: 'GO BACK'
      }
    }
  });
}

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
        makePopUp(hitItem);
        Crafty('Player').freeze();
        this.destroy();
      }
    });
}
