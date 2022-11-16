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
let next_button = document.querySelector('.next')
let prev_button = document.querySelector('.previous')
let loop = false;


let data = {
    play_button: play_button,
    pause_button: pause_button,

    musics: musics,
    title: title,
    audio: audio,
    count: count,
    currTime: currTime,
    progress: progress,
    durTime: durTime,

    loop: loop
}

let control = new Control(data)
let slide = new SlideShow()
let upload = new Upload(data)
let time = new Time(data)
let view = new View()


view.toolsView()
upload.drop_Audio()
slide.slideImage()


// set drag image false
window.addEventListener('mousedown', (e) => {
    if (e.target.id == 'img-slider') {
        e.target.draggable = false
    };
    if (e.target.className == 'loop') {

        control.loopMusics()
    };

})

// play button
play_button.addEventListener('click', () => {


    audio.play()


})


// pause button
pause_button.onclick = () => {
    control.pause()
};


// next event
next_button.addEventListener('click', () => {

    control.nextSong()
})
// previous event
prev_button.addEventListener('click', () => {
    control.prevSong()
})
// timeupdate event
audio.addEventListener('timeupdate', (e) => {
    time.DurTime(e)
    time.updateProgress(e)
});

// pause event
audio.addEventListener('pause', () => {})

// ended event
audio.addEventListener('ended', control.nextSong);


// playing event
audio.addEventListener('playing', () => {
    play_button.style.display = 'none'
    pause_button.style.display = 'block'
});
let verse = [
    {
        "book": "Proverbs",
        "chapter": '3',
        "verseFrom": '5',
        "verseTo": '5'
    }, {
        "book": "Matthew",
        "chapter": '22',
        "verseFrom": '37',
        "verseTo": '37'
    }

]

console.log(verse[1].book);
const url = `https://bible-search.p.rapidapi.com/books-by-name/verses?bookName=${
    verse[0].book
}&chapterId=${
    verse[0].chapter
}&verseStart=${
    verse[0].verseFrom
}&verseEnd=${
    verse[0].verseTo
}`;

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7caf19ef8dmsh72f1b0a5853c1fcp1e3a11jsnb265c01b8314',
        'X-RapidAPI-Host': 'bible-search.p.rapidapi.com'
    }
};

fetch(url, options).then(res => res.json()).then(json => {
    console.log(json);
    document.querySelector('.verse-text').innerText = json[0].text;
    document.querySelector('.verse-number').innerText = '~' + json[0].book_name + ' ' + json[0].chapter + ':' + json[0].verse;


}).catch(err => console.error('error:' + err));
