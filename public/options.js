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
            let playerMove = optionsObj[option].playerMove
            let newSkill = optionsObj[option].newSkill
            if (optionTitle) {
                iteration = iteration + 50
                Crafty.e('Option').text(optionTitle).place(iteration).changeScore(scoreEffect).movePlayer(playerMove).receiveCall(newSkill)
            }
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
    changeScore: function(scoreEffect) {
        this.scoreEffect = scoreEffect
        return this
    },
    movePlayer: function(playerMove) {
        this.playerMove = playerMove
        return this
    },
    receiveCall: function(newSkill) {
        this.newSkill = newSkill
        return this
    }
})

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

// hitItem param sets the options in popUp
function makePopUp (hitItem) {
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
                // find option
                const selectedOption = Crafty(this.selectOption.optionObj['0'])
                // find option's effects
                const scoreEffect = selectedOption.scoreEffect
                // update score based on option
                if (scoreEffect) {
                    for (effect in scoreEffect.platter) {
                        playerMetrics.platter[effect] += scoreEffect.platter[effect]
                    }
                    for (effect in scoreEffect.primaryMetrics) {
                        playerMetrics.primaryMetrics[effect] += scoreEffect.primaryMetrics[effect]
                    }
                    loseTime()
                    calculateStress(playerMetrics)
                }
                // find world event's effects
                const playerMove = selectedOption.playerMove
                if (playerMove) {
                    // TODO - send player to selected scene
                    console.log(`Player moved ${playerMove}! (You just can't tell yet.)`)
                    loseTime()
                }
                // find new skill
                const newSkill = selectedOption.newSkill
                // display call info
                if (newSkill) {
                    setTimeout(takeCall, 200, newSkill)
                }
                Crafty('player').unfreeze()
                Crafty('Option, OptionsBox, Selector').destroy()
            }
        })
}

function takeCall(newSkill) {
    Crafty.e('OptionsBox')
        .color('grey')
        .optionsListMaker(newSkill)
    killBox(newSkill)
}

function killBox(newSkill) {
    document.onkeydown = function (e) {
        if (e.code === 'Enter') {
            if (newSkill){
                newSkill.objectShapeKeeper.gainNewSkill()
            }
            Crafty('player').unfreeze()
            Crafty('Option, OptionsBox, Selector').destroy()
        }
    }
}
