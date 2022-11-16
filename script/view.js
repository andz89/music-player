class View {
    toolsView() {
        // document.querySelector(".shuffle").click(function () {
        //     this.classList.toggle("clicked");
        // });
        let timeToClose;
        document.querySelector("#player").addEventListener('mouseover', function () {
            timeToClose = null
            document.querySelector(".info").classList.add('up')
            document.querySelector(".info").classList.remove('down')
            // document.querySelector("#verse-container").classList.remove('up')
            document.querySelector("#verse-container").style.display = 'none'


        });
        document.querySelector("#player").addEventListener('mouseleave', function () {
            timeToClose = 2
            function recursion() {

                if (timeToClose == 0) {
                    document.querySelector(".info").classList.add('down')
                    document.querySelector(".info").classList.remove('up')
                    document.querySelector("#verse-container").style.display = 'block'


                }

                if (timeToClose > 0) {
                    timeToClose--
                    setTimeout(recursion, 1000)

                }

            }
            recursion()


        });


        // music player settings
        document.querySelector(".pause").style.display = "none";


        document.querySelector(".play").click(function () {
            audio.play();
            document.querySelector(".play").style.display = "none";
            document.querySelector(".pause").style.display = "";
        });


        document.querySelector(".pause").click(function () {
            audio.pause();
            document.querySelector(".play").style.display = "";
            document.querySelector(".pause").style.display = "none";
        });

    }
}
export default View
