let musics = []
let count = 0
let audio = document.querySelector('audio')
const title = document.querySelector('.song-name');
const currTime = document.querySelector('.time--current');
const progress = document.querySelector('.progress-bar .fill');
const durTime = document.querySelector('.time--total');

const mutag = window.mutag;
document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");


    inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
            updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
    });

    dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");
    });

    ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
            dropZoneElement.classList.remove("drop-zone--over");
        });
    });

    dropZoneElement.addEventListener("drop", readFile)

    function readFile(e) {
        e.preventDefault();

        let files = e.dataTransfer.files

        for (var i = 0; files.length > i; i++) {

            const urlObj = URL.createObjectURL(files[i]);


            let song = [
                urlObj, files[i].name
            ]
            musics.push(song)
        }

        dropZoneElement.classList.remove("drop-zone--over");
        title.innerText = musics[count][1]


    }


});

document.querySelector('.play').addEventListener('click', playFile)


function playFile() {


    if (musics.length >= count + 1) {
        title.innerText = musics[count][1]
        audio.src = musics[count][0]


        audio.play()

        audio.addEventListener('ended', () => {
            count++
            playFile()
        })
    } else {

        document.querySelector('.pause').style.display = 'none'
        document.querySelector('.play').style.display = 'block'

    }


}


document.querySelector('.pause').onclick = () => {
    audio.pause()
    currTime.innerText = audio.currentTime
    document.querySelector('.play').style.display = 'block'
}


document.querySelector('audio').addEventListener('playing', function () {
    document.querySelector('.pause').style.display = 'block'
    document.querySelector('.play').style.display = 'none'

});

document.querySelector('audio').addEventListener('pause', function () {

    document.querySelector('.pause').style.display = 'none'
    document.querySelector('.play').style.display = 'block'

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
