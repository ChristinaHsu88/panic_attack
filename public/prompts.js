// game prompts are called in timer and handled in options
function promptEat(){
  Crafty('Player').freeze()
  const eatOptionsObj = [{
    obj: {
      optionsList: {
        option1: {
          type: 'prompt',
          title: 'YOU\'RE HUNGRY. EAT?',
          scoreEffect: {
            primaryMetrics: { energy: +1 }
          }
        },
        option2: {
          title: 'GO BACK',
          type: 'prompt'
        }
      }
    }
  }]
  makePopUp(eatOptionsObj, 'gamePrompt')
}

function promptWorldEvent(){
  Crafty('Player').freeze()
  const friendEventObj = [{
    obj: {
      optionsList: {
        option1: {
          type: 'prompt',
          title: 'YOU HEAR YOUR FRIENDS IN THE LIVING ROOM. VISIT?',
          playerMove: 'livingroom', // TODO can we move player TO the couch?
          /*scoreEffect: {
            primaryMetrics: { stress: -1 },
            platter: { connectingTime: +1 }
          }*/ // commented out until above question answered
        },
        option2: {
          title: 'GO BACK',
          type: 'prompt',
        }
      }
    }
  }]

  const napEventObj = [{
    obj: {
      optionsList: {
        option1: {
          type: 'prompt',
          title: 'YOU\'RE SLEEPY. NAP?',
          playerMove: 'bedroom', // TODO - should move to bed in bedroom
          scoreEffect: {
            platter: { sleepTime: +2 }
          },
          type: 'prompt',
        },
        option2: {
          title: 'GO BACK',
          type: 'prompt',
        }
      }
    }
  }]

  const outsideEventObj = [{
    obj: {
      optionsList: {
        option1: {
          type: 'prompt',
          title: 'YOU HEAR BIRDS CHIRPING. GO OUTSIDE?',
          playerMove: 'outside',
          scoreEffect: {
            primaryMetrics: { stress: -1 },
            platter: { connectingTime: +1 }
          }
        },
        option2: {
          title: 'GO BACK',
          type: 'prompt',
        }
      }
    }
  }]

  const worldEventsArr = [friendEventObj, outsideEventObj, napEventObj]
  let num

  if (playerMetrics.platter.sleepTime < 2 && gameTime < 90 && gameTime > 50) {
    num = 2
  } else {
    if (currentLocation === 'bedroom') {
      num = Math.floor(Math.random() * 2) // [0, 1]
    } else if (currentLocation === 'livingroom') {
      num = 1
    } else if (currentLocation === 'outside') {
      num = 0
    }
  }
  makePopUp(worldEventsArr[randomNum], 'gamePrompt')
}

// called in scoring, handled in options
function promptTherapistCall() {
  Crafty('Player').freeze()
  const therapistCall = [{
    obj: {
      optionsList: {
        option1: {
          type: 'therapistMessage',
          title: 'YOUR THERAPIST IS CALLING. ANSWER?',
          newSkill: { // nested object bc new box pops up from previous box
            objectShapeKeeper: {
              title: 'Want to avoid another panic attack? Learn what you need by checking in with your body - just hit the "SHIFT" key.',
              type: 'newSkillMessage'
            }
          }
        },
        option2: {
          title: 'DO NOT ANSWER',
          type: 'therapistMessage'
        }
      }
    }
  }]
  makePopUp(therapistCall, 'therapistPrompt')
}

// checks for low metrics, passes appropriate message to be rendered
function bodyCheck(platter) {
  platter.timeIn += 1
  const lowMetricsMessages = {
    timeIn: 'You need to check in with your body more often.',
    downTime: 'You need some down time. Have a seat and enjoy the scenery.',
    focusTime: 'You need to engage your brain. Try drawing or tidying up.',
    playTime: 'You need to play!',
    connectingTime: 'You need to connect. Is there anyone you can speak to?',
    sleepTime: 'You need to sleep.',
    physicalTime: 'You need to move your body.'
  }
  let lowMetricsObj = {
    timeIn: { title: '', type: 'bodyCheckMessage' },
    downTime: { title: '', type: 'bodyCheckMessage' },
    focusTime: { title: '', type: 'bodyCheckMessage' },
    playTime: { title: '', type: 'bodyCheckMessage' },
    connectingTime: { title: '', type: 'bodyCheckMessage' },
    sleepTime: { title: '', type: 'bodyCheckMessage' },
    physicalTime: { title: '', type: 'bodyCheckMessage' }
  }
  let playerLow = false
  for (let metric in platter) {
    if (platter[metric] < 3) {
      playerLow = true
      lowMetricsObj[metric].title = lowMetricsMessages[metric]
    }
  }
  if (!playerLow) {
    lowMetricsObj = {
      goodMessage: { title: 'Looking good! Feeling great!', type: 'bodyCheckMessage' }
    }
  }
  Crafty.e('OptionsBox')
    .color('grey')
    .boxType('BodyCheck')
    .optionsListMaker(lowMetricsObj)
}
