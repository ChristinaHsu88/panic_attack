// define interactable items
Crafty.c('Item', {
    init: function() {
        this.addComponent('2D, DOM, phone')
        this.w = 30
        this.h = 30
    },
    place: function(x, y) {
        this.x = x
        this.y = y
        return this
    }
})

function generateRoomItems() {
    Crafty.e('Item, phone')
    .place(95, 197)
    //.color('black')
    .attr({
        type: 'phone',
        optionsList: {
            option1: {
                title: 'CALL A GOOD FRIEND',
                scoreEffect: {
                    primaryMetrics: { stress: -1 },
                    platter: { connectingTime: 1 }
                }
            },
            option2: {
                title: 'BROWSE TWITTER',
                scoreEffect: {
                    primaryMetrics: { stress: +1 },
                    platter: { downTime: +1 }
                }
            },
            option3: {
                title: 'GO BACK'
        }
    }
})

    Crafty.e('Item')
    .place(250, 150)
    .color('green')
    .attr({
        type: 'weed',
        optionsList: {
            option1: {
                title: 'SMOKE WEED',
                scoreEffect: {
                    primaryMetrics: { stress: -1, energy: -1 },
                    platter: { downTime: +1 }
                }
            },
            option2: {
                title: 'GO BACK'
            },
            option3: {
                title: 'INSTANT PANIC',
                scoreEffect: {
                    primaryMetrics: { stress: 10 }
                }
            },
            option4: {
                title: 'REDUCE METRIC',
                scoreEffect: {
                    platter: { downTime: -6 }
                }
            }
        }
    })

    Crafty.e('Item')
    .place(300, 300)
    .color('orange')
    .attr({
        type: 'laundry',
        optionsList: {
            option1: {
                title: 'TIDY ROOM',
                scoreEffect: {
                    primaryMetrics: { stress: -1 },
                    platter: { focusTime: +1 }
                }
            },
            option2: {
                title: 'SIT ON LAUNDRY AND NAP',
                scoreEffect: {
                    primaryMetrics: { stress: -1 },
                    platter: { sleepTime: +1 }
                }
            },
            option3: {
                title: 'GO BACK'
            }
        }
    })

    Crafty.e('Item')
    .place(400, 300)
    .color('yellow')
    .attr({
        type: 'door',
        location: 'livingroom'
    })
}

/* items for living room only */
function generateLivingRoomItems() {
    Crafty.e('Item')
    .place(400, 300)
    .color('yellow')
    .attr({
        type: 'door',
        location: 'outside'
    })

    Crafty.e('Item')
    .place(100, 75)
    .color('yellow')
    .attr({
        type: 'door',
        location: 'bedroom'
    })

    Crafty.e('Item')
    .place(530, 200)
    .color('red')
    .attr({
        type: 'couch',
        optionsList: {
            option1: {
                title: 'CHAT WITH FRIEND',
                scoreEffect: {
                    /* TBD */
                }
            },
            option2: {
                title: 'WATCH TV'
            },
            option3: {
                title: 'GO BACK'
            }
        }
    })

    Crafty.e('Item')
    .place(230, 180)
    .color('gray')
    .attr({
        type: 'dog',
        optionsList: {
            option1: {
                title: 'PLAY WITH DOG',
                scoreEffect: {
                    /* TBD */
                }
            },
            option3: {
                title: 'GO BACK'
            }
        }
    })

    Crafty.e('Item')
    .place(530, 40)
    .color('black')
    .attr({
        type: 'treadmill',
        optionsList: {
            option1: {
                title: 'RUNNING',
                scoreEffect: {
                    /* TBD */
                }
            },
            option3: {
                title: 'GO BACK',
                scoreEffect: {
                   
                }
            }
        }
    })
}

/* a door for user to go back inside */
function generateOutsideItems() {
    Crafty.e('Item')
    .place(400, 300)
    .color('yellow')
    .attr({
        type: 'door',
        location: 'livingroom'
    })
    Crafty.e('Item')
    .place(530, 200)
    .color('red')
    .attr({
        type: 'bench',
        optionsList: {
            option1: {
                title: 'SIT',
                scoreEffect: {
                    /* TBD */
                }
            },
            option2: {
                title: 'DRSAW',
                scoreEffect: {
                    /* TBD */
                }
            },
            option3: {
                title: 'GO BACK'
            }
        }
    })
    Crafty.e('Item')
    .place(330, 200)
    .color('brown')
    .attr({
        type: 'tree',
        optionsList: {
            option1: {
                title: 'WATCH TREES',
                scoreEffect: {
                    /* TBD */
                }
            },
            option3: {
                title: 'GO BACK'
            }
        }
    })
}

function itemPopUp(hitItem) {
    Crafty.e('ItemPopUp, 2D, DOM, Color, Text')
        .color('grey')
        .attr({
            x: 300,
            y: 300,
            w: 100,
            h: 30,
        })
        .text(`HIT ENTER TO SELECT THIS ${hitItem[0].obj.type}`)
        .bind('KeyDown', function(e) {
            if (e.key == Crafty.keys.ENTER) {
                makePopUp(hitItem)
                Crafty('Player').freeze()
                this.destroy()
            }
        })
}
