import Control from './controls.js'
import SlideShow from './SlideShow.js'
import Upload from './Upload.js'
import Time from './Time.js'
import View from './View.js'


let musics = []
let count = 0
let audio = document.querySelector('audio')
const title = document.querySelector('.song-name');
let currTime = document.querySelector('.time--current');
let progress = document.querySelector('.progress-bar .fill');
let durTime = document.querySelector('.time--total');
let play_button = document.querySelector('.play');
let pause_button = document.querySelector('.pause');
let replay_button = document.querySelector('.replay');
replay_button.style.display = 'none';
let state = false
let data = {
    play_button: pause_button,
    pause_button: pause_button,
    replay_button: replay_button,

    musics: musics,
    title: title,
    audio: audio,
    count: count,
    currTime: currTime,
    progress: progress,
    durTime: durTime,
    state: state
}

let control = new Control(data)
let slide = new SlideShow()
let upload = new Upload(data)
let time = new Time(data)
let view = new View()

view.toolsView()
upload.drop_Audio()
slide.slideImage()
control.audioEvent()

// set drag image false
window.addEventListener('mousedown', (e) => {
    if (e.target.id == 'img-slider') {
        e.target.draggable = false
    };
})

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
    replay_button.style.display = 'none'
});


replay_button.addEventListener('click', () => {
    control.replay()

})

// get duration & currentTime for Time of song


audio.addEventListener('timeupdate', time.DurTime);


audio.addEventListener('timeupdate', time.updateProgress);
