const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function handleVideo() {
    // console.log('play')
    if(video.paused) {
        video.play();
    }else {
        video.pause();
    }
    // const method = video.paused ? 'play' : 'pause';
    // video[method]();
}

function handleButtons() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function handleSkip() {
    // console.log(this.dataset.skip);
    //because it is a string, you need to parse the number.
    const skipAmount = parseFloat(this.dataset.skip);
    // console.log(skipAmount);
    video.currentTime += skipAmount;
    // this.skip
}

video.addEventListener('click', handleVideo);
video.addEventListener('play', handleButtons);
video.addEventListener('pause', handleButtons);

toggle.addEventListener('click', handleVideo);

skipButtons.forEach( skip => { skip.addEventListener('click', handleSkip)})