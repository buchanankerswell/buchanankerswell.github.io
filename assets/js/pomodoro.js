const button = document.querySelector('button');
const timerDisplay = document.querySelector('#timer');
const audio = document.querySelector('audio');

button.addEventListener('click', function() {
  button.style.display = 'none';
  timerDisplay.style.display = 'block';
  audio.play();
  const endTime = Date.now() + 20 * 60 * 1000; // 20 minutes from now
  updateTimer(endTime);
});

function updateTimer(endTime) {
  const timeLeft = endTime - Date.now();
  const minutes = Math.floor(timeLeft / 1000 / 60);
  let seconds = Math.floor(timeLeft / 1000) % 60;
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  timerDisplay.textContent = `${minutes}:${seconds}`;
  if (timeLeft > 0) {
    setTimeout(function() {
      updateTimer(endTime);
    }, 1000);
  } else {
    audio.pause();
    audio.currentTime = 0;
    button.style.display = 'block';
    timerDisplay.style.display = 'none';
  }
}
