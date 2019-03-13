Crafty.c('PauseBox', {
  required: '2D, DOM, Text',
  init: function () {
    this.w = 200
    this.h = 75
    this.x = 285
    this.y = 115
    this.z = 10
    this.textFont({ size: '75px', weight: 'bold' })
    this.css({ 'font-family': 'VT323, monospace', 'display': 'none' })
    this.text('PAUSED')
  }
})
