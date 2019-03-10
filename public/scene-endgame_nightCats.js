Crafty.scene('nightCats', function() {
    /* cat image source https://www.levelwinner.com/meow-match-beginners-guide-tips-cheats-strategies/ */
    Crafty.background('white url(assets/sleepWCats.jpg) no-repeat center right')

    /* into the final scene and instruct the user to press enter to start another game*/
    Crafty.e('2D, DOM, Canvas, Text, Mouse')
    .attr({ x: 120, y: 280 })
    .text('Press enter to start another game')
    .textFont({ size: '30px', weight: 'bold', type: 'italic'})
    .textColor('white')
    .bind('KeyDown', function(e) {
        if (e.key == Crafty.keys.ENTER) {
            gameOver = false
            gameTime = 181 // hack fix for timer issue on restart
            checkUser(playerMetrics.name)
        }
      })
})
