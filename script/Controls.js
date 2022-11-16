class Controls {

    constructor(data) {
        this.play_button = data.play_button;
        this.pause_button = data.pause_button;
        this.musics = data.musics;
        this.title = data.title;
        this.audio = data.audio;
        this.count = data.count;
        this.currTime = data.currTime;
        this.durTime = data.durTime;
        this.state = data.state;
        this.progress = data.progress;
        this.loop = data.loop;

    }

    loopMusics() {
        this.loop ? this.loop = false : this.loop = true;
    }
    songIndex() {
        this.title.innerText = this.musics[this.count][1]
        this.audio.src = this.musics[this.count][0]
    }

    nextSong = () => {
        this.count ++;


        if (this.count > this.musics.length - 1) {
            this.play_button.style.display = 'block';
            this.pause_button.style.display = 'none'
            this.count = 0;
            this.songIndex()
            this.currTime.innerText = '00:00'
            this.durTime.innerText = '00:00'
            this.progress.style.width = '0';
            this.loop ? this.audio.play() : ''
        } else {
            this.songIndex()


            this.audio.play();
        }


    }
    prevSong = () => {
        this.count --;

        if (this.count < 0) {
            this.count = this.musics.length - 1;
            this.songIndex()
            this.loop ? this.audio.play() : ''


        } else {
            this.songIndex()

            this.audio.play();
        }


    }

    // pause audio
    pause() {
        this.play_button.style.display = 'block';
        this.pause_button.style.display = 'none'
        this.audio.pause()
    }

};
export default Controls;
