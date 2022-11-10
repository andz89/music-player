import Control from './controls.js'
import SlideShow from './SlideShow.js'
import Upload from './Upload.js'
let musics = []
let count = 0
let audio = document.querySelector('audio')
const title = document.querySelector('.song-name');
const currTime = document.querySelector('.time--current');
const progress = document.querySelector('.progress-bar .fill');
const durTime = document.querySelector('.time--total');
let play_button = document.querySelector('.play');
let pause_button = document.querySelector('.pause');

let data = {
    play_button: pause_button,
    pause_button: pause_button,
    musics: musics,
    title: title,
    audio: audio,
    count: count,
    currTime: currTime,
    progress: progress,
    durTime: durTime
}

let control = new Control(data)
let slide = new SlideShow()
let upload = new Upload(data)


upload.drop_Audio()
slide.slideImage()


// play audio
play_button.addEventListener('click', () => {
    control.playFile()
})


// pause audio
pause_button.onclick = () => {

    control.pause()
}

// check audio is playing
audio.addEventListener('playing', function () {
    pause_button.style.display = 'block'
    play_button.style.display = 'none'

});

audio.addEventListener('pause', function () {

    pause_button.style.display = 'none'
    play_button.style.display = 'block'

});

// get duration & currentTime for Time of song
function DurTime(e) {
    const {duration, currentTime} = e.srcElement;
    var sec;
    var sec_d;

    // define minutes currentTime
    let min = (currentTime == null) ? 0 : Math.floor(currentTime / 60);
    min = min < 10 ? '0' + min : min;

    // define seconds currentTime
    function get_sec(x) {
        if (Math.floor(x) >= 60) {

            for (var i = 1; i <= 60; i++) {
                if (Math.floor(x) >= (60 * i) && Math.floor(x) < (60 * (i + 1))) {
                    sec = Math.floor(x) - (60 * i);
                    sec = sec < 10 ? '0' + sec : sec;
                }
            }
        } else {
            sec = Math.floor(x);
            sec = sec < 10 ? '0' + sec : sec;
        }
    }

    get_sec(currentTime, sec);

    // change currentTime DOM
    currTime.innerHTML = min + ':' + sec;

    // define minutes duration
    let min_d = (isNaN(duration) === true) ? '0' : Math.floor(duration / 60);
    min_d = min_d < 10 ? '0' + min_d : min_d;


    function get_sec_d(x) {
        if (Math.floor(x) >= 60) {

            for (var i = 1; i <= 60; i++) {
                if (Math.floor(x) >= (60 * i) && Math.floor(x) < (60 * (i + 1))) {
                    sec_d = Math.floor(x) - (60 * i);
                    sec_d = sec_d < 10 ? '0' + sec_d : sec_d;
                }
            }
        } else {
            sec_d = (isNaN(duration) === true) ? '0' : Math.floor(x);
            sec_d = sec_d < 10 ? '0' + sec_d : sec_d;
        }
    }

    // define seconds duration

    get_sec_d(duration);

    // change duration DOM
    durTime.innerHTML = min_d + ':' + sec_d;

};

audio.addEventListener('timeupdate', DurTime);


function updateProgress(e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}


audio.addEventListener('timeupdate', updateProgress);
