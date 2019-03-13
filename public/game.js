Crafty.init(715, 325, document.getElementById('game'));

Crafty.c('PauseBox', {
  required: '2D, DOM, Text',
  init: function () {
    this.w = 200
    this.h = 75
    this.x = 200
    this.y = 150
    this.z = 10
    this.textFont({ size: '75px', weight: 'bold' })
    this.css({ 'font-family': 'VT323, monospace', 'display': 'none' })
    this.text('PAUSED')
  }
})

// LOAD ORDER
  // timer
  // stress-bar
  // scoring
  // game
  // scene-welcome
  // scene-bedroom
  // items
  // options
  // prompts
