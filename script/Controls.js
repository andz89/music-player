class Controls {

    constructor(data) {
        this.play_button = data.play_button
        this.pause_button = data.pause_button
        this.musics = data.musics
        this.title = data.title
        this.audio = data.audio
        this.count = data.count
        this.currTime = data.currTime

        this.state = data.state

    }

    // play audio
    playFile = () => {


        this.audio.play()

    }
    nextSong() {
        this.count ++;

        if (this.count > this.musics.length - 1) {
            this.play_button.style.display = 'block';
            this.pause_button.style.display = 'none'
            this.count = 0;
            this.title.innerText = this.musics[this.count][1]
            this.audio.src = this.musics[this.count][0]

            console.log('tapos na');
        } else {
            this.title.innerText = this.musics[this.count][1]
            this.audio.src = this.musics[this.count][0]

            this.audio.play();
        }


    }


    // pause audio
    pause() {

        this.audio.pause()
    }

};
export default Controls;
