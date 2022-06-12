window.addEventListener("keydown", function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keypress}"]`)
    if(!audio) return // stops the function from running
    audio.currentTime = 0 // rewind audio to the start
})