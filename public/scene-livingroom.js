/* living room scene */
Crafty.scene('livingroom', function() {
    Crafty.background('#57342E url(assets/livingroom.png) no-repeat center right');
    Crafty.sprite(32, 'assets/cat.png', { player: [0, 1] })
    Crafty.sprite(100, 'assets/dog.png', { dog: [0, 0] })
    Crafty.sprite(100, 'assets/treadmill.png', { treadmill: [0, 0]})
    Crafty.sprite(100, 'assets/roommate.png', { roommate: [0, 0]})
    makePlayer(130, 50)
    generateLivingRoomItems()
    createStressBar()
})