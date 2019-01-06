
const width = 800
const height = 600

const divBird = document.querySelector('#bird')

let pressedSpace = false
let birdY = height / 2 


// Listen for keystrokes
window.addEventListener('keydown', function (e) {
    console.log('pressed ' + e.key)
    pressedSpace = e.key === ' '
})

// Draw the first frame
// After that, we'll draw one 60x per second
frame()

function frame() {

    if (pressedSpace) {
        birdY = 100
        pressedSpace = false
    } else {
        birdY += 1
    }

    divBird.style.top = birdY + 'px'

    window.requestAnimationFrame(frame)
}

