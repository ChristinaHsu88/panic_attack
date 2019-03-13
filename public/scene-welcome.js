// scene1 - outside of house
  // renders on browser refresh
const alphabet = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
  G: 'G',
  H: 'H',
  I: 'I',
  J: 'J',
  K: 'K',
  L: 'L',
  M: 'M',
  N: 'N',
  O: 'O',
  P: 'P',
  Q: 'Q',
  R: 'R',
  S: 'S',
  T: 'T',
  U: 'U',
  V: 'V',
  W: 'W',
  X: 'X',
  Y: 'Y',
  Z: 'Z'
};

Crafty.scene('welcome', function() {
  Crafty.background('white url(assets/loading.png) no-repeat center center');
  /* greetings */
  Crafty.e('2D, DOM, Canvas, Text, Mouse')
    .attr({ x: 45, y: 250 })
    .text('enter your name:')
    .textFont({ size: '25px', weight: 'bold' })
    .textColor('black')
    .css({ 'font-family': 'VT323' })
    .css({ 'font-family': 'monospace' });

  /* grab username & start game */
  let username = '';
  Crafty.e('2D, DOM, Text, Mouse')
    .attr({ x: 300, y: 240 })
    .text(username)
    .textFont({ size: '30px', weight: 'bold' })
    .textColor('white')
    .css({ 'font-family': 'VT323' })
    .css({ 'font-family': 'monospace' })
    .bind('KeyDown', function(e) {
      if (e.key == Crafty.keys.ENTER) {
        playerMetrics.name = username;
        if (username === '') {
          alert('you have to enter a name!');
        } else {
          Crafty.enterScene('bedroom'); // destroys this scene
          currentLocation = 'bedroom';
          timer();
          checkUser(username); // checks DB for exising user; startingScore called within
        }
      }
      for (let letter in alphabet) {
        if (e.key == Crafty.keys[letter]) {
          username += this.text(alphabet[letter])._text;
          this.text(username);
        }
      }
      if (e.key == Crafty.keys.BACKSPACE) {
        username = username.slice(0, -1);
        this.text(username);
      }
    });
});

function loadWelcome(scene, duration) {
  Crafty.e('2D, DOM, Tween, Color')
    .attr({ alpha: 0.0, x: 0, y: 0, w: 800, h: 600 })
    .color('#000000')
    .tween({ alpha: 1.0 }, duration)
    .bind('TweenEnd', function() {
      Crafty.scene(scene);
      Crafty.e('2D, DOM, Tween, Color')
        .attr({ alpha: 1.0, x: 0, y: 0, w: 800, h: 600 })
        .color('#000000')
        .tween({ alpha: 0.0 }, duration);
    });
}

loadWelcome('welcome', 0);

// if user in DB, replace playerMetrics with saved
// call startingScore
function checkUser(username) {
  axios
    .get('/data')
    .then(function(response) {
      let db = response.data;
      for (let user in db) {
        if (db[user].gameData.name === username) {
          playerMetrics = db[user].gameData;
          return;
        }
      }
    })
    .then(() => {
      startingScore(playerMetrics);
    })
    .catch(function(error) {
      console.log(error);
    });
}
