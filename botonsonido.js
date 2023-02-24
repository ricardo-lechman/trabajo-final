let sound = new Audio("./audio/ambiente.mp3");
playBtn.addEventListener("click", () => {
    sound.play();
});

pauseBtn.addEventListener("click", () => {
    sound.pause();
});
