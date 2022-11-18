class SlideShow {
    slideImage() {

        let input = 60
        let time = input
        function slide() {

            let bgImage = document.querySelector('.bg-image')
            bgImage.src = './images/wood.jpg'
            let random = Math.random() * 5

            let category = [
                'nature',
                // 'summer',
                // 'beach',
                'rain',
                'tree'
            ]


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

            })


            function renderImage(e) {

                let img = document.querySelector('#img-slider')
                img.src ? img.src = ' ' : '';


                time = input
                img.src = e.url


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
