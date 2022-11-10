class Upload {
    constructor(data) {
        this.musics = data.musics
        this.count = data.count
        this.title = data.title
        this.count = data.count
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


                    let song = [
                        urlObj, files[i].name
                    ]

                    this.musics.push(song)
                }

                dropZoneElement.classList.remove("drop-zone--over");
                this.title.innerText = this.musics[this.count][1]


            };
            dropZoneElement.addEventListener("drop", readFile)


        });


    }
}

export default Upload;
