window.addEventListener('load', init)

// Globals

//Available Levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 1
}

//To change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];

// Initialise Game
function init() {
    //Show number of seconds in UI
    seconds.innerHTML = currentLevel;
    // Load word from array
    showWord(words);
    // Start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countDown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
}

//Start match
function startMatch() {
    if(matchWords()) {
        setTimeout(function() {
            isPlaying = true;
            time = currentLevel + 1;
            showWord(words);
            wordInput.value = '';
            score++;
            // If score is -1, display 0
            if(score === -1) {
                scoreDisplay.innerHTML = 0;        
            } else {
                scoreDisplay.innerHTML = score;
            }
        }, 1000);
    }
}
    

// Match currentWord to the word input
function matchWords() {
        if(wordInput.value === currentWord.innerHTML) {
            message.classList.remove('text-danger')
            message.classList.add('text-success');
            message.innerHTML = '✓ Correct';
            return true;
        } else {
            return false;
        }
}

// Pick & show random word
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output random word
    currentWord.innerHTML = words[randIndex];
    message.innerHTML = '&nbsp;';
} 

// Countdown Timer
function countDown() {
    // Make sure time is not run out
    if(time > 0) {
        // Decrement
        time--;
    } else if (time === 0){
    // Game is over
    isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
    if(!isPlaying && time === 0 && score != -1) {
        message.classList.remove('text-success');
        message.classList.add('text-danger');
        message.innerHTML = 'Game Over';
        score = -1;
    }
}