// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;


function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    pattern = [];
    for(let i = 0; i < 8; i++) {
      pattern.push(Math.floor(Math.random() * 4) + 1);
    }
    console.log(pattern);
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}

function stopGame(){
    //change game variables
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

function darkMode(){
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 510
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(btn == pattern[guessCounter]) {
    // if last turn of the round has been reached:
    if(guessCounter == progress) {
      // if this is the last round, win game.
      if(progress == pattern.length - 1) {
        winGame();
      } 
      // if there are more rounds, play next clue sequence.
      else {
        progress++;
        playClueSequence();
      }
    } 
    // if there are still more turns in the round, continue round.
    else {
      guessCounter++;
    }
  } else {
    loseGame();
  }
  // if(btn != pattern[guessCounter]) {
  //   loseGame();
  // }
  // if(guessCounter < progress) {
  //   guessCounter++;
  // } else {
  //   progress++;
  //   playClueSequence();
  // }
  // if(progress == pattern.length) {
  //   winGame();
  // }
  
}

function loseGame(){
  stopGame();
  alert("Game Over! You lost on round " + (progress+1) + ".");
}

function winGame(){
  stopGame();
  alert("Congratulations, you won!");
}