Crafty.c('PauseMsg', {
  required: '2D, DOM, Text',
  init: function () {
    this.w = 200
    this.h = 75
    this.x = 285
    this.y = 115
    this.z = 6
    this.textFont({ size: '75px', weight: 'bold' })
    this.css({ 'font-family': 'VT323, monospace', 'display': 'none' })
    this.text('PAUSED')
  }
})

Crafty.c('PauseBox', {
  required: '2D, DOM, Color',
  init: function () {
    this.w = 695
    this.h = 305
    this.x = 10
    this.y = 10
    this.z = 5
    this.css({ 'display': 'none' })
    this.color('rgba(214, 208, 215, 0.8)')
  }
})
