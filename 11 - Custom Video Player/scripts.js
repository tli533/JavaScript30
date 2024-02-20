/*get our elements*/
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

const toggle = document.querySelector('.toggle');
const ranges = document.querySelector('.player__slider');
const skipButtons = document.querySelector('[data-skip]');


/*build out functions*/

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();

}

function updateButton() {
    const icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon;
    console.log('Update the button');
}

/*hook up event listeners*/
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);