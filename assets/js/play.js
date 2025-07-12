const listenBtn = document.getElementById('listenBtn');
const introAudio = document.getElementById('introAudio');


listenBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent link navigation

    if (introAudio.paused) {
      introAudio.play();
      listenBtn.textContent = 'Stop Playing';
    } else {
      introAudio.pause();
      introAudio.currentTime = 0; // Optional: rewind to start
      listenBtn.textContent = 'Listen Now';
    }
  });


// Optional: Reset button text when audio ends
introAudio.addEventListener('ended', function() {
    listenBtn.textContent = 'Listen Now';
});