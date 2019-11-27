const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

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

video.addEventListener('click', handleVideo);
video.addEventListener('play', handleButtons);
video.addEventListener('pause', handleButtons);

toggle.addEventListener('click', handleVideo);
