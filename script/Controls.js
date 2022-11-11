class Controls {

    constructor(data) {
        this.play_button = data.play_button
        this.pause_button = data.pause_button
        this.musics = data.musics
        this.title = data.title
        this.audio = data.audio
        this.count = data.count
        this.currTime = data.currTime
        this.replay_button = data.replay_button
        this.state = data.state

    }

    // play audio
    playFile = () => {

        if (this.musics.length >= this.count + 1) {
            if (this.state == false) {
                console.log('false');
                this.title.innerText = this.musics[this.count][1]
                this.audio.src = this.musics[this.count][0]


                let a = this.audio.play()
                if (a !== undefined) {
                    a.then(() => {
                        this.audio.play()
                        this.audio.addEventListener('ended', () => {
                            this.count ++
                            this.playFile()

                        })


                    }).catch(error => {
                        console.log(error);
                        console.log('play error andrew');

                    });
                }
                console.log(this.musics.lastIndexOf(this.musics[this.count]));

            } else {
                console.log('true');
                console.log();
                if (this.musics.length >= this.count + 1) {}
                console.log(this.count);
                this.count = this.count + 1
                if (this.musics.lastIndexOf(this.musics[this.count][0]) == this.musics.length - 1) {
                    console.log('last');
                }
                let a = this.audio.play()
                if (a !== undefined) {
                    a.then(() => {
                        this.audio.play()
                        this.audio.addEventListener('ended', () => {
                            this.count ++
                            this.playFile()

                        })


                    }).catch(error => {
                        console.log(error);
                        console.log('play error andrew');

                    });
                }
                this.state = false
            }

        }

    }

    audioEvent() {
        this.audio.addEventListener('pause', () => {
            if (this.count + 1 > this.musics.length - 1) { // if tapos na tanan kanta
                this.replay_button.style.display = 'block'; // show
                this.play_button.style.display = 'none'
            } else {
                this.replay_button.style.display = 'block'; // show
                this.play_button.style.display = 'none'
            }

        });
    }

    // pause audio
    pause() {
        this.state = true
        this.audio.pause()
    }
    replay() {
        this.count = 0;
        this.playFile()
    }
};
export default Controls;
