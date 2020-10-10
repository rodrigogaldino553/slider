var now = 0
let img = document.getElementById('view')


function slide(mod) {
    if (mod == 1) {
        if (now >= 11) {
            now = 0
        } else {
            now++
        }
    } else {
        if (now <= 0) {
            now = 11
        } else {
            now--
        }
    }

    img.setAttribute('src', `/assets/${now}.jpg`)
    if (now <= 0) {
        now = 11
    } else if (now >= 11) {
        now = 0
    }
}

