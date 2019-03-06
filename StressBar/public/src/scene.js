
/* setup the scene of the game */

Crafty.scene('Game', function() {
    /* background url */
    Crafty.background('url(assets/sky.png)')
    /* testing */
    Crafty.background('grey')
    

    Crafty.e('PC'); /* player */

    /* load elements */
    Crafty.e('Item').place(150, 140).color('White').text('Phone')
    Crafty.e('Item').place(200, 130).color('Red').text('Laundry')
    Crafty.e('Item').place(200, 300).color('Purple').text('TV')
    
    
 

})

/* loading scene */

Crafty.scene('Loading', function() {
    Crafty.e('2D, DOM, Text')
    .text('Loading; please wait...')
    .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() })
    .textFont($text_css)


    Crafty.scene('Game');

})