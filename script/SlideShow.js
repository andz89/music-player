class SlideShow {
    slideImage() {

        let input = 60
        let time = input
        function slide() {
            let random = Math.random() * 5

            let category = [
                'nature',
                'summer',
                'beach',
                'rain',
                'tree'
            ]
            let a = category[~~ random]
            let url = fetch(`https://source.unsplash.com/random/600x560/?${a}`)

            url.then(renderImage)

            url.catch((e) => {
                let img = document.querySelector('#img-slider')
                img.src = './images/tree.jpg'
                img.width = '1000'
                let bgImage = document.querySelector('.bg-image')
                bgImage.src = './images/tree.jpg'
            })


            function renderImage(e) {
                // function getMeta(url) {
                //     var img = new Image();
                //     img.onload = function () {
                //         console.log(this.width + " " + this.height);

                //     };

                //     img.src = url;
                // }
                // getMeta(e.url)
                let img = document.querySelector('#img-slider')
                img.src ? img.src = ' ' : '';

                let bgImage = document.querySelector('.bg-image')
                bgImage.src ? bgImage.src = ' ' : '';
                time = input
                img.src = e.url
                bgImage.src = e.url


            }

        }


        function recursion() {

            if (time == 0) {
                slide()
            }

            if (time > 0) {
                time--

                setTimeout(recursion, 1000)

            } else {
                time = input
                recursion()

            }


        }

        slide()
        recursion()

    }


}

export default SlideShow;
