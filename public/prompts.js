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
          playerMove: 'livingroom'
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
          title: 'YOU HEAR BIRDS CHIRPING. GO OUTSIDE?',
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

// called in scoring, handled in options
function promptTherapistCall() {
  Crafty('Player').freeze()
  const therapistCall = [{
    obj: {
      optionsList: {
        option1: {
          title: 'YOUR THERAPIST IS CALLING. ANSWER?',
          newSkill: {
            objectShapeKeeper: {
              title: 'Want to avoid another panic attack? Learn what you need by checking in with your body - just hit the "SHIFT" key.' // displayed in popup
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

function bodyCheck(platter) {
  platter.timeIn += 1
  const lowMetricsMessages = {
    timeIn: 'You need to check in with your body. Have you found your meditation pillow yet?',
    downTime: 'You need some down time. Have a seat and enjoy the scenery.',
    focusTime: 'You need to engage your brain. Try drawing or tidying up.',
    playTime: 'You need to play!',
    connectingTime: 'You need to connect. Is there anyone you can speak to?',
    sleepTime: 'You need to sleep.',
    physicalTime: 'You need to move your body.'
  }
  let lowMetrics = {
    timeIn: { title: '' },
    downTime: { title: '' },
    focusTime: { title: '' },
    playTime: { title: '' },
    connectingTime: { title: '' },
    sleepTime: { title: '' },
    physicalTime: { title: '' }
  }
  let playerLow = false
  for (let metric in platter) {
    if (platter[metric] < 3) {
      playerLow = true
      lowMetrics[metric].title = lowMetricsMessages[metric]
    }
  }
  if (!playerLow) {
    lowMetrics = {
      goodMessage: { title: 'Looking good! Feeling great!' }
    }
  }
  Crafty.e('OptionsBox')
    .addComponent('BodyCheck')
    .color('grey')
    .optionsListMaker(lowMetrics)
  Crafty('Option').addComponent('BodyCheckMessage')
}
