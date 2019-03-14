Crafty.sprite(65, 300, 'assets/blue.png', { blueStress:[0, 0, ] })
Crafty.sprite(65, 300, 'assets/green.png', { greenStress:[0, 0] })
Crafty.sprite(65, 300, 'assets/orange.png', { orangeStress:[0, 0] })
Crafty.sprite(65, 300, 'assets/red.png', { redStress:[0, 0] })

let stressColor = 'blueStress' // must hold value for entity creation, could be anything

function createStressBar() {
  Crafty.e('2D, DOM, StressBar')
    .attr({ x: 0, y: 15 })
    .addComponent(stressColor)
}


// called by calcStress after stress is adjusted
function updateStressBar(stressLevel) {
  const blue = [0, 1]
  const green = [2, 3, 4, 5]
  const orange = [6, 7]
  const red = [8, 9, 10]
  Crafty('StressBar').removeComponent(stressColor)
  if (blue.includes(stressLevel)) {
    stressColor = 'blueStress'
  } else if (green.includes(stressLevel)) {
    stressColor = 'greenStress'
  } else if (orange.includes(stressLevel)) {
    stressColor = 'orangeStress'
  } else if (red.includes(stressLevel) || stressLevel > 10) {
    stressColor = 'redStress'
  }
  Crafty('StressBar').addComponent(stressColor)
  return
}
