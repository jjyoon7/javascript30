const keys = document.querySelectorAll('.key');

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function playSound(e) {
    // "${e.keyCode}" is ES6 syntax, where it is chosing the specific audio element 
    //  where the data-key value matches with the e.keyCode.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    //if there is no audio matching with the key down, then stop the function.
    if(!audio) return;
    audio.play();
    audio.currentTime = 0;
    key.classList.add('playing');
}



function init() {
    window.addEventListener('keydown', playSound);
}

init();