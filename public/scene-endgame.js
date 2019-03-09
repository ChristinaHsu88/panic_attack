// two versions of the ending:
  // panic and time out
  // the only difference between the two is the message that appears and the quantity of cats on the bed
Crafty.scene('endgame', function() {
  Crafty.background('white url(assets/end.png) no-repeat center center')  /* image for testing purpose */

  /* GAME OVER && message */
  Crafty.e('2D, DOM, Canvas, Text, Mouse')
  .attr({ x: 190, y: 70 })
  .text('Game over! ')
  .textFont({ size: '50px', weight: 'bold'})
  .textColor('white')
  .bind('KeyDown', function(e) {
    if (e.key == Crafty.keys.ENTER) {
      console.log('made it here')
      console.log(playerMetrics.primaryMetrics.stress)
      if (playerMetrics.primaryMetrics.stress > 14) {
        console.log('this should load the cat page')
      } 
      if (playerMetrics.primaryMetrics.stress < 14) {
        console.log('this should load the sleep page only')
      }
        /* sample code */
        // playerMetrics.name = username
        // if (username === '') {                  /* alert user to enter a name */
        //     alert('you have to enter a name!')
        // } else {
        // Crafty.enterScene('bedroom')            /* scene will only load when the user has entered a name */
        // timer()
        // checkUser(username) // checks DB for existing user; sets playerMetrics to saved DB
        // startingScore(playerMetrics)
        // }
    }
    // TODO /* all done */
        // let user backspace or clear name before enter
        // tell user how to log in (i.e., press enter)
        // do not allow empty username
    for (let letter in alphabet) {
        if (e.key == Crafty.keys[letter]) {
            username += this.text(alphabet[letter])._text
            this.text(username)
        } 
    }
    if (e.key == Crafty.keys.BACKSPACE) {       /* allow user to edit their name */
        username = username.slice(0, - 1)
        this.text(username)
    }
})

})

function loadEndgame(scene, duration) {
  Crafty.e('2D, DOM, Tween, Color')
  .attr({ alpha: 0.0, x: 0, y: 0, w: 800, h: 600 })
  .color('#000000')
  .tween({ alpha: 1.0 }, duration)
  .bind('TweenEnd', function() {
      Crafty.scene(scene);
      Crafty.e('2D, DOM, Tween, Color')
      .attr({ alpha: 1.0, x: 0, y: 0, w: 800, h: 600 })
      .color('#000000')
      .tween({ alpha: 0.0 }, duration);
  });
}