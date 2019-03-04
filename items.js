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
                changeScore: function() {} // END POINT FOR BACKEND LOGIC
            },
            option2: {
                title: 'BROWSE TWITTER',
                changeScore: function() {} // END POINT FOR BACKEND LOGIC
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
                changeScore: function() {} // END POINT FOR BACKEND LOGIC
            },
            option2: {
                title: 'GO BACK'
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
                changeScore: function(){} // END POINT FOR BACKEND LOGIC
            },
            option2: {
                title: 'SIT ON LAUNDRY AND NAP',
                changeScore: function () {} // END POINT FOR BACKEND LOGIC
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
                makePopUp(hitItem) // no use for passed data yet
                Crafty('Player').freeze()
                this.destroy()
            }
        })
}
