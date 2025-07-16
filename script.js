const button = document.querySelector('.glow-button');
const song = document.getElementById('loveSong');

// Check if song should continue playing (from previous page)
if (localStorage.getItem('playMusic') === 'true') {
  song.play();
}

// Button click
button.addEventListener('click', () => {
  song.play();
  localStorage.setItem('playMusic', 'true');
  window.location.href = 'next.html'; // Redirect to new page
});

