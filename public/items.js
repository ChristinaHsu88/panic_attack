// define interactable items
Crafty.c('Item', {
  init: function() {
    this.addComponent(
      '2D, DOM, phone, weed, laundry, dog, treadmill, roommate, bench, tree'
    );
    this.w = 30;
    this.h = 30;
  },
  place: function(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
});

function generateBedroomItems() {
  Crafty.e('Item, phone')
    .place(100, 197)
    .attr({
      itemType: 'phone',
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
    .place(600, 190)
    .attr({
      itemType: 'weed',
      optionsList: {
        option1: {
          type: 'interactable',
          title: 'SMOKE WEED',
          scoreEffect: {
            primaryMetrics: { stress: -1, energy: -1, satiation: -1 },
            platter: { downTime: +1 }
          }
        },
        option2: {
          type: 'interactable',
          title: 'GO BACK'
        },
        option3: {
          type: 'interactable',
          title: 'INSTANT PANIC / DEV ONLY',
          scoreEffect: {
            primaryMetrics: { stress: 10 }
          }
        },
        option4: {
          type: 'interactable',
          title: 'REDUCE METRIC / DEV ONLY',
          scoreEffect: {
            platter: { downTime: -6 }
          }
        }
      }
    });

  Crafty.e('Item, laundry')
    .place(500, 200)
    .attr({
      itemType: 'laundry',
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
      itemType: 'door',
      location: 'livingroom'
    });
}

/* items for living room only */
function generateLivingRoomItems() {
  Crafty.e('Item,')
    .place(400, 300)
    .attr({
      itemType: 'door',
      location: 'outside'
    });

  Crafty.e('Item')
    .place(100, 75)
    .attr({
      itemType: 'door',
      location: 'bedroom'
    });

  Crafty.e('Item, roommate')
    .place(530, 180)
    .attr({
      itemType: 'roommate',
      optionsList: {
        option1: {
          type: 'interactable',
          title: 'CHAT WITH FRIEND',
          scoreEffect: {
            primaryMetrics: { stress: -1 },
            platter: { connectingTime: +1 }
          }
        },
        option2: {
          type: 'interactable',
          title: 'WATCH TV',
          scoreEffect: {
            primaryMetrics: { stress: -1 },
            platter: { downTime: +1 }
          }
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
      itemType: 'dog',
      optionsList: {
        option1: {
          type: 'interactable',
          title: 'PLAY WITH DOG',
          scoreEffect: {
            primaryMetrics: { stress: -1, energy: +1 },
            platter: { playTime: +1 }
          }
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
      itemType: 'treadmill',
      optionsList: {
        option1: {
          type: 'interactable',
          title: 'GET A WORK OUT',
          scoreEffect: {
            primaryMetrics: { stress: -1, satiation: -1 },
            platter: { physicalTime: +1 }
          }
        },
        option3: {
          type: 'interactable',
          title: 'GO BACK'
        }
      }
    });
}

function generateOutsideItems() {
  Crafty.e('Item')
    .place(400, 3)
    .attr({
      itemType: 'door',
      location: 'livingroom',
      w: 3,
      h: 3
    });

  Crafty.e('Item, bench')
    .place(150, 200)
    .attr({
      itemType: 'bench',
      optionsList: {
        option1: {
          type: 'interactable',
          title: 'SIT BACK AND CHILL FOR A BIT',
          scoreEffect: {
            primaryMetrics: { stress: -1 },
            platter: { downTime: +1 }
          }
        },
        option2: {
          type: 'interactable',
          title: 'DRAW THE SCENERY',
          scoreEffect: {
            primaryMetrics: { stress: -1 },
            platter: { focusTime: +1 }
          }
        },
        option3: {
          type: 'interactable',
          title: 'GO BACK'
        }
      }
    });
  Crafty.e('Item, tree')
    .place(430, 200)
    .attr({
      itemType: 'tree',
      optionsList: {
        option1: {
          type: 'interactable',
          title: 'ADMIRE THE BEAUTIFUL TREE',
          scoreEffect: {
            primaryMetrics: { stress: -1 },
            platter: { connectingTime: +1 }
          }
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
    .color('yellow')
    .attr({
      x: 140,
      y: 280,
      w: 153,
      h: 20
    })
    .text('HIT ENTER TO SELECT') // THIS ${hitItem[0].obj.itemType}`)
    .textFont({ size: '20px' })
    .css({ 'font-family': 'VT323, monospace', padding: '6px' })
    .bind('KeyDown', function(e) {
      if (e.key == Crafty.keys.ENTER) {
        makePopUp(hitItem, 'selectedItem');
        Crafty('Player').freeze();
        this.destroy();
      }
    });
}
