const song = document.getElementById("song");
const icon = document.getElementById("icon");
const playIcon = document.getElementById("p-icon");
const pauseIcon = document.getElementById("s-icon");



// Function to toggle play and pause
function togglePlayPause() {
    if (song.paused) {
        song.play();
        playIcon.style.display = "inline";
        pauseIcon.style.display = "none"
    } else {
        song.pause();
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline"
    }
}

// Event listener for spacebar key press
document.addEventListener("keydown", (event) => {
    if (" " ) { // 32 is the keycode for spacebar
        togglePlayPause();
        event.preventDefault(); // Prevent scrolling the page when using the spacebar
    }
});

// Event listener for play/pause button click
playIcon.addEventListener("click", togglePlayPause);
pauseIcon.addEventListener("click", togglePlayPause);
