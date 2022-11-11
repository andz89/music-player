class Time {
    constructor(data) {

        this.musics = data.musics
        this.title = data.title
        this.audio = data.audio
        this.count = data.count
        this.currTime = data.currTime
        this.durTime = data.durTime
        this.progress = data.progress
    }
    DurTime = (e) => {
        const {duration, currentTime} = e.srcElement;
        var sec;
        var sec_d;

        // define minutes currentTime
        let min = (currentTime == null) ? 0 : Math.floor(currentTime / 60);
        min = min < 10 ? '0' + min : min;

        // define seconds currentTime
        const get_sec = (x) => {
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
        };
        get_sec(currentTime, sec);

        // change currentTime DOM
        this.currTime.innerHTML = min + ':' + sec;

        // define minutes duration
        let min_d = (isNaN(duration) === true) ? '0' : Math.floor(duration / 60);
        min_d = min_d < 10 ? '0' + min_d : min_d;


        const get_sec_d = (x) => {
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
        };

        // define seconds duration

        get_sec_d(duration);

        // change duration DOM
        this.durTime.innerHTML = min_d + ':' + sec_d;


    }

    updateProgress = (e) => {

        const {duration, currentTime} = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        this.progress.style.width = `${progressPercent}%`;


    }
}

export default Time
