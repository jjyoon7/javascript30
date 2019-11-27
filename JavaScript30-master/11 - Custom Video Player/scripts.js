const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

function handleVideo() {
    // console.log('play')
    if(this.paused) {
        video.play();
    }else {
        video.pause();
    }
}

video.addEventListener('click', handleVideo);
