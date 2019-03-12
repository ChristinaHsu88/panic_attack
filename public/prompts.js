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
          playerMove: 'livingroom'
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
          playerMove: 'outside'
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
          scoreEffect: {
            primaryMetrics: { sleepTime: +2 }
          },
          playerMove: 'bedroom', // should move to bed in bedroom
          type: 'prompt',
        },
        option2: {
          title: 'GO BACK',
          type: 'prompt',
        }
      }
    }
  }]

  const worldEventsArr = [friendEventObj, outsideEventObj, napEventObj]
  let randomNum
  if (currentLocation === 'bedroom') {
    randomNum = Math.floor(Math.random() * 3) // all 3 prompts
  } else if (currentLocation === 'livingroom') {
    randomNum = Math.floor(Math.random() * 2 + 1) // nap & birds
  } else if (currentLocation === 'outside') {
    randomNum = Math.floor(Math.random() * 2) // nap & friends
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
          newSkill: {
            objectShapeKeeper: {
              title: 'Want to avoid another panic attack? Learn what you need by checking in with your body - just hit the "SHIFT" key.', // displayed in popup
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
