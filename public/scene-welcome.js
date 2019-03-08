// scene1 - outside of house
    // TODO - user types in player name and presses enter
        // query the DB according to name
            // if new name, create entry in DB
            // if name exists, pull entry from DB
        // if game has rolled over from previous round, user should not have to type in player name but simply hit enter to start next day

const alphabet = 
{A:'A',B:'B',C:'C',D:'D',E:'E',F:'F',G:'G',H:'H',I:'I',J:'J',K:'K',L:'L',M:'M',
N:'N',O:'O',P:'P',Q:'Q',R:'R',S:'S',T:'T',U:'U',V:'V',W:'W',X:'X',Y:'Y',Z:'Z'}

Crafty.scene('welcome', function() {
    Crafty.background('white url(assets/loading.png) no-repeat center center')
    /* greetings */
    Crafty.e('2D, DOM, Text, Mouse')
    .attr({ x: 230, y: 180 })
    .text('Hello! ')
    .textFont({ size: '40px', weight: 'bold' })

    /* store username */
    let username = ''
    Crafty.e('2D, DOM, Text, Mouse')
    .attr({ x: 230, y: 220 })
    .text(username)
    .textFont({ size: '40px', weight: 'bold' })
    .bind('KeyDown', function(e) {
        if (e.key == Crafty.keys.ENTER) {
            Crafty.enterScene('bedroom')
            timer()
            startingScore(playerMetrics)          // calculate player metrics at start of game
            playerMetrics.name = username         /* store username to playerMetrics */
            console.log('inside the keydown', playerMetrics)
        }
        for (let letter in alphabet) {            /* loop through alphabet to find letter that user enters and store in username */
            if (e.key == Crafty.keys[letter]) {
                this.text(alphabet[letter])
                username += this.text(alphabet[letter])._text
                this.text(username)
            }
        }
    }) 
})

function loadWelcome(scene, duration) {
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

loadWelcome('welcome', 0);

