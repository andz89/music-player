let id = [
    'OeMjOFiC7Zc',
    '3O3bDgv9l_w',
    'hMcBPbnlblw',
    '5I5CI39kEl8',
    'wwTmJu0HxDg'
]


let input = 20
let time = input

let index = 0
let slideIndex = 0
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

    // let url = fetch(`https://source.unsplash.com/random/42${
    //     Math.floor(Math.random() * 10)
    // }x640${
    //     Math.floor(Math.random() * 10)
    // }}/?${a}`)

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
        function getMeta(url) {
            var img = new Image();
            img.onload = function () {
                console.log(this.width + " " + this.height);

            };

            img.src = url;
        }
        getMeta(e.url)
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
