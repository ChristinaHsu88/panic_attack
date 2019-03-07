Crafty.sprite(70, 'assets/blue.png', { blueStress:[0, 0] }) // stress 0-2
Crafty.sprite(70, 'assets/green.png', { greenStress:[0, 0] }) // stress 3-5
Crafty.sprite(70, 'assets/orange.png', { orangeStress:[0, 0] }) // stress 6-8
Crafty.sprite(70, 'assets/red.png', { redStress:[0, 0] }) // stress 9-10

let stressLevel = 'blueStress'

Crafty.e('2D, DOM, StressBar')
  .attr({x: 370, y: 280})
  .addComponent(stressLevel)
