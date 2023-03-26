// Constants
const button = document.querySelector('button');
const timerDisplay = document.querySelector('#timer');
const timerDisplayTitle = document.querySelector('#timertitle');
const tunes = document.querySelector('#tunes');
const bell = document.querySelector('#bell');
const background = document.querySelector('body');
let count = 0;
let trackNum = 1;

// Get random track number
trackNum = randomIntFromInterval(1, 2)

// Change track
tunes.src = `assets/mp3/pomodoro${trackNum}.mp3`;

// Button click
button.addEventListener('click', function() {
  // Counter
  count++;
  // Play bell
  bell.play();
  // Hide button and show timer
  button.style.display = 'none';
  timerDisplay.style.display = 'block';
  // Play track
  tunes.play();
  // Set pomodoro timers
  const endTime = Date.now() + 25 * 60 * 1000; // 25 minutes pomodoros
  const endTimeBreak = Date.now() + 30 * 60 * 1000; // 5 minutes between pomodoros
  // Update timer
  updateTimer(endTime, endTimeBreak);
});

// Update timer, ring bell, change background color
function updateTimer(endTime, endTimeBreak) {
  // Set timer
  const timeLeft = endTime - Date.now();
  const timeLeftBreak = endTimeBreak - Date.now();
  const minutes = Math.floor(timeLeft / 1000 / 60);
  const minutesBreak = Math.floor(timeLeftBreak / 1000 / 60);
  let seconds = Math.floor(timeLeft / 1000) % 60;
  let secondsBreak = Math.floor(timeLeftBreak / 1000) % 60;
  if (timeLeft > 0) {
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    // Ring bell for 5 second warning
    if (minutes <= 0 & seconds <= 5) {
      bell.play();
    }
    // Show timer
    timerDisplay.style.display = 'block';
    timerDisplayTitle.style.display = 'block';
    timerDisplay.style.color = '#000000';
    timerDisplayTitle.style.color = '#000000';
    timerDisplay.textContent = `${minutes}:${seconds}`;
    timerDisplayTitle.textContent = `Round ${count}`;
    // Update timer
    setTimeout(function() {
      updateTimer(endTime, endTimeBreak);
    }, 1000);
  } else if (timeLeft <= 0 & timeLeftBreak > 0) {
    // Pomodoro break
    if (secondsBreak < 10) {
      secondsBreak = '0' + secondsBreak;
    }
    // Ring bell for 5 second warning
    if (minutesBreak <= 0 & secondsBreak <= 5) {
      bell.play();
    }
    // Change background to gray
    changeBackgroundGray();
    // Show timer
    timerDisplay.style.color = 'gray';
    timerDisplayTitle.style.color = 'gray';
    timerDisplay.textContent = `${minutesBreak}:${secondsBreak}`;
    timerDisplayTitle.textContent = `Break ${count}`;
    // Update timer
    setTimeout(function() {
      updateTimer(endTime, endTimeBreak);
    }, 1000);
  } else {
    // End pomodoro
    // Change background back to color
    changeBackgroundColor();
    // Show button and hide timer
    button.style.display = 'block';
    timerDisplay.style.display = 'none';
    timerDisplayTitle.style.display = 'none';
  }
}

// Helper functions
//
// Change background colors
function changeBackgroundGray() {
    background.style.background = 'linear-gradient(-45deg, #F5F5F5, #808080, #303030, #000000)';
    background.style.backgroundSize = '400% 400%';
    background.style.animation = 'gradient 30s ease infinite';
}
function changeBackgroundColor() {
    background.style.background = 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)';
    background.style.backgroundSize = '400% 400%';
    background.style.animation = 'gradient 30s ease infinite';
}
// Random interger within interval
function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
