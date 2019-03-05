// defines pop up
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
    },
    action: function(action) {
        // action of each option goes here
    }
})

function makePopUp (hitItem) { // hitItem will be passed in order to set the options in popUp
    const popUp = Crafty.e('OptionsBox').color('grey').optionsList(hitItem[0].obj.optionsList)
    const selector = Crafty.e('Selector, 2D, DOM, Color, Collision')
        .attr({
            w: 300,
            h: 20,
            x: 30,
            y: 70,
            selectOption: { canSelect: false, optionObj: undefined },
        })
        .color('rgba(255, 99, 71, 0.5)')
        .bind('KeyDown', function(e) {
            if (e.key == Crafty.keys.UP_ARROW) {
                this.selectOption.canSelect = false
                this.y = this.y - 50
                this.resetHitChecks()
            } else if (e.key == Crafty.keys.DOWN_ARROW) {
                this.selectOption.canSelect = false
                this.y = this.y + 50
                this.resetHitChecks()
            } else if (e.key == Crafty.keys.ENTER && this.selectOption.canSelect) {
                const optionID = this.selectOption.optionObj['0']
                const selectedOption = Crafty(optionID)
                
                console.log(selectedOption._text);
                
                    energyValue(selectedOption._text)
    
                
                Crafty('Player').unfreeze()
                Crafty('Option, OptionsBox, Selector').destroy()
            }
        })
        .checkHits('Option')
        .bind('HitOn', function(hitOption) {
            this.selectOption.optionObj = hitOption[0].obj
            this.selectOption.canSelect = true
        })
}

this.energy = 7;
this.stress = 7;
/* calculate energy level based on the actions chosen */
function energyValue(source) {
    if (source === 'CALL A GOOD FRIEND') {
        console.log('soooo excited');
        this.energy++; 
        console.log(this.energy);
    }
    if (source === 'BROWSE TWITTER') {
        console.log('exciting news');
        this.stress++;
    }
    if (source === 'SMOKE WEED') {
        console.log('sooo chilled');
        this.stress--;
    }
    if (source === 'TIDY ROOM') {
        console.log('the room is so clean now');
        this.stress--;
    }
    if (source === 'SIT ON LAUNDRY AND NAP') {
        console.log('so much shit to do');
        this.stress++;
        this.energy++;
    }
    console.log('your energy level is ' + this.energy);
    console.log('your stress level now is ', this.stress);
}