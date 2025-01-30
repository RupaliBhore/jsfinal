// script.js

// Select all music cards
const musicCards = document.querySelectorAll(".music-card");
// Select the audio player
const audio = document.getElementById("audio");
const audioSource = document.getElementById("audio-source");

// Add click event listener to each card
musicCards.forEach((card) => {
    card.addEventListener("click", () => {
        // Get the audio file from the data-audio attribute
        const audioFile = card.getAttribute("data-audio");

        // Set the audio source and play the song
        audioSource.src = audioFile;
        audio.load(); // Load the new audio file
        audio.play(); // Play the song
    });
});
