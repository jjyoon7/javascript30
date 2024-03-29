const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const mousedown = false;

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

function handleRange() {
    //this will return which element it has been changed.
    // console.log(video);
    // console.log(this);
    //in video element, update the one with either volumn or playbackrate,
    //based on what this.name returns and set it to value of it.
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function handleScrub(e) {
    console.log(e.offsetX);
    console.log(progress.offsetX);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;    
}

video.addEventListener('click', handleVideo);
video.addEventListener('play', handleButtons);
video.addEventListener('pause', handleButtons);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', handleVideo);

skipButtons.forEach( skip => { skip.addEventListener('click', handleSkip)})
ranges.forEach( range => range.addEventListener('change', handleRange));

progress.addEventListener('click', handleScrub);
progress.addEventListener('mousemove', (e) => mousedown && handleScrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);