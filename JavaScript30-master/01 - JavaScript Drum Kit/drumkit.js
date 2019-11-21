function handleKeyDown(e) {
    // "${e.keyCode}" is ES6 syntax, where it is chosing the specific audio element 
    //  where the data-key value matches with the e.keyCode.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    audio.play();
    audio.currentTime = 0;
    key.classList.add('playing');
}

function init() {
    window.addEventListener('keydown', handleKeyDown);
}

init();