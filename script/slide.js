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


    let url = fetch(`https://source.unsplash.com/random/165${
        Math.floor(Math.random() * 10)
    }x128${
        Math.floor(Math.random() * 10)
    }}/?snow`)

    url.then(renderImage)

    function renderImage(e) {
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
