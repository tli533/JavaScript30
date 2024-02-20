/*get our elements*/
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

const toggle = document.querySelector('.toggle');
const ranges = document.querySelectorAll('.player__slider');
const skipButtons = document.querySelectorAll('[data-skip]');


/*build out functions*/
//play and pause video
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();

}
//changing play and pause button icons
function updateButton() {
    const icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon;
    console.log(icon);
}
//skip buttons
function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

//volume and playrate control
function handleRangeUpdate() {
    video[this.name] = this.value;
    console.log(this.name);
    console.log(this.value);
}

//progression bar of video
function handleProgress() {
    const percent = (video.currentTime/video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

//scrub/slider
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth)*video.duration;
    video.currentTime = scrubTime;
    console.log(e);
}

/*hook up event listeners*/
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('click', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

//smoothing out scrub
let mousedown = false;
progress.addEventListener('click', scrub);

progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);