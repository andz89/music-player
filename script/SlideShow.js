class SlideShow {
    slideImage() {

        let input = 60
        let time = input
        function slide() {
            let random = Math.random() * 5

            let category = [
                'nature',
                // 'summer',
                // 'beach',
                'rain',
                'tree'
            ]


            // let img = document.querySelector('#img-slider')
            // img.src = './images/tree.jpg'
            // img.width = '700';
            // img.height = '560'
            // let bgImage = document.querySelector('.bg-image')
            // bgImage.src = './images/tree.jpg'
            let a = category[~~ random]

            let size = Math.random() * 10

            let url = fetch(`https://source.unsplash.com/random/600x56${ ~~ size
            }/?${a}`)
            // let url = fetch(`https://source.unsplash.com/SYTO3xs06fU/600x560`)

            // src="https://source.unsplash.com/SYTO3xs06fU/1600x900"  for specific image
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
                // console.log(e.url);
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
