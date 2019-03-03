Crafty.init(500, 350, document.getElementById('game'));

// creates all interactable items
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

// creates pop up
Crafty.c('OptionsBox', {
    init: function() {
        this.addComponent('2D, DOM, Color')
        this.x = 20
        this.y = 20
        this.w = 400
        this.h = 400
    },
    optionsList: function(optionsObj) {
        let iteration = 0
        for (const option in optionsObj) {
            let optionTitle = optionsObj[option].title
            iteration = iteration + 50
            Crafty.e('Option').text(optionTitle).place(iteration)
        }
    }
})

// creates options in pop up
Crafty.c('Option', {
    init: function() {
        this.addComponent('2D, DOM, Color, Text')
        this.w = 250
        this.h = 20
    },
    text: function(text) {
        this.text = text
    },
    place: function(iteration) {
        this.x = 35
        this.y = 23 + iteration
    },
    action: function(action) {
        // action of each option goes here
    }
})

// player
const player = Crafty.e('2D, DOM, Color, Fourway, Collision')
    .attr({
        x: 10,
        y: 10,
        w: 40,
        h: 40,
        // killBox: { canKill: false, obj: undefined } // logic to be moved to selector
    })
    .color('red')
    .fourway(200)
    .checkHits('Item')
    .bind('HitOn', function() {
        let hitItem = player.hit('Item') // logic to selector
        // player.killBox.obj = hitItem[0].obj // logic to selector
        makePopUp(hitItem) // no use for passed data yet
        this.freeze() // stops player while options are up
    })

function makePopUp (hitItem) { // hitItem will be passed in order to set the options in popUp
    const popUp = Crafty.e('OptionsBox').color('grey').optionsList({
        option1: {
            title: 'CALL A GOOD FRIEND',
            changeScore: function() {}
        },
        option2: {
            title: 'BROWSE TWITTER',
            changeScore: function() {}
        }
    })
    const selector = Crafty.e('2D, DOM, Color, Collision')
        .attr({
            w: 300,
            h: 20,
            x: 30,
            y: 20,
            selectOption: { canSelect: false, optionObj: undefined },
        })
        .color('rgba(255, 99, 71, 0.5)')
        .bind('KeyDown', function(e) {
            if (e.key == Crafty.keys.UP_ARROW) {
                this.y = this.y - 50
            } else if (e.key == Crafty.keys.DOWN_ARROW) {
                this.y = this.y + 50
            } else if (e.key == Crafty.keys.ENTER) {
            }
        })
        .checkHits('Option')
        .bind('HitOn', function(hitEvent) {
            // console.log(hitEvent); // returns the same object as the hitOption lines below
            let hitOption = this.hit('Option')
            this.selectOption.optionObj = hitOption[0].obj
            console.log(hitOption[0].obj['0']) // this is the ID of the selected option
            this.resetHitChecks()
        })
        .bind('HitOff', function() {
            console.log('dogj') // this function won't trigger unless the select moves off all options, so jumping between them isn't working
            // i could either have the selector slide between options (which is not ideal for UX), or find another way of ensuring Crafty knows the option has changed...
        })
}


// Crafty.c('Selector', {
//     init: function() {
//         this.addComponent('2D, DOM, Color')
//         this.w = 300
//         this.h = 20
//         this.x = 30
//         this.y = 20
//         this.bind('KeyDown', function(e) {
//             if (e.key == Crafty.keys.DOWN_ARROW) {
//                 this.y = this.y + 50
//             } else if (e.key == Crafty.keys.UP_ARROW) {
//                 this.y = this.y - 50
//             } else if (e.key == Crafty.keys.ENTER) {
//                 console.log(e)
//             }
//         })
//     }
// })



Crafty.e('Item')
    .place(150, 100)
    .color('green')

Crafty.e('Item')
    .place(250, 150)
    .color('green')

Crafty.e('Item')
    .place(300, 300)
    .color('green')

// give the selector the functionality the player has.