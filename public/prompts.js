function promptEat(){
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

let event = 0 // this ensures the same event is not called twice per game
// TODO - add more events, randomize which are called; add more options to existing events, randomize which are available, etc.
function promptWorldEvent(){
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