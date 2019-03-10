// game prompts are called in timer and handled in options
function promptEat(){
  Crafty('Player').freeze()
  const eatOptionsObj = [{
    obj: {
      optionsList: {
        option1: {
          title: 'YOU\'RE HUNGRY. EAT?',
          scoreEffect: {
            primaryMetrics: { energy: +1 }
          }
        },
        option2: {
          title: 'GO BACK'
        }
      }
    }
  }]
  makePopUp(eatOptionsObj)
}

function promptNap(){
  Crafty('Player').freeze()
  const napOptionsObj = [{
    obj: {
      optionsList: {
        option1: {
          title: 'YOU\'RE SLEEPY. NAP?',
          scoreEffect: {
            primaryMetrics: { sleepTime: +2 }
          }
        },
        option2: {
          title: 'GO BACK'
        }
      }
    }
  }]
  makePopUp(napOptionsObj)
}

// TODO - add more events, randomize which are called; add more options to existing events, randomize which are available, etc.
let event = 0 // this ensures the same event is not called twice per game
function promptWorldEvent(){
  Crafty('Player').freeze()
  const friendEventObj = [{
    obj: {
      optionsList: {
        option1: {
          title: 'YOU HEAR YOUR FRIENDS IN THE LIVING ROOM. VISIT?',
          playerMove: 'living room'
        },
        option2: {
          title: 'GO BACK'
        }
      }
    }
  }]
  const outsideEventObj = [{
    obj: {
      optionsList: {
        option1: {
          title: 'YOU HEAR AN ICE CREAM TRUCK. GO OUTSIDE?',
          playerMove: 'outside'
        },
        option2: {
          title: 'GO BACK'
        }
      }
    }
  }]
  const worldEventsArr = [friendEventObj, outsideEventObj]
  makePopUp(worldEventsArr[event])
  event++
}

function promptTherapistCall() {
  Crafty('Player').freeze()
  const therapistCall = [{
    obj: {
      optionsList: {
        option1: {
          title: 'YOUR THERAPIST IS CALLING. ANSWER?',
          newSkill: {
            description: 'Want to avoid another panic attack? Check in with your body at any time to learn what you are needing in this moment. Hit "B" to do a body check.',
            gainNewSkill: function(){
              Crafty('Player').bind('KeyDown', function(e) {
                if (e.key == Crafty.keys.B) {
                  bodyCheck()
                }
              })
            }
          }
        },
        option2: {
          title: 'DO NOT ANSWER'
        }
      }
    }
  }]
  makePopUp(therapistCall)
}

function bodyCheck() {
  const lowMetricsMessages = {
    timeIn: 'You need to check in with your body. Have you found your meditation pillow yet?',
    downTime: 'You need some down time. Have a seat and enjoy the scenery.',
    focusTime: 'You need to engage your brain. Try drawing or tidying up.',
    playTime: 'You need to play!',
    connectingTime: 'You need to connect. Is there anyone you can speak to?',
    sleepTime: 'You need to sleep.',
    physicalTime: 'You need to move your body.'
  }
  const lowMetrics = []
  for (let metric in playerMetrics.platter) {
    if (playerMetrics.platter[metric] < 2) {
      lowMetrics.push(metric)
    }
  }
  for (let lowMetric of lowMetrics) {
    console.log(lowMetricsMessages[lowMetric])
  }
  // TODO display messages on screen
}
