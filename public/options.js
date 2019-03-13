let optType;
// defines pop up
Crafty.c('OptionsBox', {
  init: function() {
    this.addComponent('2D, DOM, Color');
    this.x = 120;
    this.y = 30;
    this.w = 525;
    this.h = 250;
    this.css = ({ backgroundColor: '#96F443', borderRadius: '5px',  })
  },
  boxType: function(type) {
    this.addComponent(type);
    return this;
  },
  optionsListMaker: function(optionsObj) {
    let iteration = 0;
    let type;
    for (const option in optionsObj) {
      let optionTitle = optionsObj[option].title;
      let scoreEffect = optionsObj[option].scoreEffect;
      let playerMove = optionsObj[option].playerMove;
      let newSkill = optionsObj[option].newSkill;
      type = optionsObj[option].type;
      if (optionTitle) {
        Crafty.e('Option')
          .text(optionTitle)
          .place(iteration)
          .changeScore(scoreEffect)
          .movePlayer(playerMove)
          .receiveCall(newSkill)
          .optionType(type);
        iteration = iteration + 50;
      }
    }
    optType = type; // global variable needed to specify what to destroy
  }
});

// define options in pop up
Crafty.c('Option', {
  init: function() {
    this.addComponent('2D, DOM, Color, Text');
    this.w = 435;
    this.h = 20;
    this.z = 1
    this.textFont({ size: '16px', weight: 'bold' })
    this.css({ 'font-family': 'VT323, monospace' })
  },
  text: function(text) {
    this.text = text;
  },
  place: function(iteration) {
    this.x = 165;
    this.y = 65 + iteration;
    return this; // without this line, custom methods (e.g., changeScore) will not work
  },
  changeScore: function(scoreEffect) {
    this.scoreEffect = scoreEffect;
    return this;
  },
  movePlayer: function(playerMove) {
    this.playerMove = playerMove;
    return this;
  },
  receiveCall: function(newSkill) {
    this.newSkill = newSkill;
    return this;
  },
  optionType: function(type) {
    this.addComponent(type); // string
  }
});
// define interactable items
Crafty.c('Item', {
  init: function() {
    this.addComponent('2D, DOM, Color');
    this.w = 30;
    this.h = 30;
  },
  place: function(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }
});

// hitItem param sets the options in popUp
function makePopUp(hitItem, boxType) {
  const popUp = Crafty.e('OptionsBox')
    .color('grey')
    .boxType(boxType)
    .optionsListMaker(hitItem[0].obj.optionsList); // generates the popup window and populates with the hitItem's titles

  const selector = Crafty.e('Selector, 2D, DOM, Color, Collision')
    .attr({
      w: 470,
      h: 25,
      x: 150,
      y: 60,
      selectOption: { canSelect: false, optionObj: undefined }
    })
    .color('rgba(255, 99, 71, 0.5)')
    .checkHits('Option') // the selector will recognize when it hits an option
    .bind('HitOn', function(hitOption) {
      this.selectOption.optionObj = hitOption[0].obj; // when selector hits an option, that option's data will be stored to the selector attr
      this.selectOption.canSelect = true; // gatekeeper, allowing selector to select or not
    })
    .bind('KeyDown', function(e) {
      if (e.key == Crafty.keys.UP_ARROW) {
        this.selectOption.canSelect = false; // reset gatekeeper
        this.y = this.y - 50;
        this.resetHitChecks(); // allow selector to register new option hit
      } else if (e.key == Crafty.keys.DOWN_ARROW) {
        this.selectOption.canSelect = false;
        this.y = this.y + 50;
        this.resetHitChecks();
      } else if (e.key == Crafty.keys.ENTER && this.selectOption.canSelect) {
        const selectedOption = Crafty(this.selectOption.optionObj['0']);
        handleOption(selectedOption);
        Crafty('PlayerTowards').unfreeze();
        Crafty(boxType).destroy(); // boxTypes handled here: gamePrompt, therapistPrompt, selectedItem
        Crafty(optType).destroy(); // prompt, therapistMessage, interactable
        Crafty('Selector').destroy(); // TODO - refactor when confirmed that these variables work
      }
    });
}

function takeCall(newSkill) {
  Crafty.e('OptionsBox')
    .color('grey')
    .boxType('TherapistCall')
    .optionsListMaker(newSkill);
}
