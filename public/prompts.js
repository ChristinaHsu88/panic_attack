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
  // const napOptionsObj = [{
  //   obj
  // }]
  // allPrompts(options)
  // increase sleep if YES
}

function promptWorldEvents(){
  // allPrompts(options)
  // generate appropriate in-game response based on event options
}