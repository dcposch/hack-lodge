
const width = window.innerWidth
const height = window.innerHeight - 120

const divBird = document.querySelector('#bird')

let pressedSpace = false
let birdY = height / 2
let birdYVel = 0

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
        birdYVel = -10
        pressedSpace = false
    } else {
        birdYVel += 0.3
    }
    birdY += birdYVel

    divBird.style.top = birdY + 'px'

    if (birdY < height && birdY > 0) {
        window.requestAnimationFrame(frame)
    }
}

