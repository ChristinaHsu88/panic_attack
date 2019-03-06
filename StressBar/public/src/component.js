/* set up all the elements in the game */
Crafty.c('Actor', {
    init: function() {
        this.requires('2D, Canvas, Grid')
    }
});

/* player */
Crafty.c('PC',{
    init: function() {
        /* all the stuff required for a player to be in */
       this.requires('Actor, Fourway, Color, Text, Collision')
       .fourway(4)
       .color('red')
       .text('Amy')
       .bind('HitOn', function(hitItem) {itemPopUp(hitItem)})
       .bind('HitOff', function () {Crafty('ItemPopUp').destroy()})
       .attr({x: 40,
        y: 10,
        w: 40,
        h: 40})
        .stopOnSolids();
    },
   

    stopOnSolids: function() {
        this.onHit('Solid', this.stopMovement);
        return this;
    },

    stopMovement: function() {
        this._speed = 0;
        if (this._movement) {
            this.x -= this._movement.x;
            this.y -= this._movement.y;
        }
    }
})

/* elements in the game */
Crafty.c('Item', {
    init: function() {
        this.requires('Actor, Color, Solid, Text')
        .attr({w: 30, h: 30})
        .color()
    },
    place: function(x, y) {
        this.x = x
        this.y = y
        return this;
    }
 
})

/* new item pops up */
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
                Crafty('PC').freeze()
                this.destroy()
            }
        })
}

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
                console.log(selectedOption)
                Crafty('PC').unfreeze()
                Crafty('Option, OptionsBox, Selector').destroy()
            }
        })
        .checkHits('Option')
        .bind('HitOn', function(hitOption) {
            this.selectOption.optionObj = hitOption[0].obj
            this.selectOption.canSelect = true
        })
}
