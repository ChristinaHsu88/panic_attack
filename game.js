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
            iteration = iteration + 50
            Crafty.e('Option').text(option).place(iteration)
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

Crafty.c('Selector', {
    init: function() {
        this.addComponent('2D, DOM, Color')
        this.w = 300
        this.h = 20
        this.x = 30
        this.y = 20
        this.bind('KeyDown', function(e) {
            if (e.key == Crafty.keys.DOWN_ARROW) {
                this.y = this.y + 50
            } else if (e.key == Crafty.keys.UP_ARROW) {
                this.y = this.y - 50
            } else if (e.key == Crafty.keys.ENTER) {
                console.log(e)
            }
        })
    }
})

// player
const player = Crafty.e('2D, DOM, Color, Fourway, Collision')
    .attr({x: 10, y: 10, w: 40, h: 40})
    .color('red')
    .fourway(200)
    .checkHits('Item')
    .bind('HitOn', function() {
        const popUp = Crafty.e('OptionsBox').color('grey').optionsList({
            option1: function() {},
            option2: function() {}
        })
        const selector = Crafty.e('Selector').color('rgba(255, 99, 71, 0.5)')
        this.freeze() // stops player from moving while options are up
    })

const greenItem = Crafty.e('Item')
    .place(150, 100)
    .color('green')
