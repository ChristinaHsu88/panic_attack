// scene 2 - bedroom
Crafty.scene('bedroom', function() {
    Crafty.background('white url(assets/bedroom2.png) no-repeat center center');
    /* create a sprite using cat.png */
    Crafty.sprite(32, 'assets/cat.png', {
    player: [0, 1]
    })
    makePlayer()
    generateRoomItems()

    /* initialize phone item. Not yet figure out a way to initialize this item in item.js and call it here */
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

    /* initialize second item. see comment above */
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

    /* initialize third item. see comment above */
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

    /* initialize stressbar function here. see relevant comment above */
    Crafty.e('2D, DOM, StressBar')
    .attr({x: 400, y: 50})
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

