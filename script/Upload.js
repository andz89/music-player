class Upload {
    constructor(data) {
        this.musics = data.musics
        this.count = data.count
        this.title = data.title
        this.count = data.count
        this.audio = data.audio
        this.play_button = data.play_button
        this.pause_button = data.pause_button
    }
    drop_Audio() { // drop audio files on browser

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
            const readFile = (e) => {
                e.preventDefault()

                let files = e.dataTransfer.files

                for (var i = 0; files.length > i; i++) {

                    const urlObj = URL.createObjectURL(files[i]);


                    // Regular expression for file extension.
                    var patternFileExtension = /\.([0-9a-z]+)(?:[\?#]|$)/i;

                    // Get the file Extension
                    var fileExtension = (files[i].name).match(patternFileExtension);

                    let file_name = files[i].name.replace(fileExtension[0], '')

                    let song = [urlObj, file_name]

                    this.musics.push(song)


                }
                // set index of songs
                this.title.innerText = this.musics[this.count][1]
                this.audio.src = this.musics[this.count][0]


                dropZoneElement.classList.remove("drop-zone--over");


            };
            dropZoneElement.addEventListener("drop", readFile)


        });


    }
}

export default Upload;
