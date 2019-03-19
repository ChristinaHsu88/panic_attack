# DON'T PANIC!
A simple top-down RPG where you interact with everyday items with one specific aim – DON'T HAVE A PANIC ATTACK!

An educational tool, DON'T PANIC! is based off [Dr. Dan Siegel's *Healthy Mind Platter*](https://www.drdansiegel.com/resources/healthy_mind_platter/), a mental health resource outlining what your brain needs on a daily basis to maintain optimal mental health.

DON'T PANIC! brings this resource to life, allowing players to learn about how an imbalance in their lives can lead to anxiety. As players start and play through each new day, their "score" (i.e., their mental health metrics) are carried through to the next day, mimicking the real-life cumulative effects of good and bad habits on mental health.

At the end of each day, your mental health platter metric will be revealed at the bottom of the page. Scroll down to see how (im)balanced your character's engagement has been that day and use it to improve your score the next day. Don't neglect your therapist's call! She'll teach you an important new skill.
![Imbalanced Platter](/docs/imbalanced-chart.png)

## CAVEAT
This is a prototype game built as a final project for Lighthouse Lab's Web Dev Bootcamp. It was built over 13 days by three junior developers with an interest in education, mental health, and stretching the boundaries of what can be done on the web.

As such, it has many limitations in its stated goals. Most notably: **this is not meant to be a diagnostic tool!** If you struggle with anxiety or other mental health issues, please seek out appropriate help from your local resources.

In Canada: https://cmha.ca/
In the USA: https://www.mentalhealth.gov/

## GETTING STARTED
This game is not out-of-the-box ready. You'll need to do a bit of set up to play. Please read the list of KNOWN BUGS before installing the game.
1. Clone this repo onto your local machine.
2. Install dependencies with `npm i`
3. Start the server with `npm start`
4. Open `localhost:8080` on your browser

## HOW TO PLAY
![Game Play Gif](/docs/gameplay.gif)
1. Type your name and press enter. (**SEE KNOWN BUGS**)
2. Move your character around using the `ARROW KEYS`
3. Interact with items by pressing `ENTER` (Note: a yellow pop up will appear to indicate interactability.)
4. Keep an eye on your stress-o-meter.
5. Don't panic! (But it's okay if you do. There are cats.)
![End Cats](/docs/end-scene-cats.png)

## KNOWN BUGS
* This game has NO AUTHENTICATION. This means that your name is the only thing you need to start a game and access your saved game. There is NO PASSWORD. This means that *anyone* can sign in using your name and start playing your game, and you can do the same with theirs.
* The chart changes when you click on it. Until this bug is fixed, we advise you don't click on the chart.
* The character will sometimes manifest in an awkward place when you change rooms.
* World events have been commented out due to weird bugs that couldn't be fixed before we demo'd our project.

## THE TEAM
DON'T PANIC! was built in collaboration by [Sam Nock](https://github.com/samanthanock), [Christina Hsu](https://github.com/ChristinaHsu88), and [Shmoo Ritchie](https://github.com/shmootidy).

## TECH STACK
* CraftyJS
* ExpressJS/Axios
* MongoDB

## FUTURE GOALS
* Fix all bugs:
  * Implement authentication
  * Fix chart
  * Remedy character regeneration placement
  * Reinstate world events
    * Improve UI/UX cues for world events to prevent confusion
* Refactor/rebuild
  * Transfer game to a more robust gaming platform, such as Phaser
  * Modularize scenes, entities, components, and functions.
* Limit character interaction with certain things based on mental health metrics. (E.g., a very hungry character cannot run on the treadmill; a very tired character cannot play with the dog.)
* Customize interactable items, world events, and worlds to a player's preference. (Presently, smoking weed brings the character's stress levels down. This does not reflect reality for many people.)
* Update tiles, timer, instructions, and transitional scenes.
* Expand concept to other subjects that represent gaps in social/cultural knowledge and public education: financial literacy, labour law/rights, navigating romantic/sexual relationships, indigenous land-rights/colonial history, etc.
  * To legitimize this concept, we will need to work in collaboration with relevant experts.
