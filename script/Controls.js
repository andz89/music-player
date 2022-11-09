class Controls {

    constructor(data) {
        this.play_button = data.play_button
        this.pause_button = data.pause_button
        this.musics = data.musics
        this.title = data.title
        this.audio = data.audio
        this.count = data.count
        this.currTime = data.currTime
    }
    playFile() {


        if (this.musics.length >= this.count + 1) {
            this.title.innerText = this.musics[this.count][1]
            this.audio.src = this.musics[this.count][0]


            this.audio.play()

            this.audio.addEventListener('ended', () => {
                this.count ++
                playFile()
            })
        } else {

            this.pause_button.style.display = 'none'
            this.play_button.style.display = 'block'

        }


    }

    pause() {
        this.audio.pause()
        this.currTime.innerText = this.audio.currentTime
        this.play_button.style.display = 'none'
    }
};
export default Controls;
