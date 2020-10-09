var now = 0

/*function loadPhotos() {
    var field = document.querySelector('.slider')

    for (let c = 0; c < 12; c++) {
        field.innerHTML += `<li id="${c}" value="${c}">
        /assets/${c}.jpg
    </li>`
    }
    console.log(field)
    
}*/
let img = document.getElementById('view')
function slide(mod) {
    if (now < 0) {
        now = 8
    }else if(now > 11){
        now = 3
    }

    switch (mod) {
        case 1:
            now++
            break;
        
        case 2:
            now --
            break;
        default:
            now = 11
            break;
    }

    console.log(now)
    img.setAttribute('src', `/assets/${now}.jpg`)
    /*if (mod == 'Next') {
        now++
        console.log(now)
        img.setAttribute('src', `/assets/${now}.jpg`)

    } else {
        now--

    }*/
}

//loadPhotos()

