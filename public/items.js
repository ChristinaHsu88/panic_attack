// define interactable items
Crafty.c('Item', {
    init: function() {
        this.addComponent('2D, DOM, Color')
        this.w = 30
        this.h = 30
    },
    place: function(x, y) {
        this.x = x
        this.y = y
        return this
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
                    primaryMetrics: { stress: 10}
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

function itemPopUp(hitItem) {
    Crafty.e('ItemPopUp, 2D, DOM, Color, Text')
        .color('grey')
        .attr({
            x: 300,
            y: 300,
            w: 100,
            h: 30,
        })
        .text(`HIT ENTER TO SELECT THIS ${hitItem[0].obj.type}`)
        .bind('KeyDown', function(e) {
            if (e.key == Crafty.keys.ENTER) {
                console.log(hitItem[0].obj.type);
                makePopUp(hitItem)
                Crafty('Player').freeze()
                this.destroy()
            }
        })
}

