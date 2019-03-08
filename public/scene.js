/* Loading the main scene  */
Crafty.scene('loading', function() {
    Crafty.background('white url(assets/loading.png) no-repeat center center')
    Crafty.e('2D, DOM, Text, Mouse')
    .attr({ x: 350, y: 200 })
    .text('hit enter')
    .textFont({ size: '40px', weight: 'bold' })
    .bind('KeyDown', function(e) {
      if (e.key == Crafty.keys.ENTER) {
        Crafty.enterScene('bedroom')
        }
    })
})

load_scene('loading', 0);

/* Loading bedroom scene including items and users */
Crafty.scene('bedroom', function() {
    Crafty.background('white url(assets/bedroom2.png) no-repeat center center');
    /* loading cat pic as player - is there a better way to organize files here? */
    Crafty.sprite(32, 'assets/cat.png', {
    /* changed to player from penny for testing */
    player: [0, 1]
    })
   
    Crafty.e('Player, 2D, DOM, Fourway, Collision, Keyboard, player')
    .attr({
        x: 10,
        y: 10,
        w: 40,
        h: 40,
    })
    .fourway(200)
    .checkHits('Item')
    .bind('HitOn', function(hitItem) {
        itemPopUp(hitItem)
    })
    .bind('HitOff', function() {
        Crafty('ItemPopUp').destroy()
    })
    .bind('KeyDown', function(e) { // to check score during development
        if (e.key == Crafty.keys.SHIFT) {
            console.log('Player stats (primary):', playerMetrics.primaryMetrics)
            console.log('Player stats (platter):', playerMetrics.platter)
        }
    })


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
                    primaryMetrics: { stress: -1 },
                    platter: { connectingTime: 1 }
                }
            },
            option2: {
                title: 'BROWSE TWITTER',
                scoreEffect: {
                    primaryMetrics: { stress: +1 },
                    platter: { downTime: +1 }
                }
            },
            option3: {
                title: 'GO BACK'
        }
    }
    })

    Crafty.e('Item')
    .place(250, 150)
    .color('green')
    .attr({
        type: 'weed',
        optionsList: {
            option1: {
                title: 'SMOKE WEED',
                scoreEffect: {
                    primaryMetrics: { stress: -1, energy: -1 },
                    platter: { downTime: +1 }
                }
            },
            option2: {
                title: 'GO BACK'
            },
            option3: {
                title: 'INSTANT PANIC',
                scoreEffect: {
                    primaryMetrics: { stress: 10 }
                }
            },
            option4: {
                title: 'REDUCE METRIC',
                scoreEffect: {
                    platter: { downTime: -6 }
                }
            }
        }
    })

    Crafty.e('Item')
    .place(300, 300)
    .color('orange')
    .attr({
        type: 'laundry',
        optionsList: {
            option1: {
                title: 'TIDY ROOM',
                scoreEffect: {
                    primaryMetrics: { stress: -1 },
                    platter: { focusTime: +1 }
                }
            },
            option2: {
                title: 'SIT ON LAUNDRY AND NAP',
                scoreEffect: {
                    primaryMetrics: { stress: -1 },
                    platter: { sleepTime: +1 }
                }
            },
            option3: {
                title: 'GO BACK'
            }
        }
    })
    
    Crafty.e('2D, DOM, StressBar')
    .attr({x: 370, y: 50})
    .addComponent(stressColor)
    startingScore(playerMetrics) 
})

/* loading scene function */
function load_scene(scene, duration) {
    Crafty.e('2D, DOM, Tween, Color')
    .attr({ alpha: 0.0, x: 0, y: 0, w: 800, h: 600 })
    .color('#000000')
    .tween({ alpha: 1.0 }, duration)
    .bind('TweenEnd', function() {
        Crafty.scene(scene);
        Crafty.e('2D, DOM, Tween, Color')
        .attr({ alpha: 1.0, x: 0, y: 0, w: 800, h: 600 })
        .color('#000000')
        .tween({ alpha: 0.0 }, duration);
    });
}
  
