// defines pop up
Crafty.c('OptionsBox', {
    init: function() {
        this.addComponent('2D, DOM, Color')
        this.x = 20
        this.y = 20
        this.w = 400
        this.h = 400
    },
    optionsListMaker: function(optionsObj) {
        let iteration = 0
        for (const option in optionsObj) {
            let optionTitle = optionsObj[option].title
            let scoreEffect = optionsObj[option].scoreEffect
            iteration = iteration + 50
            Crafty.e('Option').text(optionTitle).place(iteration).changeScore(scoreEffect)
        }
    }
})

// define options in pop up
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
        return this // without this line, custom methods (e.g., changeScore) will not work
    },
    changeScore: function(effectArr) {
        this.scoreEffect = effectArr
    }
})

function makePopUp (hitItem) { // hitItem is passed in order to set the options in popUp

    const popUp = Crafty.e('OptionsBox').color('grey').optionsListMaker(hitItem[0].obj.optionsList) // generates the popup window and populates with the hitItem's titles

    const selector = Crafty.e('Selector, 2D, DOM, Color, Collision')
        .attr({
            w: 300,
            h: 20,
            x: 30,
            y: 70,
            selectOption: { canSelect: false, optionObj: undefined },
        })
        .color('rgba(255, 99, 71, 0.5)')
        .checkHits('Option') // the selector will recognize when it hits an option
        .bind('HitOn', function(hitOption) {
            this.selectOption.optionObj = hitOption[0].obj // when selector hits an option, that option's data will be stored to the selector attr
            this.selectOption.canSelect = true // gatekeeper, allowing selector to select or not
        })
        .bind('KeyDown', function(e) {
            if (e.key == Crafty.keys.UP_ARROW) {
                this.selectOption.canSelect = false // remains false for a moment, before recognize new hit event and turning back to true; this boolean will be redundant once the selector's movement is limited, but should remain as a redundant feature
                this.y = this.y - 50
                this.resetHitChecks() // without this method, the selector will not recognize it has hit a new option
            } else if (e.key == Crafty.keys.DOWN_ARROW) {
                this.selectOption.canSelect = false
                this.y = this.y + 50
                this.resetHitChecks()
            } else if (e.key == Crafty.keys.ENTER && this.selectOption.canSelect) {
                const optionID = this.selectOption.optionObj['0']
                const selectedOption = Crafty(optionID)
                /* receive response object data from express server i.e. response.request.response*/
                axios.get('/data')
                    .then(function (response) {
                        console.log('here is the data', response.request.response)
                    })
                for (effect in selectedOption.scoreEffect) {
                    Crafty('Player').metrics[effect] += selectedOption.scoreEffect[effect]
                }
                //console.log(Crafty('Player').metrics)
                // axios.post('/', {
                //     metrics: Crafty('Player').metrics
                // })
                // .then(function (response) {
                //     console.log(response)
                // })
                // .catch(function (error) {
                //     console.log(error)
                // })
                Crafty('Player').unfreeze()
                Crafty('Option, OptionsBox, Selector').destroy()
            }
        })
}
