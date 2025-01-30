// const cards = document.querySelectorAll(".music-card");
// const overlay = document.getElementById("fullscreen-overlay");
// const overlayImage = document.getElementById("fullscreen-image");
// const overlayAudio = document.getElementById("fullscreen-audio");
// const timeButtons = document.querySelectorAll(".time-options button");

// cards.forEach(card => {
//     card.addEventListener("click", () => {
//         const imgSrc = card.querySelector("img").src;
//         const audioSrc = card.getAttribute("data-audio");

//         // Set image and audio in overlay
//         overlayImage.src = imgSrc;
//         overlayAudio.src = audioSrc;

//         // Show overlay
//         overlay.style.display = "flex";
//     });
// });

// // Add timer functionality
// timeButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         const time = parseInt(button.getAttribute("data-time"));
//         overlayAudio.currentTime = 0;
//         overlayAudio.play();

//         setTimeout(() => {
//             overlayAudio.pause();
//         }, time * 1000);
//     });
// });

// // Hide overlay when clicked outside content
// overlay.addEventListener("click", (e) => {
//     if (e.target === overlay) {
//         overlay.style.display = "none";
//         overlayAudio.pause();
//     }
// });




const card = document.querySelector(".music-card");
const overlay = document.getElementById("fullscreen-overlay");
const overlayImage = document.getElementById("fullscreen-image");
const overlayAudio = document.getElementById("fullscreen-audio");
const exitButton = document.getElementById("exit-button");

// Open fullscreen on card click
card.addEventListener("click", () => {
    const imgSrc = card.querySelector("img").src;
    const audioSrc = card.getAttribute("data-audio");

    // Set image and audio in overlay
    overlayImage.src = imgSrc;
    overlayAudio.src = audioSrc;

    // Show overlay and play audio
    overlay.style.display = "flex";
    overlayAudio.play();
});

// Close fullscreen on exit button click
exitButton.addEventListener("click", () => {
    overlay.style.display = "none";
    overlayAudio.pause(); // Stop audio
    overlayAudio.src = ""; // Clear audio source
});

// Close fullscreen when clicking outside the content
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.style.display = "none";
        overlayAudio.pause();
        overlayAudio.src = "";
    }
});